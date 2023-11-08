import styles from "./page.module.css";

const CheckoutSuccessPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Дякуємо за замовлення</p>
      <p className={styles.subtitle}>
        Менджер звяжеться з вами в найближчий час
      </p>
    </div>
  );
};

export default CheckoutSuccessPage;
