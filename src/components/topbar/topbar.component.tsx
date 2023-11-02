import Image from "next/image";
import styles from "./topbar.module.css";
import logoImg from "@/assets/logo.png";
import Link from "next/link";

export const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="#" className={styles.linkItem}>
          Акцій
        </Link>
        <Link href="" className={styles.linkItem}>
          Контакти
        </Link>
        <Link href="" className={styles.linkItem}>
          Про нас
        </Link>
      </div>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="" width={200} />
      </Link>
      <div className={styles.right}>
        <Link href="#" className={styles.linkItem}>
          +38 (098) 071-79-70
        </Link>
        <Link href="#" className={styles.linkItem}>
          +38 (098) 071-79-70
        </Link>
      </div>
    </div>
  );
};
