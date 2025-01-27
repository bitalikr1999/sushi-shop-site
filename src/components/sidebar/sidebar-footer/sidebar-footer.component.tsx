"use client";

import TimeIcon from "@rsuite/icons/Time";
import ShieldIcon from "@rsuite/icons/Shield";
import styles from "./sidebar-footer.module.css";
import Link from "next/link";

export const SidebarFooter = () => {
  return (
    <>
      <div className={styles.footerItem}>
        <TimeIcon />
        <p>
          Графік роботи <br /> з <span>11:00</span> до <span>22:00</span>
          <br />
          Без вихідних
        </p>
      </div>

      <div className={styles.footerItem}>
        <TimeIcon />
        <p>
          Безкоштовна доставка при замовленні від <span>450 грн.</span>{" "}
        </p>
      </div>

      <div className={styles.footerItem}>
        <ShieldIcon />
        <Link href="/privacy-policy">Політика конфіденційності</Link>
      </div>
    </>
  );
};
