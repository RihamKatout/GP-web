import { clientAxios } from ".";
import { Order } from "../types/shopping/Order.types";

export const OrderService = {
  placeOrder: async (order: Order) => {
    const response = await clientAxios.post(`/order`, order);
    return response;
  },
  getUserOrders: async () => {
    const response = await clientAxios.get(`/order`);
    return response.data;
  },
};
