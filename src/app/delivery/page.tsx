import styles from "./page.module.css";

const DeliveryInfoPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Оплата і доставка</p>
      <div>
        <p className={styles.txt}>Доставка суші та ролів в м. Хмельницький</p>
        <p className={styles.txt}>
          <strong>Ви можете оформити замовлення:</strong>
        </p>
        <ul>
          <li className={styles.txt}>на сайті</li>
          <li className={styles.txt}>по телефону</li>
          <li className={styles.txt}>через instagram</li>
        </ul>
        <p className={styles.txt}>
          <strong>
            Ми обов{"'"}язково телефонуємо для підтвердження замовлення.
          </strong>
        </p>
        <p className={styles.txt}>
          <strong>Безкоштовна</strong>&nbsp;доставка по місту від 450&nbsp;грн.
        </p>
        <p className={styles.txt}>Платна доставка - 70 грн.</p>
        <p className={styles.txt}>Доставка здійснюється в&nbsp;межах міста</p>
      </div>
    </div>
  );
};

export default DeliveryInfoPage;
