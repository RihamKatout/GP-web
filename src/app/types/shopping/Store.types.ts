import { Category, StoreStatusEnum } from "..";

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
