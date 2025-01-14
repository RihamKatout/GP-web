import { clientAxios } from ".";
import { Store } from "../types";

export const StoreService = {
  getStoreById: async (id: number): Promise<Store> => {
    const response = await clientAxios.get(`/store/${id}`);
    return response.data;
  },
};
