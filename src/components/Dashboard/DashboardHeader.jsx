import React from "react";
import styles from "./DashboardHeader.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import profileImg from "../../assets/avatar.png";
import { CiSearch } from "react-icons/ci";

const DashboardHeader = () => {
  return (
    <>
      <div className={styles.dashSearch}>
        <CiSearch className={styles.searchIcon} />
        <input
          className={`form-control ${styles.search}`}
          type="text"
          name="search"
          placeholder="Search..."
        />
      </div>

      <div className={styles.dashControl}>
        <IoIosNotificationsOutline className={styles.notificationIcon} />
        <img className={styles.profileImg} src={profileImg} alt="Profile" />
      </div>
    </>
  );
};

export default DashboardHeader;
