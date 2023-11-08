import { IProduct } from "../products";

export interface IBasket {
  items: IBasketItem[];
}

export interface IBasketItem {
  productId: number;
  count?: number;
  options?: any;
}

export interface IBasketPreviewItem extends IProduct {
  count: number;
  brutoAmount: number;
  nettoAmount: number;
  discountAmount: number;
  link: string;
}

export interface IBasketPreview {
  products: IBasketPreviewItem[];
  brutoAmount: number;
  nettoAmount: number;
  discountAmount: number;
}
