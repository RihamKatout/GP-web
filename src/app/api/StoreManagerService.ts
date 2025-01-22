import { clientAxios } from ".";
import { Store, StoreAnalytics } from "../types";

export const StoreManagerService = {
  getStores: async (): Promise<Store[]> => {
    const response = await clientAxios.get(`/manager/stores`);
    return response.data;
  },getStoreAnalytics: async (storeId: number):Promise<StoreAnalytics> => {
    const response = await clientAxios.get(`/manager/${storeId}/analytics`);
    return response.data;
  }
};
