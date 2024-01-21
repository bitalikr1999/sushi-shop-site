import { CategoriesRow } from "@/components/categories-row";
import { ProductsList } from "@/components/products-list";
import { productsService } from "@/services/products.service";
import { CatalogBackButton } from "./back-button.component";
import { Metadata } from "next";
import { ListSortController } from "@/components/list-sort-controll";
import styles from "./styles.module.css";
interface Props {
  params: {
    key: string;
  };
  searchParams: {
    sort?: string;
  };
}

const CatalogCategory = async ({ params, searchParams }: Props) => {
  const sort = searchParams?.sort;
  const products = await productsService.getList({
    categoryKey: params.key,
    sort,
  });

  return (
    <div>
      <div className={styles.topRow}>
        <div>
          <CatalogBackButton />
          <CategoriesRow parentKey={params.key} />
        </div>
        <ListSortController />
      </div>
      <ProductsList items={products} />
    </div>
  );
};

export default CatalogCategory;
