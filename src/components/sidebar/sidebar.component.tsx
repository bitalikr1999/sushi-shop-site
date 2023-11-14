import { MenuIcon } from "../icons/menu-icon";
import { Search } from "../search";
import { MenuItem } from "./menu-item";
import { MenuList } from "./menu-list";
import { SidebarFooter } from "./sidebar-footer";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <>
      <div className={`${styles.container} closed`} id="sidebar">
        <div>
          <div className={styles.top}>
            <MenuIcon />
            <p>Меню</p>
          </div>
          <div className={styles.searchBlock}>
            <Search />
          </div>
          <MenuList />

          <div className="for-mobile-only">
            <MenuItem title="Контакти" url={`/contacts`} />
            <MenuItem title="Акцій" url={`/discounts`} />
            <MenuItem title="Оплата/Доставка" url={`/delivery`} />
            <MenuItem title="+38 097-305-59-04" url={`tel:380973055904`} />
            <MenuItem
              title="inst: _da_sushi_"
              url={`https://www.instagram.com/_da_sushi_/`}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <SidebarFooter />
        </div>
      </div>
    </>
  );
};
