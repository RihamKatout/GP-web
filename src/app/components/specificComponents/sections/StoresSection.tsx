import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // For navigation
import { Category } from "../../../types";
import { StoreService } from "../../../api";
import { useQuery } from "react-query";
import img from "../../../../assets/characters/loginChar.png";
import { Theme } from "../../../utils/Theme";
import { Divider } from "antd";
import { Loader } from "../../common";

interface StoresSectionProps {
  categories?: Category[];
}

export const StoresSection: React.FC<StoresSectionProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<
    number | undefined
  >(undefined);

  const navigate = useNavigate();

  const {
    data: stores,
    isLoading,
  } = useQuery(
    ["stores", selectedCategory],
    () => StoreService.getStoresByStoreCategoryId(selectedCategory),
    {
      keepPreviousData: true,
    }
  );

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

      {isLoading && <Loader type="wave" />}

      <StoresContainer>
        {stores?.map((store) => (
          <StoreCard key={store.id}>
            <div className="store-info">
              <StoreImage src={store.logoURL || img} alt={store.name} />
              <StoreName>{store.name}</StoreName>
            </div>
            <StoreDetails>{store.description}</StoreDetails>
            <VisitButton onClick={() => navigate(`/store/${store.id}`)}>
              Visit
            </VisitButton>
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 3.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary_dark};
  text-align: center;
  font-family: "DynaPuff";
  @media (max-width: 780px) {
    font-size: 2.5rem;
  }
`;

const CategoryTabs = styled.div`
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background-color: ${(props) =>
    props.active ? Theme.colors.secondary : "#e0e0e0"};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Delius",  serif;
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
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StoreCard = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s;
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 325px;
  align-items: center;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  .store-info {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 780px) {
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    height: 200px;
    .store-info {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

const StoreName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary_dark};
  margin: 0.5rem 0;
  font-family: "Overlock", serif;
`;

const StoreDetails = styled.p`
  width: 100%;
  flex: 1;
  font-size: 1rem;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 780px) {
    text-align: left;
  }
`;

const StoreImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 780px) {
    width: 70px;
    height: 70px;
  }
`;

const VisitButton = styled.button`
  width: 100%;
  height: fit-content;
  padding: 0.5rem 2rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-family: "Delius", serif;
  background-color: ${({ theme }) => theme.colors.primary_dark};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  @media (max-width: 780px) {
    padding: 0.2rem 1rem;
    margin-left: auto;
    width: fit-content;
    font-size: 0.9rem;
  }
`;
