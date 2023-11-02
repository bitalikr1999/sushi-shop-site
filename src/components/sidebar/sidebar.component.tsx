import { MenuIcon } from "../icons/menu-icon";
import { MenuList } from "./menu-list";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <MenuIcon />
        <p>Меню</p>
      </div>
      <MenuList />
    </div>
  );
};
