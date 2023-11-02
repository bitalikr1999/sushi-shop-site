import React from "react";
import styles from "./products-list.module.css";
import { ProductCard } from "../product-card";

export const ProductsList = () => {
  return (
    <div className={styles.container}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
