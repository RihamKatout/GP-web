import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Category, Product, ProductFilters } from "../../types";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ProductService } from "../../api";
import { Pagination } from "@mui/material";
import { ProductCard } from "../../components/common";
import { Theme } from "../../utils/Theme";

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
      onSuccess: (data) => {
        console.log("API Response:", data);
        scrollTo({ top: 0, behavior: "smooth" });
      },
    }
  );

  const products = data?.content || [];

  return (
    <Container>
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
        </Tabs>
      </TabsContainer>

      <ProductsGrid>
        {products.length === 0 ? (
          <Message>No products found for the selected category.</Message>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </ProductsGrid>

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
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 1100px;
  margin: 0 auto;
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  justify-content: center; /* Centers the grid content */
  margin: 0 auto; /* Ensures the grid stays centered in its container */
  max-width: 800px; /* Optionally limit the grid's width */
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
