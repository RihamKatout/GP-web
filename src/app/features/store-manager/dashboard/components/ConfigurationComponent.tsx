import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { AttributeComponent } from "./AttributeComponent";
import { ConfigurationAttribute } from "../../../../types";

interface ConfigurationComponentProps {
  attributes: ConfigurationAttribute[];
  onAttributesChange: (attributes: ConfigurationAttribute[]) => void;
}

export const ConfigurationComponent: React.FC<ConfigurationComponentProps> = ({
  attributes,
  onAttributesChange
}) => {
  const handleAddAttribute = () => {
    const newAttribute: ConfigurationAttribute = {
      id: attributes.length,
      name: '',
      type: 'OTHER',
      choices: []
    };
    onAttributesChange([...attributes, newAttribute]);
  };

  const handleDeleteAttribute = (indexToDelete: number) => {
    onAttributesChange(attributes.filter((_, index) => index !== indexToDelete));
  };

  const handleUpdateAttribute = (index: number, updatedAttribute: ConfigurationAttribute) => {
    const newAttributes = attributes.map((attr, i) => 
      i === index ? updatedAttribute : attr
    );
    onAttributesChange(newAttributes);
  };

  return (
    <ConfigurationContainer>
      {attributes.map((attr, index) => (
        <AttributeComponent 
          key={attr.id}
          attribute={attr}
          onDelete={() => handleDeleteAttribute(index)}
          onUpdate={(updatedAttr) => handleUpdateAttribute(index, updatedAttr)}
        />
      ))}
      <AddAttributeButton onClick={handleAddAttribute}>
        <AddIcon />
        <p>Add attribute</p>
      </AddAttributeButton>
    </ConfigurationContainer>
  );
};

const ConfigurationContainer = styled.div`
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  h6 {
    text-align: left;
  }
`;

const AddAttributeButton = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  cursor: pointer;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.orange};
  font-family: "Overlock", serif;
  font-weight: 600;
  font-size: 0.85rem;
  border-radius: 0.5rem;
  transition: all 0.5s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};
    p {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
