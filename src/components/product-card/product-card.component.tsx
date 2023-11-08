/* eslint-disable react/no-unescaped-entities */
import React, { FC } from "react";
import styles from "./product-card.module.css";
import Image from "next/image";
import cardImg from "@/assets/card.jpeg";
import { IProduct } from "@/typing/interfaces";
import { AddProductToBasketButton } from "./add-product-to-basket-btn.component";

interface Props {
  product: IProduct;
}
export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBlock}>
        <Image
          className={styles.img}
          alt=""
          src={product.previewMedia ? product.previewMedia?.url : cardImg}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.weight}>{product.content.weight} гр.</p>
        <p className={styles.title}>{product.translate.name}</p>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: product.translate.description }}
        ></div>
      </div>

      <div className={styles.footer}>
        <div className={styles.left}>
          <p className={styles.price}>{product.price.toLocaleString()} грн.</p>
        </div>

        <AddProductToBasketButton product={product} />
      </div>
    </div>
  );
};
