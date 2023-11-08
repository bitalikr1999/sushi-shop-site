"use client";
import React, { useMemo } from "react";
import { useBasketStore } from "@/store/basket.store";
import { BasketPreviewItem } from "../basket-modal/components/basket-preview-item";
import {
  selectBacketPreview,
  useBackerPreviewStore,
} from "@/store/basket-preview.store";
import { Loader } from "rsuite";

export const BasketList = () => {
  const items = useBasketStore((state) => state.items);
  const changeCount = useBasketStore((state) => state.changeCount);
  const remove = useBasketStore((state) => state.remove);
  const basketPreview = useBackerPreviewStore(selectBacketPreview);
  const isLoading = useBackerPreviewStore((state) => state.isLoading);

  const itemsToRender = useMemo(() => {
    if (!basketPreview || !basketPreview.products) return [];
    return basketPreview?.products.map((item) => {
      const basketItem = items.find((it) => it.productId === item.id);
      return {
        ...item,
        count: Number(basketItem?.count),
      };
    });
  }, [items, basketPreview?.products]);

  const renderItems = () => {
    return itemsToRender.map((it) => {
      return (
        <BasketPreviewItem
          item={it}
          key={it.id}
          onChangeCount={(count) => changeCount(it.id, count)}
          onPressDelete={() => remove(it.id)}
        />
      );
    });
  };

  if (isLoading) return <Loader />;
  return <div>{renderItems()}</div>;
};
