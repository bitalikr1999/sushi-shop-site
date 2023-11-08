"use client";

import React, { useEffect, useMemo, useRef } from "react";
import styles from "./bucket-point.module.css";

import { BasketIcon } from "@/components/icons/basket";
import { useBasketStore } from "@/store/basket.store";
import { useBackerPreviewStore } from "@/store/basket-preview.store";
import { defaultTo } from "lodash";

export const BasketPoint = () => {
  const basketItems = useBasketStore((state) => state.items);
  const openModal = useBasketStore((state) => state.openModal);
  const reloadBacketPreview = useBackerPreviewStore((state) => state.reload);
  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      reloadBacketPreview();
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [basketItems, reloadBacketPreview]);

  return (
    <div className={styles.basket} onClick={openModal}>
      <BasketIcon />

      <p className={styles.count}>{defaultTo(basketItems.length, 0)}</p>
    </div>
  );
};

export default BasketPoint;
