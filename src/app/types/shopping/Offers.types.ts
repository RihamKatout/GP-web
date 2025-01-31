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
  offerInfo: OfferDto;
  storeInfo?: StoreBasicInfoDto;
  products: ProductWithStoreDto[];
}
