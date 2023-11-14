"use client";

import React from "react";
import styles from "./menu-icon.module.css";

export const MenuIcon = ({ isClose }: any) => {
  return (
    <div className={isClose ? styles.closeContainer : styles.container}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};
