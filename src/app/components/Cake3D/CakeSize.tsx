import React from "react";
import styled from "styled-components";

interface CakeSizeProps {
  selectedSize: string;
  onSizeChange: (size: string, price: number) => void;
}

const SizeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  //margin: 1rem 0;
`;

const SizeLabel = styled.label<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  input {
    display: none;
  }

  div {
    padding: 10px 15px;
    border: 2px solid #c47b83;
    border-radius: 8px;
    background-color: ${(props) => (props.selected ? "#c47b83" : "#fff")};
    color: ${(props) => (props.selected ? "#fff" : "#c47b83")};
    transition: all 0.3s ease;
    text-align: center;
    span.price {
      color: black; /* Ensure the price is always black */
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CakeSize: React.FC<CakeSizeProps> = ({ selectedSize, onSizeChange }) => {
  const sizes = [
    { label: "Small", price: 18 },
    { label: "Regular", price: 20 },
    { label: "Large", price: 45 },
  ];

  return (
    <SizeContainer>
      {sizes.map((size) => (
        <SizeLabel
          key={size.label}
          selected={selectedSize === size.label}
        >
          <input
            type="radio"
            name="cakeSize"
            value={size.label}
            checked={selectedSize === size.label}
            onChange={() => onSizeChange(size.label, size.price)}
          />
          <div>
            {size.label} <span className="price">${size.price}</span>
          </div>
        </SizeLabel>
      ))}
    </SizeContainer>
  );
};

export default CakeSize;
