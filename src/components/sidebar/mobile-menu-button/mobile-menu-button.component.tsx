"use client";

import React, { useEffect, useState } from "react";
import { MenuIcon } from "@/components/icons/menu-icon";
import styles from "./mobile-menu-button.module.css";
import { usePathname, useRouter } from "next/navigation";

export const MobileMenuButton = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onPress = () => {
    const sidebarEl = document.getElementById("sidebar");

    if (sidebarEl?.classList.contains("open")) {
      sidebarEl?.classList.remove("open");
      sidebarEl?.classList.add("closed");
      setIsOpened(false);
    } else {
      sidebarEl?.classList.remove("closed");
      sidebarEl?.classList.add("open");
      setIsOpened(true);
    }
  };

  const pathname = usePathname();

  useEffect(() => {
    const sidebarEl = document.getElementById("sidebar");
    sidebarEl?.classList.remove("open");
    sidebarEl?.classList.add("closed");
    setIsOpened(false);
  }, [pathname]);

  return (
    <div className={styles.item} onClick={onPress}>
      <MenuIcon isClose={isOpened} />
    </div>
  );
};
