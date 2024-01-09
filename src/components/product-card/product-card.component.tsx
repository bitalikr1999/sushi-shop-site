/* eslint-disable react/no-unescaped-entities */
import React, { FC } from "react";
import styles from "./product-card.module.css";
import Image from "next/legacy/image";
import emptyimg from "@/assets/empty.jpeg";
import { IProduct } from "@/typing/interfaces";
import { AddProductToBasketButton } from "./add-product-to-basket-btn.component";
import { getDiscountPrice } from "@/shared/helpers";

interface Props {
  product: IProduct;
}

const Price: FC<Props> = ({ product }) => {
  if (Number(product.price) === 0) return null;

  if (product.discount) {
    return (
      <>
        <p className={styles.price}>
          {getDiscountPrice(product)}
          грн.
        </p>
        <p className={styles.bruttoPrice}>
          {product.price.toLocaleString()}
          грн.
        </p>
      </>
    );
  }

  return <p className={styles.price}>{product.price.toLocaleString()} грн.</p>;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      {product.discount > 0 ? (
        <p className={styles.discount}>{product.discount}%</p>
      ) : null}
      <div className={styles.imgBlock}>
        <Image
          className={styles.img}
          alt=""
          src={product.previewMedia ? product.previewMedia?.url : emptyimg}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{product.translate.name}</p>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: product.translate.description }}
        ></div>
        <p className={styles.weight}>
          {product.content.weight ? `${product.content.weight} гр.` : null}
        </p>
      </div>

      <div className={styles.footer}>
        <div className={styles.left}>
          <Price product={product} />
        </div>

        <AddProductToBasketButton product={product} />
      </div>
    </div>
  );
};
