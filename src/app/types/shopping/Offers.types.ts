import { ProductWithStoreDto, StoreBasicInfoDto } from "..";

export interface OfferDto {
  id: number;
  publicOffer: boolean;
  title: string;
  description: string;
  imageurl: string;
  discount: number;
  endDate: string;
  storeId?: number;
}

export interface Offer {
  length: number;
  id: number;
  publicOffer: boolean;
  title: string;
  description: string;
  imageurl: string;
  discount: number;
  endDate: string;
  storeInfo?: StoreBasicInfoDto;
  products: ProductWithStoreDto[];
}
