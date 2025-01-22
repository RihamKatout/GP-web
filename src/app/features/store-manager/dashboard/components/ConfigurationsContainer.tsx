import React, { useRef } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Configuration } from "../../../../types";
import { ConfigurationComponent } from "./ConfigurationComponent";
import { Checkbox, Input, InputNumber, Popconfirm } from "antd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface ConfigurationsContainerProps {
  configurations: Configuration[];
  onConfigurationsChange: (configurations: Configuration[]) => void;
}

export const ConfigurationsContainer: React.FC<
  ConfigurationsContainerProps
> = ({ configurations, onConfigurationsChange }) => {
  const lastConfigRef = useRef<HTMLDivElement>(null);

  const handleAddConfiguration = () => {
    const newConfiguration: Configuration = {
      id: configurations.length,
      name: `Configuration ${configurations.length + 1}`,
      allowsMultipleUnits: false,
      unitPriceImpact: 0,
      configurationAttributes: [],
    };
    onConfigurationsChange([...configurations, newConfiguration]);
    
    setTimeout(() => {
      lastConfigRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  const handleDeleteConfiguration = (index: number) => {
    if (index === 0) return;
    onConfigurationsChange(configurations.filter((_, i) => i !== index));
  };

  const handleUpdateConfiguration = (
    index: number,
    updatedConfig: Configuration
  ) => {
    const newConfigurations = configurations.map((config, i) =>
      i === index ? updatedConfig : config
    );
    onConfigurationsChange(newConfigurations);
  };

  const handleMultipleUnitsChange = (index: number, checked: boolean) => {
    const updatedConfig = {
      ...configurations[index],
      allowsMultipleUnits: checked,
      unitPriceImpact: checked ? configurations[index].unitPriceImpact : 0,
    };
    handleUpdateConfiguration(index, updatedConfig);
  };

  const handleUnitPriceImpactChange = (index: number, value: number | null) => {
    handleUpdateConfiguration(index, {
      ...configurations[index],
      unitPriceImpact: value || 0,
    });
  };

  return (
    <Container>
      <h6>Product Configurations</h6>
      {configurations.map((config, index) => (
        <ConfigurationWrapper 
          key={config.id}
          ref={index === configurations.length - 1 ? lastConfigRef : undefined}
        >
          <ConfigurationHeader>
            <Input
              type="text"
              value={config.name}
              onChange={(e) =>
                handleUpdateConfiguration(index, {
                  ...config,
                  name: e.target.value,
                })
              }
              placeholder="Configuration name"
              disabled={index === 0}
            />
            {index !== 0 && (
              <Popconfirm
                title="Delete configuration"
                description="Are you sure to delete this configuration?"
                icon={<ErrorOutlineIcon style={{ color: "red" }} />}
                onConfirm={() => handleDeleteConfiguration(index)}
                okText="Yes"
                cancelText="No"
              >
                <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
              </Popconfirm>
            )}
          </ConfigurationHeader>
          <UnitsSection>
            <Checkbox
              checked={config.allowsMultipleUnits}
              onChange={(e) =>
                handleMultipleUnitsChange(index, e.target.checked)
              }
            >
              Allows multiple units
            </Checkbox>
            {config.allowsMultipleUnits && (
              <UnitPriceGroup>
                <label>Unit price impact:</label>
                <InputNumber
                  prefix="$"
                  value={config.unitPriceImpact}
                  onChange={(value) => {
                    if (value !== null && value >= 0)
                      handleUnitPriceImpactChange(index, value);
                  }}
                  placeholder="Unit price impact"
                  style={{ width: 100 }}
                />
              </UnitPriceGroup>
            )}
          </UnitsSection>
          <ConfigurationComponent
            attributes={config.configurationAttributes}
            onAttributesChange={(newAttributes) =>
              handleUpdateConfiguration(index, {
                ...config,
                configurationAttributes: newAttributes,
              })
            }
          />
        </ConfigurationWrapper>
      ))}
      <AddConfigurationButton onClick={handleAddConfiguration}>
        <AddIcon />
        <span>Add configuration</span>
      </AddConfigurationButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h6 {
    margin: 1rem 0 0 0;
  }
`;

const ConfigurationWrapper = styled.div`
  height: fit-content;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.lightGray};
`;

const ConfigurationHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
  input {
    font-size: 1.1rem;
    font-weight: bold;
    width: 20%;
    padding: 0.5rem;
    border-radius: 0.25rem;
    &:disabled {
      background: none;
      border: none;
      color: inherit;
    }
  }
`;

const AddConfigurationButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
`;

const UnitsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.lightGray}20;
  border-radius: 0.5rem;
`;

const UnitPriceGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.black};
  }
`;
