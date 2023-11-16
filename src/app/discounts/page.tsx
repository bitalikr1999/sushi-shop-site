import { ProductsList } from "@/components/products-list";
import { productsService } from "@/services/products.service";

const CatalogPage = async () => {
  const products = await productsService.getList({ withDiscount: true });

  return (
    <div>
      <ProductsList
        items={products}
        emptyMessage="Нажаль зараз немає знижок :("
      />
    </div>
  );
};

export default CatalogPage;
