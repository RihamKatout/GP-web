import { clientAxios } from ".";
import { Category } from "../types";

export const StoreCategoryService = {
  getStoreCategories: async (): Promise<Category[]> => {
    const response = await clientAxios.get("/category/store");
    return response.data;
  },
  getStoreCategoryById: async (id: number) => {
    const response = await clientAxios.get(`/category/store/${id}`);
    return response;
  },
  deleteStoreCategory: async (storeId: number): Promise<void> => {
    await clientAxios.delete(`/category/store/${storeId}`);
  },
};
