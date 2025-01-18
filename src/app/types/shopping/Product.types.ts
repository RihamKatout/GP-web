import { ProductSizeEnum } from "../enums/ProductSizeEnum";

export interface Product {
  id: number;
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
  storeLogoUrl?: string;
  colors: string[];
  sizePrices: {
    [key in ProductSizeEnum]: number;
  };
  inWishlist: boolean;
  numberOfReviews: number;
  categoryId?: number;
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
  id: number;
  product: Product;
  size: "S" | "M" | "L" | "XL" | "XXL";
  quantity: number;
  storeId: number;
  details: string;
  storeName: string;
}

export interface CartItemAdd {
  product: Product;
  size: "S" | "M" | "L" | "XL" | "XXL";
  quantity: number;
  details: string;
}
