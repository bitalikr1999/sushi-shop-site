import { IOrder } from "@/typing/interfaces";

export const getOrderTotal = (order: IOrder) => {
  let result = getOrderBrutto(order);

  if (order?.usedBonuses && order.usedBonuses > 0) {
    result = Number(result) - Number(order.usedBonuses);
  }

  return Number(result).toFixed(2);
};

export const getOrderBrutto = (order: IOrder, format?: boolean) => {
  let result = 0;
  order?.orderProducts?.map((it) => {
    const brutoAmount = Number(it.price) * Number(it.count);
    const discount = (it.discount * brutoAmount) / 100;
    const amountNetto = brutoAmount - discount;
    result = Number(result) + amountNetto;
  });

  return format ? Number(result).toFixed(2) : result;
};
