import { calcPriceSummation } from "../../features/cart/Service";
import { CartItemDto } from "../../types";
import { Order, SubOrder } from "../../types/shopping/Order.types";

export const convertCartItemConfigurationsToText = (cartItem: CartItemDto) => {
  const { configurationInstances } = cartItem.cartItem;
  const { configurations } = cartItem;
  if (configurationInstances.length > 0) {
    return configurationInstances
      .map((instance) => {
        const configuration = configurations.find(
          (config) => config.id === instance.configurationId
        );
        const choices = instance.choices.map((choice) => {
          const attr = configuration?.configurationAttributes.find(
            (c) => c.id === choice.attributeId
          );
          return (
            attr?.name +
            " = " +
            attr?.choices.find((c) => c.name === choice.choiceName)?.name
          );
        });
        return `${configuration?.name}: ${choices.join(", ")}`;
      })
      .join(", ");
  }
};

export const CalcAllItemsPrice = (cartItems: CartItemDto[]) => {
  return cartItems.reduce((acc, item) => {
    return calcPriceSummation(item) * item.cartItem.quantity + acc;
  }, 0);
};

export const paymentLogic = (
  cartItems: CartItemDto[],
  deliveryAddress: string
) => {
  // Group cart items by storeId from cartItem
  const storeMap = new Map<number, CartItemDto[]>();
  cartItems.forEach((item) => {
    const storeId = item.cartItem.storeId;
    if (!storeMap.has(storeId)) {
      storeMap.set(storeId, []);
    }
    storeMap.get(storeId)?.push(item);
  });

  const subOrders: SubOrder[] = Array.from(storeMap.entries()).map(
    ([storeId, items]) => {
      const products = items.map((item) => {
        const { product, quantity, details } = item.cartItem;
        // Generate plain text description for the product configuration
        const description = convertCartItemConfigurationsToText(item);
        return {
          productIdTmp: product.id,
          price: product.basePrice,
          quantity,
          message: item.cartItem.message ?? "",
          note: details ?? "",
          description: description ?? "",
        };
      });

      const totalPrice = products.reduce(
        (sum, prod) => sum + prod.price * prod.quantity,
        0
      );
      return {
        storeIdTmp: storeId,
        products,
        totalPrice,
        status: "PENDING",
        orderDate: new Date().toISOString(),
        deliveryDate: null,
        deliveryAddress,
      };
    }
  );

  const order: Order = {
    subOrders,
    totalPrice: CalcAllItemsPrice(cartItems) + storeMap.size * 5,
    deliveryCost: storeMap.size * 5,
    deliveryAddress,
  };
  console.log(order);
  return order;
};
