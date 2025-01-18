import React from "react";
import { VerticalContainer } from "../StyledComponents";
import { Product } from "../../../../types";

interface LowStockProps {
  lowStock: Product[];
  handleOpenProduct: (productId: number) => void;
}

export const LowStock: React.FC<LowStockProps> = ({
  lowStock,
  handleOpenProduct,
}) => {
  return (
    <VerticalContainer
      style={{
        gridArea: "lowStock",
        maxHeight: "250px",
        overflowY: "scroll",
      }}
    >
      <p>Low stock</p>
      <div
        className="lowStock"
        style={{
          fontSize: "0.9rem",
          backgroundColor: "rgba(255, 140, 0, 0.3)",
          padding: "0.2rem",
        }}
      >
        <p>Name</p>
        <p>Stock</p>
      </div>
      {lowStock?.map((product) => (
        <div key={product.id} className="lowStock">
          <p
            className="productName"
            onClick={() => handleOpenProduct(product.id)}
          >
            {product.name}
          </p>
          <p>{product.stock}</p>
        </div>
      ))}
    </VerticalContainer>
  );
};
