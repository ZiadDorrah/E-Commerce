import React from "react";
import styles from "./DashboardSidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={styles.sidebar}>
      <h5 className="text-center mb-3">Dashboard</h5>
      <ul className={styles.sideBarLinks}>
        {/* Dashboard — exact match */}
        <li className={currentPath === "/dashboard" ? styles.active : ""}>
          <Link to="/dashboard" className="d-flex align-items-center gap-2">
            <BiSolidDashboard />
            Dashboard
          </Link>
        </li>

        {/* Sub pages — partial match okay */}
        <li
          className={
            currentPath.startsWith("/dashboard/products") ? styles.active : ""
          }
        >
          <Link
            to="/dashboard/products"
            className="d-flex align-items-center gap-2"
          >
            <MdOutlineProductionQuantityLimits />
            Products
          </Link>
        </li>

        <li
          className={
            currentPath.startsWith("/dashboard/orders") ? styles.active : ""
          }
        >
          <Link
            to="/dashboard/orders"
            className="d-flex align-items-center gap-2"
          >
            <BsBorderStyle />
            Orders
          </Link>
        </li>

        <li
          className={
            currentPath.startsWith("/dashboard/users") ? styles.active : ""
          }
        >
          <Link
            to="/dashboard/users"
            className="d-flex align-items-center gap-2"
          >
            <FaUsers />
            Users
          </Link>
        </li>

        <li
          className={
            currentPath.startsWith("/dashboard/reports") ? styles.active : ""
          }
        >
          <Link
            to="/dashboard/reports"
            className="d-flex align-items-center gap-2"
          >
            <TbReportSearch />
            Reports
          </Link>
        </li>

        <li
          className={
            currentPath.startsWith("/dashboard/settings") ? styles.active : ""
          }
        >
          <Link
            to="/dashboard/settings"
            className="d-flex align-items-center gap-2"
          >
            <IoIosSettings />
            Settings
          </Link>
        </li>

        <li
          className={
            currentPath.startsWith("/dashboard/logout") ? styles.active : ""
          }
        >
          <Link
            to="/dashboard/logout"
            className="d-flex align-items-center gap-2"
          >
            <IoLogOut />
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardSidebar;
