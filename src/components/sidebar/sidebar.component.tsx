import { MenuIcon } from "../icons/menu-icon";
import { Search } from "../search";
import { MenuList } from "./menu-list";
import { SidebarFooter } from "./sidebar-footer";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.top}>
          <MenuIcon />
          <p>Меню</p>
        </div>
        <Search />
        <MenuList />
      </div>

      <div className={styles.footer}>
        <SidebarFooter />
      </div>
    </div>
  );
};
