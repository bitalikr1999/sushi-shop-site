"use client";

import React, { FC, useMemo } from "react";
import styles from "./menu-item.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: StaticImageData;
  title: string;
  url: string;
}
export const MenuItem: FC<Props> = ({ icon, title, url }) => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    const cutedPathname = pathname.slice(0, url.length);

    return cutedPathname === url;
  }, [pathname, url]);

  return (
    <Link
      href={url}
      className={`${styles.container} ${isActive ? styles.active : ""}`}
    >
      <Image
        className={styles.icon}
        src={icon}
        width={34}
        height={34}
        alt=""
      ></Image>
      <p className={styles.text}>{title}</p>
    </Link>
  );
};
