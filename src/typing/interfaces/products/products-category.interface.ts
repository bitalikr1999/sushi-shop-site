import { Lang } from "@/typing/enums";

export interface IProductCategory {
  id: number;
  parentId?: number;

  key?: string;

  data?: string;

  createdAt: string;
  updatedAt: string;

  authorId?: number;

  childrens?: IProductCategory[];

  translations?: IProductCategoryTranslation[];
  translate: IProductCategoryTranslation;
}

export interface IProductCategoryTranslation {
  id?: number;
  categoryId: number;

  lang: Lang;

  name: string;
  description?: string;
}
