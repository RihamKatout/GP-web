import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Category, Product, ProductFilters } from "../../types";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { ProductService } from "../../api";
import { Pagination } from "@mui/material";
import { ProductCard } from "../../components/common";
import { Theme } from "../../utils/Theme";
import { Divider } from "antd";
import cake from "../../../assets/characters/cake3.png"
const DefaultPageSize = 8;

interface StoreProductsSectionProps {
  productCategories: Category[];
  storeId: number;
}

export const StoreProductsSection: React.FC<StoreProductsSectionProps> = ({
  productCategories,
  storeId,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<ProductFilters>({
    storeId,
    page: 0,
    size: DefaultPageSize,
  });

  const updateSearchParams = useCallback(() => {
    const filteredParams: Record<string, string> = {
      storeId: storeId.toString(),
      page: (filters.page || 0).toString(),
      size: (filters.size || DefaultPageSize).toString(),
    };

    if (filters?.categoryId) {
      filteredParams.categoryId = filters.categoryId.toString();
    }
    setSearchParams(new URLSearchParams(filteredParams));
  }, [setSearchParams, filters]);

  useEffect(() => {
    updateSearchParams();
  }, [filters]);

  const { data } = useQuery(
    ["products", filters],
    () => ProductService.fetchProducts(filters),
    {
      keepPreviousData: true,
      onSuccess: () => {
        //scrollTo({ top: 0, behavior: "smooth" });
      },
    }
  );

  const products = data?.content || [];

  return (
    <Container>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Divider style={{ borderColor: "#1a1a19b3" }}>
          <Title>OUR PRODUCTS</Title>
        </Divider>
      </div>

      <TabsContainer>
        <Tabs>
          <Tab
            active={!filters.categoryId}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                categoryId: undefined,
              }))
            }
          >
            All
          </Tab>
          {productCategories.map((category) => (
            <Tab
              key={category.id}
              active={filters.categoryId === category.id}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  categoryId: category.id,
                }))
              }
            >
              {category.name}
            </Tab>
          ))}
          {storeId === 3 && (
            <CustomTab
              active={filters.categoryId === -1}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  categoryId: -1,
                }))
              }
            >
              🎂 3D Custom Cake
            </CustomTab>
          )}
        </Tabs>
      </TabsContainer>

      {filters.categoryId === -1 ? (
        <CustomCakeSection>
          <CakeImage
            src={cake} // Replace with your image URL
            alt="3D Custom Cake"
          />
          <CakeText>
            <h2>Create Your Dream Cake in 3D!</h2>
            <p>
              Bring your imagination to life with our exclusive 3D custom cake design
              service. Choose your favorite theme, colors, and more to craft a cake
              that's uniquely yours.
            </p>
            <Button onClick={() => navigate("/cake")}>Explore Now !!</Button>
          </CakeText>
        </CustomCakeSection>
      ) : (
        <ProductsGrid>
          {products.length === 0 ? (
            <Message>No products found for the selected category.</Message>
          ) : (
            products.map((product) => <ProductCard key={product.id} {...product} />)
          )}
        </ProductsGrid>
      )}

      <PaginationContainer>
        <Pagination
          count={data?.page?.totalPages || 1}
          page={(data?.page?.number ?? 0) + 1}
          onChange={(_, page) =>
            setFilters((prev) => ({ ...prev, page: page - 1 }))
          }
        />
      </PaginationContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  background-color: #fefefe;
 // padding: 0 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 1100px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Theme.colors.secondary_dark};
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 0.5rem;
  font-family: "Delius";
`;
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  border: none;
  border-bottom: ${(props) =>
    props.active ? `3px solid ${Theme.colors.primary}` : "none"};
  background: ${(props) => (props.active ? "#ffffff" : "#f8f8f8")};
  color: ${(props) => (props.active ? Theme.colors.primary_dark : "#666")};
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    color: ${Theme.colors.primary_dark};
  }
`;

const CustomTab = styled(Tab)`
  background: linear-gradient(45deg, #ff9a9e, #fad0c4);
  color: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    background: linear-gradient(45deg, #fad0c4, #ff9a9e);
  }
`;

const CustomCakeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  //padding: 2rem;
  background: #ffffff;
  border-radius: 10px;
`;

const CakeImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const CakeText = styled.div`
  text-align: center;
  width: 60%;
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${Theme.colors.primary_dark};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${Theme.colors.primary};
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary}; 
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}; 
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin: 0 auto;
  max-width: 900px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Message = styled.p`
  text-align: center;
  color: #6c757d;
  font-size: 1.2rem;
  grid-column: 1 / -1;
`;
