import React, { useEffect, useState } from "react";
import styles from "./AdminLogin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginAdmin, reset } from "../../store/auth/authSlice";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true); // 👈 loading guard

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  // ✅ Check token on mount BEFORE rendering
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    } else {
      setCheckingAuth(false);
    }
  }, [navigate]);

  // ✅ Handle login result
  useEffect(() => {
    if (isError) {
      setErrorMsg(message || "Invalid credentials");
      setSuccess(false);
    }

    if (isSuccess && user) {
      setSuccess(true);
      setErrorMsg("");

      setTimeout(() => {
        if (user.role === "admin") {
          navigate("/dashboard", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      }, 800);
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, dispatch, navigate]);

  // ✅ Validation
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please fill in both fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    setErrorMsg("");
    dispatch(loginAdmin({ email, password }));
  };

  // 🌀 Show spinner while checking auth
  if (checkingAuth)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className={styles.spinner}></div>
      </div>
    );

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className={`${styles.card} ${success ? styles.success : ""}`}>
        <h3 className="text-center">Admin Login</h3>

        {errorMsg && <p className={styles.error}>{errorMsg}</p>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <button
          className={`btn ${styles.submit}`}
          type="submit"
          onClick={submitHandler}
          disabled={isLoading || success}
        >
          {isLoading ? "Loading..." : success ? "✅ Success!" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
