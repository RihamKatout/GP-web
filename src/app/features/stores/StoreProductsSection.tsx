import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Category, Product, ProductFilters } from "../../types";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ProductService } from "../../api";
import { Pagination } from "@mui/material";

const DefaultPageSize = 2;

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
    size: 10,
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
      <p>StoreProductsSection for store: {storeId}</p>
      <p>product categories:</p>
      <button
        onClick={() =>
          setFilters((prev) => ({
            ...prev,
            categoryId: undefined,
          }))
        }
      >
        All
      </button>
      {productCategories.map((category) => (
        <button
          key={category.id}
          onClick={() =>
            setFilters((prev) => ({
              ...prev,
              categoryId: category.id,
            }))
          }
        >
          {category.name}
        </button>
      ))}
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
      <Pagination
        count={data?.page.totalPages}
        page={data?.page?.number}
        onChange={(_, page) =>
          setFilters((prev) => ({ ...prev, page: page - 1 }))
        }
        sx={{ margin: "2rem 0" }}
      />
    </Container>
  );
};

const Container = styled.div`
  grid-area: storeProducts;
  background-color: blue;
`;
