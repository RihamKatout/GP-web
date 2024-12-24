import React from "react";
import { ProductCardStyle } from "../../styles";
import { Product } from "../../types";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<Product> = (product) => {
  const navigate = useNavigate();

  return (
    <ProductCardStyle onClick={() => navigate("/product/" + product.id)}>
      <img src={product.imageURL} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>{product.isAvailable ? "In Stock" : "Out of Stock"}</p>
    </ProductCardStyle>
  );
};

export default ProductCard;
