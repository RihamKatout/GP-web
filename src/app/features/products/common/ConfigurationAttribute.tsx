import React from "react";
import styled from "styled-components";

interface ProductConfigurationProps {
  attribute: any;
  isColor: boolean;
}
export const ConfigurationAttribute: React.FC<ProductConfigurationProps> = ({
  attribute,
  isColor,
}) => {
  return (
    <Container>
      <p>{attribute.name}</p>
      {isColor ? (
        <Choices>
          {attribute.choices.map(
            (choice: any) => (
              console.log(choice.name),
              (
                <ColorButton
                  key={choice.name}
                  style={{ backgroundColor: choice.name }}
                />
              )
            )
          )}
        </Choices>
      ) : (
        <Choices>
          {attribute.choices.map((choice: any) => (
            <button key={choice.name}>{choice.name}</button>
          ))}
        </Choices>
      )}
    </Container>
  );
};

const Container = styled.div`
  button {
    border: none;
    background-color: rgb(217, 216, 225);
    font-size: 0.85rem;
  }
`;

const Choices = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;

const ColorButton = styled.button`
  background-color: red;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
`;
