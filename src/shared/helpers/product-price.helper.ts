import { IProduct } from "@/typing/interfaces";

export const getDiscountPrice = (product: IProduct) => {
  return (
    product.price -
    (product.discount * product.price) / 100
  ).toLocaleString();
};
