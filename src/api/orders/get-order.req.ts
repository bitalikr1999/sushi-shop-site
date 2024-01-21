import { IOrder } from "@/typing/interfaces";
import api from "../axios";

export const getOrderReq = (id: number) => {
  return api.get<IOrder>(`/api/orders/${id}`);
};
