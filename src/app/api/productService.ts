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
  createProduct: async (product: ProductManagementDto, imageFile: File | null): Promise<number> => {
    const formData = new FormData();
    if (imageFile) {
      formData.append("image", imageFile);
    }
    formData.append("request", new Blob([JSON.stringify(product)], { type: "application/json" }));
    const response = await clientAxios.post(`/product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
