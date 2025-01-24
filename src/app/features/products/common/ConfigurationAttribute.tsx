import React, { useEffect } from "react";
import styled from "styled-components";
import { Choice, ConfigurationAttribute } from "../../../types";

interface ProductConfigurationProps {
  attribute: ConfigurationAttribute;
  setConfigPriceImpact: React.Dispatch<React.SetStateAction<number>>;
}
export const ConfigurationAttributeComponent: React.FC<
  ProductConfigurationProps
> = ({ attribute, setConfigPriceImpact }) => {
  const [selectedChoice, setSelectedChoice] = React.useState<number>(0);
  const handleChoice = (index: number) => {
    setConfigPriceImpact(
      attribute.choices[index].priceImpact -
        attribute.choices[selectedChoice].priceImpact
    );
    setSelectedChoice(index);
  };
  useEffect(() => {
    setConfigPriceImpact(attribute.choices[selectedChoice].priceImpact);
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
              border: selectedChoice === index ? "1px solid rgb(200, 200, 200)" : "none",
              backgroundColor:
                selectedChoice === index
                  ? "rgba(240, 230, 220, 1)"
                  : "rgb(230, 230, 230)",
            }}
            onClick={() => handleChoice(index)}
          >
            {attribute.type === "COLOR" ? (
              <ChoiceContainer>
                <ColorButton color={choice.name} />
                {choice.priceImpact ? (
                  <span className="price">+{choice.priceImpact}$</span>
                ) : (
                  <> </>
                )}
              </ChoiceContainer>
            ) : (
              <ChoiceContainer>
                {choice.name}
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
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid black;
`;

const ChoiceContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  p {
    font-size: 0.9rem;
    font-weight: 600;
  }
  .price {
    font-size: 0.85rem;
    font-weight: 600;
  }
`;
