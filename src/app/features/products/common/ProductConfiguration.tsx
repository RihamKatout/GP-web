import React from "react";
import { ConfigurationAttribute } from "./ConfigurationAttribute";
import styled from "styled-components";

interface ProductConfigurationProps {
  config: {
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
  };
}
export const ProductConfiguration: React.FC<ProductConfigurationProps> = ({
  config,
}) => {
  return (
    <Container>
      <h6>{config.name}</h6>
      {config.configurationAttributes.map((attr) => (
        <ConfigurationAttribute attribute={attr} isColor = {attr.type === "COLOR"}/>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 0.5rem 1rem 0.2rem 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  h6 {
    width: 100%;
    padding: 0 0 0.5rem 0;
    border-bottom: 1px solid black;
  }
`;
