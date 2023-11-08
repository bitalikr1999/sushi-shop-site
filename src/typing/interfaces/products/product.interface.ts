import { Currency, Lang } from "@/typing/enums";
import { IMedia } from "../media";
import { IProductVariant } from "./product-variant.interface";

export interface IProductTranslation {
  id?: number;
  name: string;
  description: string;
  productId?: number;
  lang: Lang;
}

export interface IProduct {
  id: number;

  code: string;
  key: string;
  price: number;
  currency: Currency;
  countInStock: number;
  discount: number;

  previewMediaId?: number;
  categoriesIds?: number[];

  translations?: IProductTranslation[];
  translate: IProductTranslation;

  createdAt: string;
  updatedAt: string;

  previewMedia?: IMedia;

  variants?: IProductVariant[];
  content: Record<string, any>;
}
