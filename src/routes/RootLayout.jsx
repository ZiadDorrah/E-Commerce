import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import styles from './RootLayout.module.css'

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <main className={styles['main-content']}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
