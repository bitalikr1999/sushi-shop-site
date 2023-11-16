import React, { FC } from "react";
import styles from "./products-list.module.css";
import { ProductCard } from "../product-card";
import { IProduct } from "@/typing/interfaces";

interface Props {
  items: IProduct[];
  emptyMessage?: string;
}

export const ProductsList: FC<Props> = ({
  items,
  emptyMessage = "По заданих параметрах товарів не знайдено",
}) => {
  function getContent() {
    if (!items || !items.length) {
      return (
        <div className={styles.notFound}>
          <p>{emptyMessage}</p>
        </div>
      );
    } else return items.map((it) => <ProductCard product={it} key={it.id} />);
  }
  return <div className={styles.container}>{getContent()}</div>;
};
