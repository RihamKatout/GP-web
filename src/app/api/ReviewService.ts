import { clientAxios } from ".";
import { Review } from "../types";

export const ReviewService = {
  getReviewForProduct: async (id: number): Promise<Review[]> => {
    const response = await clientAxios.get(`/review/product/${id}`);
    return response.data;
  },
  getReviewsForStore: async (id: number): Promise<Review[]> => {
    const response = await clientAxios.get(`/review/store/${id}`);
    return response.data;
  }
};
