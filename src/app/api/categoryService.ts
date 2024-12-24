import { clientAxios } from ".";

export const StoreCategoryService = {
  getShopCategories: async () => {
    const response = await clientAxios.get("/category/store");
    return response;
  },
};

export const ProductCategoryService = {
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
