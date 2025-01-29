import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ConfigurationAttribute } from "../../../../types";
import { useDebounce } from "../../../../hooks/useDebounce";
import { ColorPicker, Popconfirm, Select } from "antd";
import { TextField } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ATTRIBUTE_TYPES = ["COLOR", "SIZE", "OTHER"] as const;

interface AttributeProps {
  attribute: ConfigurationAttribute;
  onDelete: () => void;
  onUpdate: (attribute: ConfigurationAttribute) => void;
}

export const AttributeComponent: React.FC<AttributeProps> = ({
  attribute,
  onDelete,
  onUpdate,
}) => {
  const [localName, setLocalName] = useState(attribute.name);
  const [localChoices, setLocalChoices] = useState(attribute.choices);
  const debouncedName = useDebounce(localName, 500);
  const debouncedChoices = useDebounce(localChoices, 500);
  const [showChoices, setShowChoices] = useState(true);

  // Update local state when prop changes
  useEffect(() => {
    setLocalName(attribute.name);
    setLocalChoices(attribute.choices);
  }, [attribute]);

  // Handle debounced name updates
  useEffect(() => {
    if (debouncedName !== attribute.name) {
      onUpdate({
        ...attribute,
        name: debouncedName,
      });
    }
  }, [debouncedName]);

  // Handle debounced choices updates
  useEffect(() => {
    if (
      JSON.stringify(debouncedChoices) !== JSON.stringify(attribute.choices)
    ) {
      onUpdate({
        ...attribute,
        choices: debouncedChoices,
      });
    }
  }, [debouncedChoices]);

  const handleNameChange = (newName: string) => {
    setLocalName(newName);
  };

  const handleTypeChange = (newType: string) => {
    onUpdate({
      ...attribute,
      type: newType,
    });
  };

  const handleAddChoice = () => {
    onUpdate({
      ...attribute,
      choices: [...attribute.choices, { name: "", priceImpact: 0 }],
    });
  };

  const handleChoiceChange = (
    index: number,
    field: "name" | "priceImpact",
    value: string | number
  ) => {
    const updatedChoices = localChoices.map((choice, i) =>
      i === index ? { ...choice, [field]: value } : choice
    );
    setLocalChoices(updatedChoices);
  };

  const handleDeleteChoice = (indexToDelete: number) => {
    onUpdate({
      ...attribute,
      choices: attribute.choices.filter((_, index) => index !== indexToDelete),
    });
  };

  const handleColorChange = (color: any, choiceIndex: number) => {
    const hexColor = color.toHexString();
    handleChoiceChange(choiceIndex, "name", hexColor || "black");
  };

  return (
    <AttributeContainer>
      <HeaderContainer>
        <InputGroup>
          <label>Name:</label>
          <TextField
            onChange={(e) => handleNameChange(e.target.value)}
            value={localName}
            required
            id="outlined-required"
            label="Required"
            defaultValue="Enter attribute name"
          />
        </InputGroup>

        <Popconfirm
          title="Delete attribute"
          description="Are you sure to delete this attribute?"
          icon={<ErrorOutlineIcon style={{ color: "red" }} />}
          onConfirm={onDelete}
          okText="Yes"
          cancelText="No"
        >
          <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
        </Popconfirm>
      </HeaderContainer>
      <InputGroup>
        <label>Type:</label>
        <Select
          style={{ width: 200 }}
          placeholder="Select type"
          optionFilterProp="label"
          options={ATTRIBUTE_TYPES.map((type) => ({
            value: type,
          }))}
          value={attribute.type}
          onChange={(value) => handleTypeChange(value)}
        />
      </InputGroup>

      <ChoicesSection>
        <ChoicesHeader>
          <ArrowDropDownIcon
            style={{ marginRight: "-1rem" }}
            onClick={() => setShowChoices(!showChoices)}
          />
          <h6>Choices ({attribute.choices.length})</h6>
          <AddChoiceButton
            onClick={(e) => {
              e.stopPropagation();
              handleAddChoice();
            }}
          >
            <AddIcon />
            <span>Add choice</span>
          </AddChoiceButton>
        </ChoicesHeader>

        {showChoices && (
          <ChoicesList>
            {localChoices.map((choice, idx) => (
              <ChoiceItem key={idx}>
                {attribute.type === "COLOR" ? (
                  <ColorPicker
                    defaultValue={choice.name || "transparent"}
                    showText
                    allowClear
                    onChange={(color) => handleColorChange(color, idx)}
                    style={{height: "38px", alignItems: "center"}}
                  />
                ) : (
                  <input
                    type="text"
                    value={choice.name}
                    onChange={(e) =>
                      handleChoiceChange(idx, "name", e.target.value)
                    }
                    placeholder="Choice name"
                  />
                )}
                <input
                  type="number"
                  value={choice.priceImpact}
                  onChange={(e) =>
                    handleChoiceChange(
                      idx,
                      "priceImpact",
                      Number(e.target.value)
                    )
                  }
                  placeholder="Price impact"
                />
                <Popconfirm
                  title="Delete choice"
                  description="Are you sure to delete this choice?"
                  icon={<ErrorOutlineIcon style={{ color: "red" }} />}
                  onConfirm={() => handleDeleteChoice(idx)}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
                </Popconfirm>
              </ChoiceItem>
            ))}
          </ChoicesList>
        )}
      </ChoicesSection>
    </AttributeContainer>
  );
};

const AttributeContainer = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.5rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  flex: 1;
  min-width: 200px;
  label {
    font-size: 0.9rem;
    min-width: 60px;
  }

  input,
  select {
    flex: 1;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.9rem;

    &:focus {
      outline: none;
    }
  }

  select {
    cursor: pointer;
  }
`;

const ChoicesSection = styled.div`
  width: 100%;
  flex-direction: column;
`;

const ChoicesHeader = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 0.2rem 0;
  h6 {
    margin: 0;
  }
`;

const AddChoiceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
  }
`;

const ChoicesList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const ChoiceItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.8rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  input {
    padding: 0.5rem 0.2rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 0.25rem;
    font-size: 0.83rem;
    width: 100px;
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
