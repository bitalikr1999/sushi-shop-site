"use client";
import { IProduct } from "@/typing/interfaces";
import React, { FC } from "react";
import styles from "./product-card.module.css";
import { useBasketStore } from "@/store/basket.store";

interface Props {
  product: IProduct;
}
export const AddProductToBasketButton: FC<Props> = ({ product }) => {
  const addToBasket = useBasketStore((state) => state.add);

  if (Number(product.price) === 0) return null;

  return (
    <button onClick={() => addToBasket(product)} className={styles.btn}>
      Замовити
    </button>
  );
};
