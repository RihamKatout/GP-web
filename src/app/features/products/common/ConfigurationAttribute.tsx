import React, { useEffect } from "react";
import styled from "styled-components";

interface ProductConfigurationProps {
  attribute: any;
  setConfigPriceImpact: React.Dispatch<React.SetStateAction<number>>;
}
export const ConfigurationAttribute: React.FC<ProductConfigurationProps> = ({
  attribute,
  setConfigPriceImpact,
}) => {
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
        {attribute.choices.map((choice: any, index: number) => (
          <div>
            {attribute.type === "COLOR" ? (
              <div key={choice.name}>
                <ColorButton
                  style={{
                    backgroundColor: choice.name,
                    border:
                      selectedChoice === index ? "1px solid black" : "none",
                  }}
                  onClick={() => handleChoice(index)}
                />
                {choice.priceImpact ? (
                  <span className="colorSpan">+{choice.priceImpact}$</span>
                ) : (
                  <> </>
                )}
              </div>
            ) : (
              <button
                key={choice.name}
                style={{
                  border: selectedChoice === index ? "1px solid black" : "none",
                }}
                onClick={() => handleChoice(index)}
              >
                {choice.name}
                {choice.priceImpact ? (
                  <span>+{choice.priceImpact}$</span>
                ) : (
                  <> </>
                )}
              </button>
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
  gap: 0.5rem;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .colorSpan {
    font-size: 0.8rem;
    margin-right: 0.5rem;
    font-weight: 600;
  }
`;

const ColorButton = styled.button`
  background-color: red;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
`;
