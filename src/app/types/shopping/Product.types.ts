// for listing data - showcase
export interface ProductWithStoreDto {
  product: {
    id: number;
    name: string;
    description: string;
    mainImageURL: string;
    basePrice: number;
    stock: number;
    stockEdge: number;
    needStock: boolean;
    isAvailable: boolean;
    model3dURL: string | null;
    is3dCustomizable: boolean;
    defaultFeatures: boolean;
    rating: number;
    numberOfReviews: number;
    categoryId: number;
  };
  storeBasicInfo?: {
    storeId: number;
    storeName: string;
    storeLogoURL: string | null;
  };
  inWishlist: boolean;
}

export interface Choice {
  name: string;
  priceImpact: number;
}

export interface ConfigurationAttribute {
  id: number;
  name: string;
  type: string;
  choices: Choice[];
}

export interface Configuration {
  id: number;
  name: string;
  allowsMultipleUnits: boolean;
  unitPriceImpact: number;
  configurationAttributes: ConfigurationAttribute[];
}

// for product details page
export interface ProductDetail {
  product: Product;
  store: StoreBasicInfoDto;
  inWishlist: boolean;
  configurations: Configuration[];
}

// for product management - manager
export interface ProductManagementDto {
  product: Product;
  storeId: number;
  configurations: Configuration[];
  categoryId: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  mainImageURL: string;
  basePrice: number;
  stock: number;
  stockEdge: number;
  needStock: boolean;
  isAvailable: boolean;
  model3dURL: string | null;
  is3dCustomizable: boolean;
  defaultFeatures: boolean;
  rating: number;
  numberOfReviews: number;
  categoryId: number;
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

export interface StoreBasicInfoDto {
  storeId: number;
  storeName: string;
  storeLogoURL: string | null;
}
