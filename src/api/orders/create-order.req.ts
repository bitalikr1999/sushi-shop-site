import { ShippingType } from "@/typing/interfaces";
import api from "../axios";

export const createOrderReq = (payload: CreateOrderPayload) => {
  return api.post("/api/orders", payload);
};

export interface CreateOrderPayload {
  user: {
    email?: string;
    phoneNumber: string;
    name: string;
  };
  products: ProductItem[];

  shipping: Shipping;
  comment?: string;
  usedBonuses?: number;
}

interface ProductItem {
  productId: number;
  count: number;
  productVariantId?: number;
}

interface Shipping {
  type: ShippingType;
  addressLine?: string;
}
