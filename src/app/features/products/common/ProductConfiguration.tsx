import React, { useEffect } from "react";
import { ConfigurationAttributeComponent } from "./ConfigurationAttribute";
import styled from "styled-components";
import { Configuration } from "../../../types";

interface ProductConfigurationProps {
  config: Configuration;
  setPrice: any;
}
export const ProductConfiguration: React.FC<ProductConfigurationProps> = ({
  config,
  setPrice,
}) => {
  const [configPriceImpact, setConfigPriceImpact] = React.useState<number>(0);
  useEffect(() => {
    setPrice((prevPrice: number) => prevPrice + configPriceImpact);
  }, [configPriceImpact]);
  return (
    <Container>
      <h6>{config.name}</h6>
      <p>price: {configPriceImpact}</p>
      {config.configurationAttributes.map((attr) => (
        <ConfigurationAttributeComponent
          attribute={attr}
          setConfigPriceImpact={setConfigPriceImpact}
        />
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
