import { CartItemDto } from "../../types";

export const calcPriceSummation = (cartItemDto: CartItemDto) => {
  const { cartItem, configurations } = cartItemDto;
  let priceSummation = cartItemDto.cartItem.configurationInstances?.reduce(
    (acc, configInst) => {
      const configuration = configurations?.find(
        (config) => config.id === configInst.configurationId
      );
      configInst?.choices?.forEach((choice) => {
        const priceImpact = configuration?.configurationAttributes
          ?.find((attr) => attr.id === choice.attributeId)
          ?.choices?.find((ch) => ch.name === choice.choiceName)?.priceImpact;
        acc += priceImpact || 0;
      });
      return acc;
    },
    0
  );

  configurations.forEach((config) => {
    priceSummation -= config.unitPriceImpact || 0;
  });

  cartItemDto.cartItem.configurationInstances?.forEach((configInst) => {
    const configuration = configurations?.find(
      (config) => config.id === configInst.configurationId
    );
    priceSummation += configuration?.unitPriceImpact || 0;
  });

  return priceSummation + cartItem.product.basePrice;
};
