import { ProductFilters, Product } from "../types";
import { clientAxios } from "./axios";

export async function getShopCategoriesApi() {
  const response = await clientAxios.get("/category/store");
  return response;
}

export async function getProductCategorizeForStoreCategoryApi(
  storeCategoryId?: number
) {
  if(!storeCategoryId) {
    return;
  }
  const response = await clientAxios.get(
    `/category/product/${storeCategoryId}`
  );
  return response.data;
}

export interface PaginatedResponse<T> {
  content: T[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}

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
};
