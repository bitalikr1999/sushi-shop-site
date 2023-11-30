"use client";
import React from "react";
import { ProductsList } from "@/components/products-list";
import { productsService } from "@/services/products.service";
import { useEffect, useState } from "react";

const CatalogPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      const products = await productsService.getList({ withDiscount: true });
      setProducts(products);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <ProductsList
        items={products}
        emptyMessage={
          isLoading ? "Завантаження..." : "Нажаль зараз немає знижок :("
        }
      />
    </div>
  );
};

export default CatalogPage;
