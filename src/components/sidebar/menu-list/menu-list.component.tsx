import { menuListConfig } from "@/config/menu-list.config";
import { MenuItem } from "../menu-item";
import { fetchProductsCategoriesReq } from "@/api/products";
import icon from "@/assets/icon-sushi.png";

export const MenuList = async () => {
  const { data: categories } = await fetchProductsCategoriesReq({});

  const renderItems = () => {
    return categories.map((item) => {
      return (
        <MenuItem
          icon={icon}
          title={item.translate?.name}
          url={`/catalog/${item.key}`}
          key={item.key}
        />
      );
    });
  };
  return <div>{renderItems()}</div>;
};
