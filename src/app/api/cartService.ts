import { clientAxios } from ".";
import { CartItem } from "../types";

export const CartService = {
  getCart: async () => {
    const response = await clientAxios.get("/cart");
    return response;
  },
  deleteItem: async (id: Number) => {
    const response = await clientAxios.delete(`/cart/${id}`);
    return response;
  },
  updateQuantity: async (id: Number, quantity: Number) => {
    const response = await clientAxios.put(`/cart`, { id, quantity });
    return response;
  },
  clearCart: async () => {
    const response = await clientAxios.delete(`/cart/clear`);
    return response;
  },
  deleteItems: async (ids: Number[]) => {
    const response = await clientAxios.delete(`/cart/items`, { data: ids });
    return response;
  },
  addItem: async (item: CartItem) => {
    const response = await clientAxios.post(`/cart`, { ...item });
    return response;
  },
  updateItem: async (id: number, item: CartItem) => {
    const response = await clientAxios.put(`/cart/${id}`, { ...item });
    return response;
  },
};
