import { IFetchProductsParams, fetchProductsReq } from "@/api/products";

class ProductsService {
  public async getList(params: IFetchProductsParams = {}) {
    try {
      const { data } = await fetchProductsReq(params);
      return data.items;
    } catch (e) {
      return [];
    }
  }
}

export const productsService = new ProductsService();
