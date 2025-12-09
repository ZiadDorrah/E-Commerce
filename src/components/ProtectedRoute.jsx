import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");

  // if no token → go to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    // check if token is expired
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();
    if (isExpired) {
      Cookies.remove("token");
      return <Navigate to="/login" replace />;
    }
  } catch {
    // if decoding fails, remove bad token
    Cookies.remove("token");
    return <Navigate to="/login" replace />;
  }

  // if valid token → show the page
  return children;
};

export default ProtectedRoute;
