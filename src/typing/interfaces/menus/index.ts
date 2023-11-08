import { Lang } from "@/typing/enums";

interface MenuItemTranslate {
  id: number;
  name: string;
  itemId: number;
  lang: Lang;
}

export interface IMenu {
  id: number;
  key: string;
  name: string;
  children?: IMenuChildren[];

  createdAt?: string;
  updatedAt?: string;
}

export interface IMenuChildren {
  id: number;
  key: string;
  parentId?: number;
  parentColumn?: string;
  url?: string;
  order?: number;
  translates?: MenuItemTranslate[];
  children?: IMenuChildren[];
}
