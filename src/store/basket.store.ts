"use client";
import { IProduct } from "@/typing/interfaces";
import { IBasketItem } from "@/typing/interfaces/basket";
import { defaultTo } from "lodash";
import posthog from "posthog-js";
import { create } from "zustand";

interface BasketStore {
  items: IBasketItem[];
  isBasketModalOpened: boolean;
  add: (item: IProduct) => void;
  remove: (productId: number) => void;
  openModal: () => void;
  closeModal: () => void;
  changeCount: (productId: number, count: number) => void;
  clear: () => void;
}

const save = (state: BasketStore) => {
  localStorage?.setItem("basketStore", JSON.stringify(state));
  return state;
};

const initialState = () => {
  if (typeof window === "undefined") return { items: [] };
  const data = localStorage?.getItem("basketStore");
  if (data) return JSON.parse(data);
  return {
    items: [],
  };
};

export const useBasketStore = create<BasketStore>((set) => ({
  items: initialState().items,
  isBasketModalOpened: false,
  clear: () => {
    set((state) => save({ ...state, items: [], isBasketModalOpened: false }));
  },
  add: (item) => {
    posthog.capture("add_to_basket", {
      $set: { productName: item.translate?.name, price: item.price },
    });
    set((state) => save({ ...state, items: addToBasket(state.items, item) }));
  },
  openModal: () => {
    set((state) => ({ ...state, isBasketModalOpened: true }));
  },
  closeModal: () => {
    set((state) => ({ ...state, isBasketModalOpened: false }));
  },
  changeCount: (productId: number, count: number) => {
    set((state) =>
      save({
        ...state,
        items: changeCount(state.items, productId, count),
      })
    );
  },
  remove: (productId: number) => {
    set((state) => save({ ...state, items: remove(state.items, productId) }));
  },
}));

function addToBasket(items: IBasketItem[], item: IProduct): IBasketItem[] {
  const result: IBasketItem[] = [...items];

  const existIndex = result.findIndex(
    (it) => Number(it.productId) === Number(item.id)
  );

  if (Number(existIndex) > -1) {
    result[existIndex].count = defaultTo(result[existIndex].count, 0) + 1;
  } else {
    result.push({
      productId: item.id,
      count: 1,
    });
  }

  return result;
}

function changeCount(items: IBasketItem[], productId: number, count: number) {
  const result: IBasketItem[] = [...items];

  const existIndex = result.findIndex(
    (it) => Number(it.productId) === Number(productId)
  );

  if (Number(existIndex) === -1) return result;

  console.log(result);

  result[existIndex].count = count;

  return result;
}

function remove(items: IBasketItem[], productId: number) {
  const result: IBasketItem[] = [...items];

  const existIndex = result.findIndex(
    (it) => Number(it.productId) === Number(productId)
  );

  if (Number(existIndex) === -1) return result;

  return result.filter((it) => Number(it.productId) !== Number(productId));
}
