"use client";

import { getBasketPreviewReq } from "@/api/basket/get-basket-preview.api";
import { useBasketStore } from "@/store/basket.store";

import { IBasketPreview } from "@/typing/interfaces/basket";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Drawer } from "rsuite";
import { BasketPreviewItem } from "./components/basket-preview-item";

import { BasketFooter } from "./components/basket-footer";
import { BasketList } from "../basket-list";
import {
  selectBacketPreview,
  useBackerPreviewStore,
} from "@/store/basket-preview.store";
import { useRouter } from "next/navigation";

export const BasketModal = () => {
  const isOpen = useBasketStore((state) => state.isBasketModalOpened);
  const closeModal = useBasketStore((state) => state.closeModal);
  const router = useRouter();

  const goToCheckout = () => {
    closeModal();
    router.push("/checkout");
  };

  return (
    <Drawer open={isOpen} onClose={closeModal}>
      <Drawer.Header>
        <Drawer.Title>Ваша корзина</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body style={{ padding: 20, flex: 1 }}>
        <BasketList />
      </Drawer.Body>
      <Drawer.Footer>
        <BasketFooter onPress={goToCheckout} />
      </Drawer.Footer>
    </Drawer>
  );
};
