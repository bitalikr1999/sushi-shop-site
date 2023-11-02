import { menuListConfig } from "@/config/menu-list.config";
import { MenuItem } from "../menu-item";

export const MenuList = () => {
  const renderItems = () => {
    return menuListConfig.map((item) => {
      return (
        <MenuItem
          icon={item.icon}
          title={item.title}
          url={item.url}
          key={item.url}
        />
      );
    });
  };
  return <div>{renderItems()}</div>;
};
