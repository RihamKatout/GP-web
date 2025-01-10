import { clientAxios } from ".";

export const WishlistService = {
  getWishlist: async () => {
    const response = await clientAxios.get("/wishlist");
    return response;
  },
  addProduct: async (id?: Number) => { 
    if (!id) return;
    const response = await clientAxios.post(`/wishlist/${id}`);
    return response;
  },
  deleteProduct: async (id?: Number) => {
    if (!id) return;
    const response = await clientAxios.delete(`/wishlist/${id}`);
    return response;
  },
  clearWishlist: async () => {
    const response = await clientAxios.delete(`/wishlist`);
    return response;
  },
};
