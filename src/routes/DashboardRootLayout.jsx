import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";
import styles from "./DashboardRootLayout.module.css";

const DashboardRootLayout = () => {
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
