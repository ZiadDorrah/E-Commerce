import React, { useEffect, useState } from "react";
import styles from "./Signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, reset } from "../../store/auth/authSlice";
import Cookies from "js-cookie";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccessVisual, setIsSuccessVisual] = useState(false); // ✅ for success animation
  const [checkingAuth, setCheckingAuth] = useState(true); // ✅ spinner while checking token

  //   Here overpages
  const [lifecycle, setLifecycle] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const { name, gender, day, month, year, email, password, confirmPassword } =
    formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  // 🧠 handle input
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  // ✅ validation
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!gender) newErrors.gender = "Please select your gender";
    if (!day) newErrors.day = "Please select your day";
    if (!month) newErrors.month = "Please select month";
    if (!year) newErrors.year = "Please select year";

    if (lifecycle > 0) {
      if (!email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        newErrors.email = "Please enter a valid email address";

      if (!password.trim()) newErrors.password = "Password is required";
      else if (password.length < 6)
        newErrors.password = "Password must be at least 6 characters";

      if (!confirmPassword.trim())
        newErrors.confirmPassword = "Confirm Password is required";
      else if (confirmPassword !== password)
        newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLifecycle(true);
      return true; // ✅ VALID form
    } else {
      return false; // ❌ INVALID form
    }
  };

  // 🚀 handle submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const birthdate = `${year}-${month}-${day}`;
    console.log({ name, email, password, gender, birthdate });

    dispatch(registerUser({ name, email, password, gender, birthdate }));
  };

  // 🔍 Check if user already logged in
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/", { replace: true });
    } else {
      setCheckingAuth(false);
    }
  }, [navigate]);

  // 🪄 handle login result
  useEffect(() => {
    if (isError) setErrors({ general: message });

    if (isSuccess || user) {
      setIsSuccessVisual(true); // ✅ show success UI
      setTimeout(() => {
        navigate("/");
        dispatch(reset());
      }, 800); // small delay for user to see success
    } else {
      dispatch(reset());
    }
  }, [user, isSuccess, isError, message, dispatch, navigate]);

  // 🌀 Spinner while checking token
  if (checkingAuth)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className={styles.spinner}></div>
      </div>
    );

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className={`${styles.card} ${isSuccessVisual ? styles.successCard : ""
          }`}
      >
        <h3 className="text-center mb-5">Sign Up</h3>

        <form onSubmit={submitHandler} noValidate className="mb-3">
          {/* First Lifecycle */}
          {!lifecycle && (
            <>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Your Name OR Surname"
                  required
                />
                <label htmlFor="name">Your Name OR Surname</label>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="form-floating mb-3">
                <select
                  name="gender" // ✅ this is the missing piece
                  className={`form-select text-secondary ${errors.gender ? "is-invalid" : ""
                    }`}
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male" className="text-black">
                    Male
                  </option>
                  <option value="female" className="text-black">
                    Female
                  </option>
                </select>
                <label htmlFor="floatingSelect">Gender</label>
                {errors.gender && (
                  <div className="invalid-feedback">{errors.gender}</div>
                )}
              </div>

              {/* birthDay */}
              <div
                className={`${styles.birthDay} d-flex justify-content-between align-items-center gap-3`}
              >
                {/* Day */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="day"
                    id="day"
                    value={day}
                    onChange={handleChange}
                    maxLength={2}
                    className={`form-control ${errors.day ? "is-invalid" : ""}`}
                    placeholder="Day"
                    required
                  />
                  <label htmlFor="day">Day</label>
                  {errors.day && (
                    <div className="invalid-feedback">{errors.day}</div>
                  )}
                </div>

                {/* Mounth */}
                <div className="form-floating mb-3">
                  <select
                    name="month" // ✅ this is the missing piece
                    className={`form-select text-secondary ${errors.month ? "is-invalid" : ""
                      }`}
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    value={month}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    <option value="01" className="text-black">
                      January
                    </option>
                    <option value="02" className="text-black">
                      February
                    </option>
                    <option value="03" className="text-black">
                      March
                    </option>
                    <option value="04" className="text-black">
                      April
                    </option>
                    <option value="05" className="text-black">
                      May
                    </option>
                    <option value="06" className="text-black">
                      June
                    </option>
                    <option value="07" className="text-black">
                      July
                    </option>
                    <option value="08" className="text-black">
                      August
                    </option>
                    <option value="09" className="text-black">
                      September
                    </option>
                    <option value="10" className="text-black">
                      October
                    </option>
                    <option value="11" className="text-black">
                      November
                    </option>
                    <option value="12" className="text-black">
                      December
                    </option>
                  </select>
                  <label htmlFor="floatingSelect">month</label>
                  {errors.month && (
                    <div className="invalid-feedback">{errors.month}</div>
                  )}
                </div>

                {/* Year */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="year"
                    id="year"
                    value={year}
                    onChange={handleChange}
                    maxLength={4}
                    className={`form-control ${errors.year ? "is-invalid" : ""
                      }`}
                    placeholder="year"
                    required
                  />
                  <label htmlFor="year">Year</label>
                  {errors.year && (
                    <div className="invalid-feedback">{errors.year}</div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Second Lifecycle */}
          {lifecycle && (
            <>
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
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  className={`form-control ${errors.password ? "is-invalid" : ""
                    }`}
                  placeholder="Enter your password"
                  required
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Confirm Password:
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
                    }`}
                  placeholder="Enter your confirm password"
                  required
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkDefault"
                  checked={showPass}
                  onChange={() => setShowPass(!showPass)}
                />
                <label className="form-check-label" htmlFor="checkDefault">
                  Show Password
                </label>
              </div>
            </>
          )}
          {/* General Error */}
          {errors.general && (
            <div className="text-danger mb-3 text-center">{errors.general}</div>
          )}

          {/* ✅ Button changes visually when success */}

          {!lifecycle ? (
            <div className="d-flex mt-5 justify-content-end align-items-center">
              <button
                type="button"
                className={`btn ${styles.next} w-50`}
                onClick={validate}
              >
                Next
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className={`btn mt-5 ${styles.submit} w-100 ${isSuccessVisual ? styles.successBtn : ""
                }`}
              disabled={isLoading || isSuccessVisual}
            >
              {isLoading
                ? "Loading..."
                : isSuccessVisual
                  ? "✔ Logged in!"
                  : "Login"}
            </button>
          )}
        </form>
        <Link to="/login">Already have account?</Link>
      </div>
    </div>
  );
};

export default Signup;
