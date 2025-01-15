import { clientAxios } from ".";
import { Store } from "../types";

export const StoreService = {
  getStoreById: async (id: number): Promise<Store> => {
    const response = await clientAxios.get(`/store/${id}`);
    return response.data;
  },
  getStoresByStoreCategoryId: async (id?: number): Promise<Store[]> => {
    if(!id) {
      const response = await clientAxios.get("/store");
      return response.data;
    }   
    const response = await clientAxios.get(`/store?storeCategoryId=${id}`);
    return response.data;
  },
};
