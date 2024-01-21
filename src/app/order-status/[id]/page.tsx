import { getOrderReq } from "@/api/orders/get-order.req";
import styles from "./page.module.css";
import { getOrderTotal } from "@/shared/helpers/order.helper";
import { OrderStatus } from "@/typing/enums";
import { ShippingType } from "@/typing/interfaces";

interface Props {
  params: {
    id: number;
  };
}

function getStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.New:
      return "В обробці";
    case OrderStatus.CancelByUser:
      return "Скасовано";
    case OrderStatus.Delivery:
      return "Доставка";
    case OrderStatus.InProgress:
      return "В обробці";
    case OrderStatus.Reject:
      return "Відмова";
    case OrderStatus.Success:
      return "Замовлення завершене";
  }
}
const CatalogCategory = async ({ params }: Props) => {
  const id = params.id;

  const { data: order } = await getOrderReq(id);
  const total = getOrderTotal(order);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <p className={styles.title}>Статус вашого замовлення #{order.id}</p>

        <p className={styles.total}>Сума замовлення: {total} </p>
        <p className={styles.total}>
          Статус замовлення: {getStatus(order.status)}
        </p>
        <p className={styles.total}>
          {order.shipping?.type === ShippingType.AddressDelivery
            ? "Адресна доставка"
            : "Самовиніс"}
        </p>

        <div className={styles.commentBlock}>
          <p className={styles.commentLabel}>Коментар до замовлення: </p>
          <p className={styles.comment}>
            {order.comment?.replaceAll("undefined", "")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatalogCategory;
