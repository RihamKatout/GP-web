import { ProductFilters, Product, PaginatedResponse } from "../types";
import { clientAxios } from ".";

export const ProductService = {
  fetchProducts: async (
    filters: ProductFilters
  ): Promise<PaginatedResponse<Product>> => {
    const response = await clientAxios.get(`/product`, {
      params: filters,
    });
    return response.data;
  },
  fetchProductById: async (id: number): Promise<Product> => {
    const response = await clientAxios.get(`/product/${id}`);
    return response.data;
  },
  deleteProduct: async (id: number): Promise<void> => {
    await clientAxios.delete(`/product/${id}`);
  },
};
