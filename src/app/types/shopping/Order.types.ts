import { ProductBasicInfo, StoreBasicInfoDto, UserBasicInfo } from "..";

export interface ProductOrderConfigurations {
  id?: number;
  productInfo?: ProductBasicInfo;
  price: number;
  quantity: number;
  message: string;
  note: string;
  description: string;
  productIdTmp: number;
}

export interface SubOrder {
  id?: number;
  storeIdTmp: number;
  totalPrice: number;
  status:
    | "PENDING"
    | "DELIVERED"
    | "REJECTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELED";
  orderDate: string;
  deliveryDate: string | null;
  products: ProductOrderConfigurations[];
  storeInfo?: StoreBasicInfoDto;
}

export interface Order {
  id?: number;
  totalPrice: number;
  deliveryCost: number;
  deliveryAddress?: string;
  userInfo?: UserBasicInfo;
  subOrders: SubOrder[];
}
