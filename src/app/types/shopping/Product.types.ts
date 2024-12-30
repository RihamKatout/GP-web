export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageurl: string;
  createdDate: string;
  rating: number;
  isAvailable: boolean;
  isCustomizable: boolean;
  model3dURL?: string;
}

export interface ProductFilters {
  keyWord?: string;
  categoryId?: number;
  storeId?: number;
  storeCategoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  id?: number;
  isAvailable?: boolean;
  page: number | 0;
  size: number | 20;
}
