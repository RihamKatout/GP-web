import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/SweetContext";

const CakeCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const CakeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #fff3e6;
  border: 1px solid #ffe0b3;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100px;
    height: 110px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;

const Description = styled.div`
  flex-grow: 1;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #4d2600;
  }

  p b {
    font-size: 1.2rem;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

`;

interface CakeCartProps {
  setSelectedItems: React.Dispatch<React.SetStateAction<Number[] | undefined>>;
  checkedItems?: Number[];
}

const CakeCart: React.FC <CakeCartProps> = ({setSelectedItems , checkedItems = [],}) => {
  const context = useContext(ShopContext);

  if (!context) {
    console.error("CakeCart must be used within a ShopContextProvider");
    return null;
  }

  const { cakeImages } = context;
  //const [selectedCakes, setSelectedItems] = useState<number[]>([]);

  // const handleCheckboxChange = (index: number) => {
  //   setSelectedItems((prev) =>
  //     prev.includes(index)
  //       ? prev.filter((i) => i !== index) // Uncheck: remove from selectedCakes
  //       : [...prev, index] // Check: add to selectedCakes
  //   );
  // };

  if (!cakeImages || cakeImages.length === 0) {
    return <p>No cakes have been added yet!</p>;
  }

  return (
    <CakeCartContainer>
      {cakeImages.map((image, index) => (
        <CakeCard key={index}>
          <CheckboxContainer>
            <input
              type="checkbox"
              checked={checkedItems.includes(index)}
              onChange={() => {if (!checkedItems.includes(index)) {
                setSelectedItems((prev) => [...(prev || []), index]);
              } else {
                setSelectedItems((prev) => prev?.filter((id) => id !== index));
              }
            }}
            />
            
          </CheckboxContainer>
          <img src={image.image} alt={`Cake Design ${index + 1}`} />

          <Description>
            <p>
              <b>Cake {index + 1}</b>
              <p>Size: {image.size}</p>
              <p>Price: ${image.price}</p>
            </p>
            <p>Custom 3D Design</p>
          </Description>
        </CakeCard>
      ))}
    </CakeCartContainer>
  );
};

export default CakeCart;
