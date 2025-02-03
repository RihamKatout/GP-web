import React, { useEffect } from "react";
import { ConfigurationAttributeComponent } from "./ConfigurationAttribute";
import styled from "styled-components";
import { Configuration, ConfigurationInstance } from "../../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { Popconfirm } from "antd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface ProductConfigurationProps {
  config: Configuration;
  instance?: ConfigurationInstance;
  dispatchPrices: React.Dispatch<any>;
  mode: "editable" | "disabled" | "enabled";
  type: "cart" | "product";
  setSelectedChoices?: React.Dispatch<
    React.SetStateAction<ConfigurationInstance[]>
  >;
  handleDeleteConfigInstance?: (instanceId: number, configId: number) => void;
}

export const ProductConfigurationInstance: React.FC<
  ProductConfigurationProps
> = ({
  config,
  dispatchPrices,
  instance,
  mode,
  setSelectedChoices,
  handleDeleteConfigInstance,
  type,
}) => {
  const handlePriceImpact = (priceImpact: number) => {
    dispatchPrices({ type: "ADD_PRICE_IMPACT", priceImpact });
  };
  useEffect(() => {
    if (type === "cart") handlePriceImpact(config.unitPriceImpact || 0);
    return () => {
      if (type === "cart") handlePriceImpact(-config.unitPriceImpact || 0);
    };
  }, []);
  return (
    <Container>
      <ConfigHeader>
        <h6>{config.name}</h6>
        {mode === "editable" && handleDeleteConfigInstance && instance?.id && (
          <Popconfirm
            title="Remove item"
            description="Are you sure to remove this item?"
            icon={<ErrorOutlineIcon style={{ color: "red" }} />}
            onConfirm={() => instance.id && handleDeleteConfigInstance(instance.id, config.id)}
            okText="Yes"
            cancelText="No"
            overlayClassName="custom-popconfirm"
            overlayStyle={{ zIndex: 9999 }}
          >
            <DeleteIcon />
          </Popconfirm>
        )}
      </ConfigHeader>
      {config.configurationAttributes.map((attr) => (
        <ConfigurationAttributeComponent
          key={instance?.id ? `${instance.id}-${attr.id}` : attr.id}
          attribute={attr}
          handlePriceImpact={handlePriceImpact}
          value={
            instance?.choices?.find((choice) => choice.attributeId === attr.id)
              ?.choiceName
          }
          enableButtons={mode !== "disabled"}
          setSelectedChoices={setSelectedChoices}
          instanceId={instance?.id}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

const ConfigHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  border-bottom: 1px solid black;
  svg {
    color: red;
    cursor: pointer;
  }
  h6 {
    padding: 0;
  }
`;
