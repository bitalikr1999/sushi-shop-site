"use client";
import React, { FC } from "react";
import styles from "./count-input.module.css";
import { defaultTo } from "lodash";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const CountInput: FC<Props> = ({ value, onChange }) => {
  const minus = () => {
    const res = Number(value) - 1;
    onChange(res > 1 ? res : 1);
  };

  const add = () => {
    onChange(Number(value + 1));
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={minus}>
        -
      </button>
      <p className={styles.value}>{value}</p>
      <button className={styles.btn} onClick={add}>
        +
      </button>
    </div>
  );
};
