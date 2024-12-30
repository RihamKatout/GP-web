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

export const ProductCategoryService = {
  // TODO : remove
  getProductCategorizeByStoreCategory: async (storeCategoryId?: number) => {
    if (!storeCategoryId) {
      return;
    }
    const response = await clientAxios.get(
      `/category/product/${storeCategoryId}`
    );
    return response.data;
  },
};
