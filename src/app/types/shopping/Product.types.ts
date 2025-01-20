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
  storeBasicInfo: {
    storeId: number;
    storeName: string;
    storeLogoURL: string | null;
  };
  inWishlist: boolean;
}

// for product details page
export interface ProductDetail {
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
  store: {
    storeId: number;
    storeName: string;
    storeLogoURL: string | null;
  };
  inWishlist: boolean;
  configurations: Array<{
    id: number;
    name: string;
    allowsMultipleUnits: boolean;
    unitPriceImpact: number;
    configurationAttributes: Array<{
      id: number;
      name: string;
      type: string;
      choices: Array<{
        name: string;
        priceImpact: number;
      }>;
    }>;
  }>;
}

// for product management - manager
export interface ProductManagementDto {
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
  storeId: number;
  configurations: Array<{
    id: number;
    name: string;
    allowsMultipleUnits: boolean;
    unitPriceImpact: number;
    configurationAttributes: Array<{
      id: number;
      name: string;
      type: string;
      choices: Array<{
        name: string;
        priceImpact: number;
      }>;
    }>;
  }>;
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
