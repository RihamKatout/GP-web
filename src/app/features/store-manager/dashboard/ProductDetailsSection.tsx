import React from "react";
import styled from "styled-components";

interface ProductsDetailsSectionProps {
  productId: number;
}
export const ProductDetailsSection: React.FC<ProductsDetailsSectionProps> = ({
  productId,
}) => {
  return <Container className="main">ProductDetailsSection {productId}</Container>;
};

const Container = styled.div`
  
  background-color: rgb(225, 1, 1);
`;
