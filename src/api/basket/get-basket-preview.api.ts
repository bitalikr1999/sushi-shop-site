import { IBasketPreview } from "@/typing/interfaces/basket";
import api from "../axios";

export const getBasketPreviewReq = (params: GetBucketPreviewParams) => {
  return api.post<IBasketPreview>("api/bucket/preview", params);
};

export interface GetBucketPreviewParams {
  items: {
    productId: number;
    count?: number;
    options?: any;
  }[];
}
