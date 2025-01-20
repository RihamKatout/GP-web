import {
  ProductFilters,
  PaginatedResponse,
  ProductWithStoreDto,
  ProductDetail,
  ProductManagementDto,
} from "../types";
import { clientAxios } from ".";

export const ProductService = {
  filterProducts: async (
    filters: ProductFilters
  ): Promise<PaginatedResponse<ProductWithStoreDto>> => {
    const response = await clientAxios.get(`/product`, {
      params: filters,
    });
    return response.data;
  },
  getProductById: async (id: number): Promise<ProductDetail> => {
    const response = await clientAxios.get(`/product/${id}`);
    return response.data;
  },
  createProduct: async (product: ProductManagementDto): Promise<number> => {
    const response = await clientAxios.post(`/product`, product);
    return response.data;
  },
  updateProduct: async (product: ProductManagementDto): Promise<ProductManagementDto> => {
    const response = await clientAxios.put(`/product/${product.product.id}`, product);
    return response.data;
  },
  deleteProduct: async (id: number): Promise<void> => {
    await clientAxios.delete(`/product/${id}`);
  },
};
