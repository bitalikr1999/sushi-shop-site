import { CategoriesRow } from "@/components/categories-row";
import { ProductsList } from "@/components/products-list";
import { productsService } from "@/services/products.service";
import { FC } from "react";
import { CatalogBackButton } from "./back-button.component";

interface Props {
  params: {
    key: string;
  };
  searchParams: any;
}

const CatalogCategory = async ({ params, searchParams }: Props) => {
  const products = await productsService.getList({ categoryKey: params.key });

  return (
    <div>
      <CatalogBackButton />
      <CategoriesRow parentKey={params.key} />
      <ProductsList items={products} />
    </div>
  );
};

CatalogCategory.getInitialProps = ({ query }: any) => {
  return { query };
};

export default CatalogCategory;
