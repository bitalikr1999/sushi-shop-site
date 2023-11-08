import { IProduct } from "@/typing/interfaces";
import api from "../axios";

export const fetchProductsReq = (params: IFetchProductsParams) => {
  return api.get<IFetchProductsResponse>("/api/products", {
    params: {
      ...params,
      limit: 1000,
    },
  });
};

export interface IFetchProductsParams {
  categoryKey?: string;
  withDiscount?: boolean;
}

interface IFetchProductsResponse {
  items: IProduct[];
  count: number;
}
