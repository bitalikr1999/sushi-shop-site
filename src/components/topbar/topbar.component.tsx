import Image from "next/image";
import styles from "./topbar.module.css";
import logoImg from "@/assets/logo.png";
import Link from "next/link";

export const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="/discounts" className={styles.linkItem}>
          Акцій
        </Link>
        <Link href="/contacts" className={styles.linkItem}>
          Контакти
        </Link>
        <Link href="/delivery" className={styles.linkItem}>
          Оплата/Доставка
        </Link>
      </div>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="" width={200} />
      </Link>
      <div className={styles.right}>
        <Link
          href="tel:380973055904"
          className={styles.linkItem}
          target="__blank"
        >
          +38 097-305-59-04
        </Link>
        <Link
          href="https://www.instagram.com/_da_sushi_/"
          className={styles.linkItem}
          target="__blank"
        >
          inst: _da_sushi_
        </Link>
      </div>
    </div>
  );
};
