import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Choice,
  ConfigurationAttribute,
  ConfigurationInstance,
} from "../../../types";

interface ProductConfigurationProps {
  attribute: ConfigurationAttribute;
  value?: string;
  handlePriceImpact: (priceImpact: number) => void;
  enableButtons: boolean;
  setSelectedChoices?: React.Dispatch<
    React.SetStateAction<ConfigurationInstance[]>
  >;
  instanceId?: number;
}
export const ConfigurationAttributeComponent: React.FC<
  ProductConfigurationProps
> = ({
  attribute,
  handlePriceImpact,
  value,
  enableButtons,
  setSelectedChoices,
  instanceId,
}) => {
  const [selectedChoice, setSelectedChoice] = React.useState<number>(
    value ? attribute.choices.findIndex((choice) => choice.name === value) : 0
  );

  const handleChoice = (index: number) => {
    if (!enableButtons) return;
    const priceImpactChange =
      attribute.choices[index].priceImpact -
      attribute.choices[selectedChoice].priceImpact;
    handlePriceImpact(priceImpactChange);
    setSelectedChoice(index);
    if (setSelectedChoices) {
      setSelectedChoices((prev) =>
        prev.map((instance) => {
          if (instance.id === instanceId) {
            return {
              ...instance,
              choices: instance.choices.map((choice) =>
                choice.attributeId === attribute.id
                  ? { ...choice, choiceName: attribute.choices[index].name }
                  : choice
              ),
            };
          }
          return instance;
        })
      );
    }
  };

  useEffect(() => {
    handlePriceImpact(attribute.choices[selectedChoice].priceImpact);
    return () => {
      handlePriceImpact(-attribute.choices[selectedChoice].priceImpact);
    };
  }, []);

  return (
    <Container>
      <p>{attribute.name}</p>
      <Choices>
        {attribute.choices.map((choice: Choice, index: number) => (
          <div
            key={choice.name}
            style={{
              borderRadius: "0.5rem",
              border:
                selectedChoice === index
                  ? "1px solid rgb(200, 200, 200)"
                  : "none",
              backgroundColor:
                selectedChoice === index
                  ? "rgba(240, 230, 220, 1)"
                  : "rgb(230, 230, 230)",
            }}
            onClick={() => handleChoice(index)}
          >
            {attribute.type === "COLOR" ? (
              <ChoiceContainer enable={enableButtons}>
                <ColorButton color={choice.name} />
                {choice.priceImpact ? (
                  <span className="price">+{choice.priceImpact}$</span>
                ) : (
                  <> </>
                )}
              </ChoiceContainer>
            ) : (
              <ChoiceContainer enable={enableButtons}>
                <p>{choice.name}</p>
                {choice.priceImpact ? (
                  <span className="price">+{choice.priceImpact}$</span>
                ) : (
                  <> </>
                )}
              </ChoiceContainer>
            )}
          </div>
        ))}
      </Choices>
    </Container>
  );
};

const Container = styled.div`
  button {
    border: none;
    background-color: rgb(217, 216, 225);
    font-size: 0.9rem;
    span {
      font-size: 0.75rem;
      margin-left: 0.5rem;
      font-weight: 600;
    }
  }
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ColorButton = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const ChoiceContainer = styled.div<{ enable?: boolean }>`
  gap: 0.5rem;
  display: flex;
  cursor: ${(props) => (props.enable ? "pointer" : "not-allowed")};
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  p {
    font-size: 0.8rem;
    font-weight: 600;
  }
  .price {
    font-size: 0.75rem;
    font-weight: 600;
  }
`;
