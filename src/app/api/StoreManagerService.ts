import { clientAxios } from ".";
import { Store, StoreAnalytics } from "../types";

export const StoreManagerService = {
  getStores: async (): Promise<Store[]> => {
    const response = await clientAxios.get(`/store-manager`);
    return response.data;
  },getStoreAnalytics: async (storeId: number):Promise<StoreAnalytics> => {
    const response = await clientAxios.get(`/store-dashboard/${storeId}`);
    return response.data;
  }
};
