import Link from "next/link";
import { FC } from "react";
import styles from "./category-row-item.module.css";

interface Props {
  label: string;
  href: string;
}

export const CategoryRowItem: FC<Props> = ({ label, href }) => {
  return (
    <Link href={href} className={styles.item}>
      <p>{label}</p>
    </Link>
  );
};
