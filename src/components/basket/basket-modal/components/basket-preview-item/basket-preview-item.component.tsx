"use client";

import React, { FC } from "react";
import styles from "./basket-preview-item.module.css";
import Image from "next/legacy/image";
import { IBasketPreviewItem } from "@/typing/interfaces/basket";
import { defaultTo } from "lodash";
import { CountInput } from "@/components/count-input";
import CloseIcon from "@rsuite/icons/Close";

interface Props {
  item: IBasketPreviewItem;
  onChangeCount: (count: number) => void;
  onPressDelete: () => void;
}
export const BasketPreviewItem: FC<Props> = ({
  item,
  onChangeCount,
  onPressDelete,
}) => {
  if (!item.count) return null;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.image}>
          <Image
            src={defaultTo(item.previewMedia?.path, "")}
            alt={item.translate.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.content}>
          <p className={styles.title}>{item.translate.name}</p>
          <div className={styles.priceRow}>
            <p className={styles.price}>{item.price} грн. - </p>
            <p className={styles.weight}>{item.content?.weight} гр.</p>
          </div>
        </div>

        <div className={styles.controlls}>
          <CountInput value={item.count} onChange={onChangeCount} />
          <button className={styles.close} onClick={onPressDelete}>
            <CloseIcon width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
