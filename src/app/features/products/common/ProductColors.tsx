import { colors } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface ProductColorsProps {
  colors: string[];
  selectedColor?: string;
  setSelectedColor: (color: string) => void;
}
export const ProductColors: React.FC<ProductColorsProps> = ({
  colors,
  setSelectedColor,
  selectedColor,
}) => {
  return (
    <>
      {colors && (colors.length || 0) > 0 ? (
        <>
          <p>Colors</p>
          <Options>
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  backgroundColor: color,
                  width: "1.5rem",
                  cursor: "pointer",
                  height: "1.5rem",
                  borderRadius: "50%",
                  border: color === selectedColor ? "2px solid black" : "",
                }}
              ></div>
            ))}
          </Options>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
const Options = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: -0.5rem;
  text-align: center;
`;
