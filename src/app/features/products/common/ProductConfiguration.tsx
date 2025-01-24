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
      {config.configurationAttributes.map((attr) => (
        <ConfigurationAttributeComponent
          key={attr.id}
          attribute={attr}
          setConfigPriceImpact={setConfigPriceImpact}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  h6 {
    width: 100%;
    padding: 0 0 0.5rem 0;
    border-bottom: 1px solid black;
  }
`;
