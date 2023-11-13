import { fetchProductsCategoriesReq } from "@/api/products";
import React, { FC } from "react";
import styles from "./categories-row.module.css";
import Link from "next/link";
import { CategoryRowItem } from "./category-row-item";

interface Props {
  parentKey: string;
}

export const CategoriesRow: FC<Props> = async ({ parentKey }) => {
  const { data: categories } = await fetchProductsCategoriesReq({ parentKey });

  if (!categories.length) return null;
  return (
    <div className={styles.container}>
      {categories.map((it) => (
        <CategoryRowItem
          href={`/catalog/${it.key}?parentKey=${parentKey}`}
          label={it.translate?.name}
          key={it.id}
        />
      ))}
    </div>
  );
};
