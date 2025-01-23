import { Category, Product, StoreStatusEnum } from "..";

export type Store = {
  id: number;
  name: string;
  description?: string;
  logoURL: string | null;
  coverURL?: string | null;
  creationDate?: Date;
  status: StoreStatusEnum;
  numberOfReviews?: number;
  rating?: number;
  productCategories?: Category[];
};

export type StoreAnalytics = {
  totalRevenues?: number;
  completedOrders?: number;
  pendingOrders?: number;
  inProgressOrders?: number;
  revenues?: number[];
  topProducts?: Product[];
  lowStock?: Product[];
  storeName?: string;
  storeCategoryId?: number;
  productCategories?: Category[];
};

export interface StoreBasicInfoDto {
  storeId: number;
  storeName: string;
  storeLogoURL: string | null;
}

export interface PremiumStore {
  id: number;
  name: string;
  logo: string;
  rating: number;
  description: string;
  premiumImage: string;
}
