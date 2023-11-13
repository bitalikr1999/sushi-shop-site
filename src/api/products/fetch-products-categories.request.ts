import { IProductCategory } from "@/typing/interfaces";
import api from "../axios";

export const fetchProductsCategoriesReq = (params: IFeatchCategoriesParams) => {
  return api.get<IProductCategory[]>("/api/products/categories", { params });
};

export interface IFeatchCategoriesParams {
  parentKey?: string;
}
