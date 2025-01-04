import { clientAxios } from ".";

export const StoreCategoryService = {
  getStoreCategories: async () => {
    const response = await clientAxios.get("/category/store");
    return response;
  },
  getStoreCategoryById: async (id: number) => {
    const response = await clientAxios.get(`/category/store/${id}`);
    return response;
  }
};
