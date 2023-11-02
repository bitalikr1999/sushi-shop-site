/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./product-card.module.css";
import Image from "next/image";
import cardImg from "@/assets/card.jpeg";

export const ProductCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBlock}>
        <Image
          className={styles.img}
          alt=""
          src={cardImg}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.weight}>450 гр.</p>
        <p className={styles.title}>Ролли з лососем теріякі</p>
        <p className={styles.description}>
          Лосось, бальзамічний оцет, соус "Теріякі"
        </p>
      </div>

      <div className={styles.footer}>
        <div className={styles.left}>
          <p className={styles.price}>250 грн.</p>
        </div>

        <button className={styles.btn}>Замовити</button>
      </div>
    </div>
  );
};
