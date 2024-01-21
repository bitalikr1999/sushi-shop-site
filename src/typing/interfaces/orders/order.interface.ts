import { Currency, OrderStatus } from "@/typing/enums";
import { IProduct, IProductVariant } from "../products";

export interface IOrderUser {
  id: number;
  email?: string;
  phoneNumber: string;
  name: string;
  userId?: number;
}

export interface IOrderProduct {
  id: number;

  orderId: number;
  productId: number;

  price: number;
  count: number;
  discount: number;

  product: IProduct;
  variant?: IProductVariant;
}

export interface IOrder {
  id: number;

  status: OrderStatus;
  currency: Currency;

  orderUserId: number;
  orderUser?: IOrderUser;

  shippingId?: number;
  shipping?: IShipping;

  usedBonuses?: number;

  orderProducts?: IOrderProduct[];

  createdAt?: string;
  updatedAt?: string;

  comment?: string;
}

export enum ShippingType {
  NovaPoshta = "np",
  UkrPoshta = "ukr",
  SelfPickup = "sp",
  AddressDelivery = "ad",
}

export interface IShipping {
  id: number;

  countryCode?: string;
  addressLine?: string;

  type: ShippingType;

  novaPoshtaData?: IShippingNovaPoshta;
  urkPoshtaData?: IShippingUkrPoshta;
}

export interface IShippingNovaPoshta {
  shippingId: number;

  region: string;
  regionId?: string;

  town: string;
  townId?: string;

  departmentName: string;
  departmentCode: string;
}

export interface IShippingUkrPoshta {
  shippingId: number;

  town: string;
  departmentAddress: string;
}
