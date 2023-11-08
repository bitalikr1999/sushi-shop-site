"use client";

import React from "react";
import styles from "./search.module.css";
import SearchIcon from "@rsuite/icons/Search";

export const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrap}>
        <SearchIcon className={styles.icon} />
        <input type="text" placeholder="Пошук..." className={styles.input} />
      </div>
    </div>
  );
};
