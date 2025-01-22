import { clientAxios } from ".";
import { Product } from "../types";

export const WishlistService = {
  getWishlist: async (): Promise<Product[]> => {
    const { data } = await clientAxios.get("/wishlist");
    return data;
  },
  addProduct: async (id: number): Promise<void> => {
    if (!id) return;
    await clientAxios.post(`/wishlist/${id}`);
  },
  deleteProduct: async (id: number): Promise<void> => {
    if (!id) return;
    await clientAxios.delete(`/wishlist/${id}`);
  },
  clearWishlist: async (): Promise<void> => {
    await clientAxios.delete(`/wishlist`);
  },
};
