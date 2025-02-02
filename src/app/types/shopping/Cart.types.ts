import { Configuration, Product } from "..";

export interface AttributeChoice {
  attributeId: number;
  choiceName: string;
}

export interface ConfigurationInstance {
  id: number;
  configurationId: number;
  choices: AttributeChoice[];
}

// used to add items to the cart
export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  details?: string;
  message?: string;
  storeId: number;
  storeName: string;
  configurationInstances: ConfigurationInstance[];
}

// get cart items
export interface CartItemDto {
  cartItem: CartItem;
  configurations: Configuration[];
}
