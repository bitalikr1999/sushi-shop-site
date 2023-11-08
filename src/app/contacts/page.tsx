import Image from "next/image";
import styles from "./page.module.css";
import mapImg from "@/assets/map.png";
import Link from "next/link";

const DeliveryInfoPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.title}>Наші контакти</p>
        <div className={styles.content}>
          <p>
            Ви можете знайти нас за адрессою:{" "}
            <strong>вулиця Зарічанська, 38</strong>
          </p>
          <Link href="tel:380980717970">380 (98) 071-79-70</Link>
          <Link href="tel:380980717970">380 (98) 071-79-70</Link>
          <Link href="mailto:bitalikrty@gmail.com">bitalikrty@gmail.com</Link>

          <Link href="https://www.instagram.com/_da_sushi_/">
            Наш інстаграм: _da_sushi_
          </Link>
        </div>
      </div>
      <div className={styles.map}>
        <Image
          src={mapImg}
          layout="fill"
          objectFit="cover"
          alt="DaSushi Location"
          className={styles.mapImg}
        />
      </div>
    </div>
  );
};

export default DeliveryInfoPage;
