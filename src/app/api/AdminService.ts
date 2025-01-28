import { clientAxios } from ".";
import { Store } from "../types";

export const AdminService = {
  getAllStores: async (): Promise<Store[]> => {
    const response = await clientAxios.get(`/admin/stores`);
    return response.data;
  },
  activateStore: async (storeId: number): Promise<void> => {
    await clientAxios.put(`/store/${storeId}/activate`);
  },
  unbanStore: async (storeId: number): Promise<void> => {
    await clientAxios.put(`/store/${storeId}/unban`);
  },
};
