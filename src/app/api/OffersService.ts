import { clientAxios } from ".";
import { Offer, OfferDto } from "../types/shopping/Offers.types";

export const OffersService = {
  getOfferById: async (id: number): Promise<Offer> => {
    const response = await clientAxios.get(`/offers/${id}`);
    return response.data;
  },

  getPublicOffers: async (): Promise<OfferDto[]> => {
    const response = await clientAxios.get("/offers/public");
    return response.data;
  },

  getOffersForStore: async (storeId: number): Promise<OfferDto[]> => {
    const response = await clientAxios.get(`/offers/store/${storeId}`);
    return response.data;
  },

  addPublicOffer: async (offer: OfferDto): Promise<OfferDto> => {
    const response = await clientAxios.post("/offers/public", offer);
    return response.data;
  },

  addStoreOffer: async (offer: OfferDto): Promise<OfferDto> => {
    const response = await clientAxios.post("/offers/store", offer);
    return response.data;
  },

  updateOffer: async (id: number, offer: OfferDto): Promise<OfferDto> => {
    const response = await clientAxios.put(`/offers/${id}`, offer);
    return response.data;
  },

  deleteOffer: async (id: number): Promise<void> => {
    await clientAxios.delete(`/offers/${id}`);
  },

  addProductsToOffer: async (
    offerId: number,
    productIds: number[]
  ): Promise<void> => {
    await clientAxios.post(`/offers/${offerId}/products`, productIds);
  },

  removeProductsFromOffer: async (
    offerId: number,
    productIds: number[]
  ): Promise<void> => {
    await clientAxios.delete(`/offers/${offerId}/products`, {
      data: productIds,
    });
  },
};
