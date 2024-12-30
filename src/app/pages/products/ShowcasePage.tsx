import { MainLayout, SectionContainer } from "../../components/Layout";
import { Product, ProductFilters, SectionIdEnum } from "../../types";
import {
  FilterOptions,
  FilterSidebar,
  ProductsShowcaseSection,
} from "../../features";
import { useCallback, useEffect, useState } from "react";
import { ProductService } from "../../api";
import { debounce } from "@mui/material";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const ShowcaseContainer = styled("div")({
  display: "flex",
  height: "150vh",
  maxWidth: "100vw",
  overflow: "hidden",
  flexWrap: "wrap",
  gap: "0",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

const DEFAULT_PAGE_SIZE = 2;

export const ShowcasePage = () => {
  // product filtering
  const [searchParams, setSearchParams] = useSearchParams();

  const normalizeSearchParams = (): ProductFilters => {
    const params = Object.fromEntries(searchParams.entries());
    return {
      storeCategoryId: Number(params.storeCategoryId) || undefined,
      categoryId: Number(params.categoryId) || undefined,
      minPrice: Number(params.minPrice) || undefined,
      maxPrice: Number(params.maxPrice) || undefined,
      minRating: Number(params.minRating) || undefined,
      keyWord: params.keyWord,
      page: Number(params.page) || 0,
      size: Number(params.size) || DEFAULT_PAGE_SIZE,
    };
  };

  const [filters, setFilters] = useState<ProductFilters>(
    normalizeSearchParams()
  );

  const updateSearchParams = useCallback(
    (newFilters: ProductFilters) => {
      const filteredParams = Object.entries(newFilters)
        .filter(([, value]) => value !== undefined && value !== null )
        .reduce((acc, [key, value]) => {
          acc[key] = value.toString();
          return acc;
        }, {} as Record<string, string>);

      setSearchParams(new URLSearchParams(filteredParams));
    },
    [setSearchParams]
  );

  const debouncedSearch = useCallback(
    debounce((newFilters: ProductFilters) => {
      updateSearchParams(newFilters);
    }, 500),
    [updateSearchParams]
  );

  useEffect(() => {
    updateSearchParams(filters);
  }, [filters]);

  // Fetch products
  const [products, setProducts] = useState<Product[]>([]);
  const { data, isLoading, isError } = useQuery(
    ["products", searchParams.toString()],
    () => ProductService.fetchProducts(filters),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setProducts(data.content);
        scrollTo({ top: 0, behavior: "smooth" });
      },
    }
  );

  if (isError) return <p>Error loading products.</p>;

  const handlePageChange = (newPage: number) => {
    const newFilters = { ...filters, page: newPage };
    setFilters(newFilters);
  };

  const handleProductOptions = (newFilters: FilterOptions) => {
    const updatedFilters = { ...filters, ...newFilters, page: 0 };
    setFilters(updatedFilters);
    // debouncedSearch(updatedFilters);
  };

  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.products}>
        <ShowcaseContainer>
          {/* Sidebar */}
          <FilterSidebar
            storeCategoryId={filters.storeCategoryId || 1}
            handleProductOptionsChange={handleProductOptions}
          />
          <ProductsShowcaseSection
            products={products}
            isLoading={isLoading}
            setProducts={setProducts}
            handlePageChange={handlePageChange}
            page={
              data?.page || {
                size: 12,
                number: 1,
                totalElements: 0,
                totalPages: 0,
              }
            }
          />
        </ShowcaseContainer>
      </SectionContainer>
    </MainLayout>
  );
};
