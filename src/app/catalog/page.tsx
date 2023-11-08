import { ProductsList } from "@/components/products-list";
import { productsService } from "@/services/products.service";

const CatalogPage = async () => {
  const products = await productsService.getList();

  return (
    <div>
      <ProductsList items={products} />
    </div>
  );
};

export default CatalogPage;
