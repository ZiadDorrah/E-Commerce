import React, { useEffect, useState } from "react";
import styles from "./Signin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginUser, reset } from "../../store/auth/authSlice";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSuccessVisual, setIsSuccessVisual] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true); // 👈 for spinner while checking token

  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  // 🧠 Handle input
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  // ✅ Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Handle submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(loginUser({ email, password }));
  };

  // 🔍 Check if user already logged in (via token)
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/", { replace: true });
    } else {
      setCheckingAuth(false);
    }
  }, [navigate]);

  // 🪄 Handle login result
  useEffect(() => {
    if (isError) setErrors({ general: message });
    if (isSuccess || user) {
      setIsSuccessVisual(true);
      setTimeout(() => {
        navigate("/");
        dispatch(reset());
      }, 800);
    } else {
      dispatch(reset());
    }
  }, [user, isSuccess, isError, message, dispatch, navigate]);

  // 🌀 Show spinner while checking token
  if (checkingAuth)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className={styles.spinner}></div>
      </div>
    );

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className={`${styles.card} ${isSuccessVisual ? styles.successCard : ""}`}
      >
        <h3 className="text-center">Sign In</h3>

        <form onSubmit={submitHandler} noValidate className="mb-3">
          {/* EMAIL */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="name@example.com"
              required
              disabled={isLoading}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          {/* General Error */}
          {errors.general && (
            <div className="text-danger mb-3 text-center">{errors.general}</div>
          )}

          {/* ✅ Button changes visually when success */}
          <button
            type="submit"
            className={`btn ${styles.submit} w-100 ${isSuccessVisual ? styles.successBtn : ""
              }`}
            disabled={isLoading || isSuccessVisual}
          >
            {isLoading ? (
              <div className={styles.spinnerSmall}></div>
            ) : isSuccessVisual ? (
              "✔ Logged in!"
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="text-center mt-2">
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
