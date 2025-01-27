import React, { useEffect } from "react";
import { ConfigurationAttributeComponent } from "./ConfigurationAttribute";
import styled from "styled-components";
import {
  AttributeChoice,
  Configuration,
  ConfigurationInstance,
} from "../../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { Popconfirm } from "antd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface ProductConfigurationProps {
  config: Configuration;
  choices?: AttributeChoice[];
  instanceId?: number;
  dispatchPrices: React.Dispatch<any>;
  mode: "editable" | "disabled" | "enabled";
  setSelectedChoices?: React.Dispatch<
    React.SetStateAction<ConfigurationInstance[]>
  >;
  selecedChoices?: ConfigurationInstance[];
  handleDeleteConfigInstance?: (instanceId: number, configId: number) => void;
}
export const ProductConfiguration: React.FC<ProductConfigurationProps> = ({
  config,
  dispatchPrices,
  choices,
  instanceId,
  mode,
  setSelectedChoices,
  selecedChoices,
  handleDeleteConfigInstance,
}) => {
  const handlePriceImpact = (priceImpact: number) => {
    dispatchPrices({ type: "ADD_PRICE_IMPACT", priceImpact });
  };

  useEffect(() => {
    const initialPriceImpact = 0;
    return () => {
      dispatchPrices({
        type: "REMOVE_PRICE_IMPACT",
        priceImpact: initialPriceImpact,
      });
    };
  }, [dispatchPrices]);

  return (
    <Container>
      <ConfigHeader>
        <h6>{config.name}</h6>
        {mode === "editable" && handleDeleteConfigInstance && instanceId && (
          <Popconfirm
            title="Remove item"
            description="Are you sure to remove this item?"
            icon={<ErrorOutlineIcon style={{ color: "red" }} />}
            onConfirm={() => handleDeleteConfigInstance(instanceId, config.id)}
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
          key={instanceId ? `${instanceId}-${attr.id}` : attr.id}
          attribute={attr}
          handlePriceImpact={handlePriceImpact}
          value={
            choices?.find((choice) => choice.attributeId === attr.id)
              ?.choiceName
          }
          enableButtons={mode !== "disabled"}
          setSelectedChoices={setSelectedChoices}
          selecedChoices={selecedChoices}
          instanceId={instanceId}
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
