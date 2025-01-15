import { clientAxios } from ".";
import { Store } from "../types";

export const StoreManagerService = {
  getStores: async (): Promise<Store[]> => {
    const response = await clientAxios.get(`/store-manager`);
    return response.data;
  },
};
