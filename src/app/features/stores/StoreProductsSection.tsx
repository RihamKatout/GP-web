import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Category, Product, ProductFilters } from "../../types";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ProductService } from "../../api";
import { Pagination } from "@mui/material";
import { ProductCard } from "../../components/common";
import { Theme } from "../../utils/Theme";

const DefaultPageSize = 8; // Display 4 products per page (2x2 grid)

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

  // Fetch products
  const [products, setProducts] = useState<Product[]>([]);
  const { data } = useQuery(
    ["products", searchParams.toString()],
    () => ProductService.fetchProducts(filters),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setProducts(data.content);
        scrollTo({ top: 0, behavior: "smooth" });
        console.log("data", data);
      },
    }
  );

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
      <ProductsContainer>
        {products.length === 0 ? (
          <Message>No products found for the selected category.</Message>

        ) : (
          
          products.map((product) => <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 200px))",
            gap: "1rem",
            justifyContent: "center",
            width: "100%",
          }}
        ><ProductCard key={product.id} {...product} /> </div>)
        )}
      </ProductsContainer>
      <PaginationContainer>
        <Pagination
          count={data?.page.totalPages}
          page={(data?.page?.number ?? 0) + 1}
          onChange={(_, page) =>
            setFilters((prev) => ({ ...prev, page: page - 1 }))
          }
        />
      </PaginationContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  grid-area: storeProducts;
  background-color: #f9f9f9;
  padding: 2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Tabs = styled.div`
  display: flex;
  //gap: 0.5rem;
  width: 100%;
 // max-width: 600px;
  justify-content: center;
  border-bottom:3px solid ${Theme.colors.primary};
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.5rem 1rem;
  margin: 0;
  width: 100%;
  text-align: center;
  background-color: ${(props) => (props.active ? Theme.colors.primary_dark : "#f1f1f1")};
  color: ${(props) => (props.active ? "#000000" : "#6c757d")};
  border: 2px solid ${(props) => (props.active ? Theme.colors.primary : Theme.colors.secondary_light)};
  //border-bottom: ${(props) => (props.active ? "none" : "1px solid #ccc")};
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#fff" : "#e9ecef")};
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  //gap: -30rem; /* Reduced gap between items */
  //rgin: 1rem 0; /* Adjusted margin for better layout */
  //padding: 0.5rem; /* Added padding for container */
  background-color: #fff; /* Optional: Background color for the grid area */
  border: 1px solid #e0e0e0; /* Optional: Border to define container boundaries */
  border-radius: 5px; /* Optional: Rounded corners */
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
`;
