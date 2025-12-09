import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./DashboardRootLayout.module.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const DashboardRootLayout = () => {

  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      navigate("/adminLogin", { replace: true });
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.role !== "admin") {
        Cookies.remove("token");
        navigate("/adminLogin", { replace: true });
        return;
      }

      // ✅ Token is valid → allow rendering
      setIsAuthorized(true);
    } catch (error) {
      Cookies.remove("token");
      navigate("/adminLogin", { replace: true });
    }
  }, [navigate]);

  if (!isAuthorized) {
    // ✅ prevent UI flicker
    return null;
  }



  return (
    <div className={styles.dashboardLayout}>
      <aside className={styles.dashboardSidebar}>
        <DashboardSidebar />
      </aside>

      <div className={styles.dashboardMain}>
        <header className={styles.dashboardHeader}>
          <DashboardHeader />
        </header>

        <main className={styles.dashboardContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardRootLayout;
