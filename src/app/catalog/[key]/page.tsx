import { CategoriesRow } from "@/components/categories-row";
import { ProductsList } from "@/components/products-list";
import { productsService } from "@/services/products.service";
import { CatalogBackButton } from "./back-button.component";
import { Metadata } from "next";

interface Props {
  params: {
    key: string;
  };
}

const CatalogCategory = async ({ params }: Props) => {
  const products = await productsService.getList({ categoryKey: params.key });

  return (
    <div>
      <CatalogBackButton />
      <CategoriesRow parentKey={params.key} />
      <ProductsList items={products} />
    </div>
  );
};

export default CatalogCategory;
