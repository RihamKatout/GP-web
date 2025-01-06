export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number | 0;
  imageurl: string;
  createdDate: string;
  rating: number;
  isAvailable: boolean;
  isCustomizable: boolean;
  model3dURL?: string;
  storeName: string;
  storeIdTmp: number;
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
  available?: boolean;
  threeDModel?: boolean;
  customizable?: boolean;
  page: number | 0;
  size: number | 20;
}

export interface CartItem {
  id?: number;
  product: Product;
  size: "S" | "M" | "L" | "XL";
  quantity: number;
  storeId?: number;
  details: string;
  storeName?: string;
}
