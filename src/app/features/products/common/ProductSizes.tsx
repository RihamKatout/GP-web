import React from "react";
import styled from "styled-components";
import { ProductSizeEnum } from "../../../types";

interface ProductSizesProps {
  sizes: {
    [key in ProductSizeEnum]: number;
  };
  selectedSize?: ProductSizeEnum;
  setSelectedSize: (size: ProductSizeEnum) => void;
  setPrice: (price: number) => void;
}
export const ProductSizes: React.FC<ProductSizesProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
  setPrice,
}) => {
  console.log("Sizes", sizes);
  console.log("Selected Size", selectedSize);
  console.log("Set Price", setPrice);
  //console.log("price", price);
  return (
    <>
      {sizes && Object.keys(sizes).length > 0 ? (
        <>
          <p>Sizes</p>
          <Options>
            {Object.entries(sizes ?? {})
              .sort(([a], [b]) => {
                const sizeOrder = { S: 1, M: 2, L: 3, XL: 4, XXL: 5 };
                return (
                  (sizeOrder[a as keyof typeof sizeOrder] || 0) -
                  (sizeOrder[b as keyof typeof sizeOrder] || 0)
                );
              })
              .map(([size, price]) => (
                <div
                  key={size}
                  onClick={() => {
                    setPrice(price);
                    setSelectedSize(size as ProductSizeEnum);
                  }}
                  style={{
                    backgroundColor: "rgba(240, 240, 240, 1)",
                    color: "black",
                    width: "1.5rem",
                    height: "1.5rem",
                    cursor: "pointer",
                    borderRadius: "0.2rem",
                    border: size === selectedSize ? "2px solid black" : "",
                  }}
                >
                  <p>{size}</p>
                </div>
              ))}
          </Options>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
const Options = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: -0.5rem;
  text-align: center;
`;
