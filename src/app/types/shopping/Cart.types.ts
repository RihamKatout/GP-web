import { Configuration, Product } from "..";

export interface AttributeChoice{
  attributeId: number;
  choiceName: string;
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
  choices: AttributeChoice[];
}

// get cart items
export interface CartItemDto{
  cartItem: CartItem;
  configurations: Configuration[];
}
