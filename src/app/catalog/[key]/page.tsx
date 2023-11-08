import { ProductsList } from "@/components/products-list";
import { productsService } from "@/services/products.service";
import { FC } from "react";

interface Props {
  params: {
    key: string;
  };
}

const CatalogCategory: FC<Props> = async ({ params }) => {
  const products = await productsService.getList({ categoryKey: params.key });

  return (
    <div>
      <ProductsList items={products} />
    </div>
  );
};

export default CatalogCategory;
