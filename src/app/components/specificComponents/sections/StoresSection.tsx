import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // For navigation
import { Category } from "../../../types";
import { StoreService } from "../../../api";
import { useQuery } from "react-query";
import img from "../../../../assets/characters/loginChar.png";
import { Theme } from "../../../utils/Theme";
import { Divider } from "antd";

interface StoresSectionProps {
  categories?: Category[];
}

export const StoresSection: React.FC<StoresSectionProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<
    number | undefined
  >(undefined);

  const navigate = useNavigate(); // Hook for navigation

  const {
    data: stores,
    isLoading,
    error,
  } = useQuery(
    ["stores", selectedCategory],
    () => StoreService.getStoresByStoreCategoryId(selectedCategory),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  // Filter out the "General" category
  const filteredCategories = categories?.filter(
    (category) => category.name !== "General"
  );

  return (
    <Container>
      <div style={{ width: "80%", margin: "0 auto" }}>
      <Divider style={{ borderColor: "#1a1a19b3" }}>
      <Title>Explore Stores</Title>
      </Divider>
      </div>
      <CategoryTabs>
        <CategoryTab
          active={selectedCategory === undefined}
          onClick={() => setSelectedCategory(undefined)}
        >
          All
        </CategoryTab>
        {filteredCategories?.map((category) => (
          <CategoryTab
            key={category.id}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </CategoryTab>
        ))}
      </CategoryTabs>

      {isLoading && <Message>Loading...</Message>}
      {/* {error && <Message>Error loading stores</Message>} */}

      <StoresContainer>
        {stores?.map((store) => (
          <StoreCard key={store.id}>
            <div>
            <StoreImage>
              <img src={store.logoURL || img} alt={store.name} />
            </StoreImage>
            <StoreName>{store.name}</StoreName>
            <StoreDetails>{store.description}</StoreDetails>
            </div>
            <div>
            <VisitButton onClick={() => navigate(`/store/${store.id}`)}>
              Visit
            </VisitButton></div>
          </StoreCard>
        ))}
      </StoresContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  
`;

const Title = styled.h2`
  font-size: 3.7rem;
  font-weight: 400;
  color: ${({theme}) => theme.colors.secondary_dark};
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: "DynaPuff";

`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background-color: ${(props) => (props.active ? Theme.colors.secondary : "#e0e0e0")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Delius Swash Caps", serif;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

  &:hover {
    background-color: ${(props) =>
      props.active ? Theme.colors.primary : "#d6d6d6"};
  }
`;

const StoresContainer = styled.div`
 display: flex;
  justify-content: center;
  gap: 1rem;
  
`;

const StoreCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures consistent spacing between elements */
  height: 350px; /* Makes all cards the same height */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const StoreName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({theme})=> theme.colors.primary_dark};
  margin: 0.5rem 0;
  font-family: "Overlock", serif;
`;

const StoreDetails = styled.p`
  font-size: 1rem;
  color: #666;
`;

const StoreImage = styled.div`
  margin: 0 auto 1rem;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VisitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #6a437c;
  color: white;
  border: none;
  border-radius: 15px;
  //bottom: 200px;
  cursor: pointer;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                    0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                    0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
        background-color: ${({ theme }) => theme.colors.secondary_light};
  }
`;

const Message = styled.p`
  text-align: center;
  color: #6a437c;
  font-size: 1.2rem;
  margin: 2rem 0;
`;
