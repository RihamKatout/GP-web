import { Category, Product, StoreStatusEnum } from "..";
import { z } from "zod";

export const AddStoreValidation = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters"),
  logoURL: z.union([z.string().url(), z.literal("")]).optional(),
  coverURL: z.union([z.string().url(), z.literal("")]).optional(),
  categoryId: z.number(),
});
export type AddStoreDto = z.infer<typeof AddStoreValidation>;

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
  storeCategoryId?: number;
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
