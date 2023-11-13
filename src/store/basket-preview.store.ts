import { getBasketPreviewReq } from "@/api/basket/get-basket-preview.api";
import { IBasketPreview } from "@/typing/interfaces/basket";
import { create } from "zustand";
import { useBasketStore } from "./basket.store";

interface BasketPreviewStore {
  data: IBasketPreview | null;
  isLoading: boolean;
  reload: () => void;
  clear: () => void;
}

export const useBackerPreviewStore = create<BasketPreviewStore>((set) => ({
  data: null,
  isLoading: true,
  reload: async () => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const items = useBasketStore.getState().items;

      const { data } = await getBasketPreviewReq({ items });
      set((state) => ({ ...state, isLoading: false, data }));
    } catch (e) {
      useBasketStore.getState().clear();
      set((state) => ({ ...state, isLoading: false }));
    }
  },
  clear: () => {
    set((state) => ({ ...state, data: null }));
  },
}));

export const selectBacketPreview = (
  state: BasketPreviewStore
): IBasketPreview => {
  if (state.data) return state.data;
  return {
    products: [],
    brutoAmount: 0,
    nettoAmount: 0,
    discountAmount: 0,
  };
};
