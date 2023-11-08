"use client";
import React, { FC, PropsWithChildren } from "react";
import styles from "./form-controll-wrap.module.css";

interface Props {
  title: string;
  error?: string;
}
export const FormControllWrap: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  error,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {children}

      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};
