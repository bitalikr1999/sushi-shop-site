import { ListSortController } from "@/components/list-sort-controll";
import { ProductsList } from "@/components/products-list";
import { productsService } from "@/services/products.service";

const CatalogPage = async (props: any) => {
  const sort = props.searchParams?.sort;
  const products = await productsService.getList({ sort });

  return (
    <div>
      <ListSortController />
      <ProductsList items={products} />
    </div>
  );
};

export default CatalogPage;
