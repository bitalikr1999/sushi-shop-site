"use client";
import React, { FC } from "react";
import styles from "./basket-footer.module.css";
import {
  selectBacketPreview,
  useBackerPreviewStore,
} from "@/store/basket-preview.store";
interface Props {
  onPress?: () => void;
}

export const BasketFooter: FC<Props> = ({ onPress }) => {
  const basketPreview = useBackerPreviewStore(selectBacketPreview);
  if (!basketPreview) return null;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.txt}>Разом:</p>
        <p className={styles.price}>
          {basketPreview.nettoAmount} <span>грн.</span>
        </p>
      </div>
      <div className={styles.right}>
        <button className="button" onClick={onPress}>
          Замовити
        </button>
      </div>
    </div>
  );
};
