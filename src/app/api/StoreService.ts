import { clientAxios } from ".";
import { AddStoreDto, Store } from "../types";

export const StoreService = {
  getStoreById: async (id: number): Promise<Store> => {
    const response = await clientAxios.get(`/store/${id}`);
    return response.data;
  },
  getStoresByStoreCategoryId: async (id?: number): Promise<Store[]> => {
    if (!id) {
      const response = await clientAxios.get("/store");
      return response.data;
    }
    const response = await clientAxios.get(`/store?storeCategoryId=${id}`);
    return response.data;
  },
  deleteStore: async (storeId: number): Promise<void> => {
    await clientAxios.delete(`/store/${storeId}`);
  },
  addStore: async (
    store: AddStoreDto,
    logo: File | null,
    cover: File | null
  ): Promise<void> => {
    const formData = new FormData();
    if (logo) {
      formData.append("logo", logo);
    }
    if (cover) {
      formData.append("cover", cover);
    }
    formData.append(
      "request",
      new Blob([JSON.stringify(store)], { type: "application/json" })
    );

    const response = await clientAxios.post("/store", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
