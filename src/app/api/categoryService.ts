import { image } from "html2canvas/dist/types/css/types/image";
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
  addStoreCategory: async (categoryName: string, imageurl: string) => {
    try {
      const response = await clientAxios.post("/category/store", {
        name: categoryName,
        imageurl: imageurl,
      });
      return { success: true, data: response.data };
    } catch (err: any) {
      return {
        success: false,
        error: err.response?.data?.errors?.[0] || "Failed to add category",
      };
    }
  },
  editStoreCategory: async (
    categoryId: number,
    categoryName: string,
    imageurl: string
  ) => {
    try {
      const response = await clientAxios.put(`/category/store/${categoryId}`, {
        name: categoryName,
        imageurl: imageurl,
      });
      return { success: true, data: response.data };
    } catch (err: any) {
      return {
        success: false,
        error: err.response?.data?.errors?.[0] || "Failed to edit category",
      };
    }
  },
};
