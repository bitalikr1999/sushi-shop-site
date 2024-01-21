"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

const CheckoutSuccessPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className={styles.container}>
      <p className={styles.title}>Дякуємо за замовлення</p>
      <p className={styles.subtitle}>
        Менджер звяжеться з вами в найближчий час
      </p>

      <Link href={`/order-status/${id}`} className={styles.link}>
        Ви можете перейти за цим посиланням щоб слідкувати за статусом
        замовлення{" "}
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
