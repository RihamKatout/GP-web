import { MainLayout, SectionContainer } from "../../components/Layout";
import {
  ProductFilters,
  ProductWithStoreDto,
  SectionIdEnum,
} from "../../types";
import {
  FilterOptions,
  ShowcaseFilter,
  PremiumStoresSection,
  ProductsShowcaseSection,
} from "../../features";
import { useCallback, useEffect, useState } from "react";
import { ProductService } from "../../api";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

// TODO: fix carousel
// prevent opening model for unavailable products
// prevent unlogged users from adding to cart
// show success message on adding to cart
// wishlist feature
// handle sorting in backend

const DEFAULT_PAGE_SIZE = 20;

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
        .filter(([, value]) => value !== undefined && value !== null)
        .reduce((acc, [key, value]) => {
          acc[key] = value.toString();
          return acc;
        }, {} as Record<string, string>);

      setSearchParams(new URLSearchParams(filteredParams));
    },
    [setSearchParams]
  );

  useEffect(() => {
    updateSearchParams(filters);
  }, [filters]);

  // Fetch products
  const [productsDto, setProductsDto] = useState<ProductWithStoreDto[]>([]);
  const { data, isLoading, isError } = useQuery(
    ["products", searchParams.toString()],
    () => ProductService.filterProducts(filters),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setProductsDto(data.content);
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
  };

  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.products}>
        <ShowcaseContainer>
          <PremiumStoresSection />
          <ShowcaseBody>
            <ShowcaseFilter
              storeCategoryId={filters.storeCategoryId || 1}
              handleProductOptionsChange={handleProductOptions}
            />
            <ProductsShowcaseSection
              productsDto={productsDto}
              isLoading={isLoading}
              setProductsDto={setProductsDto}
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
          </ShowcaseBody>
        </ShowcaseContainer>
      </SectionContainer>
    </MainLayout>
  );
};

const ShowcaseContainer = styled.div`
  display: flex;
  gap: 0;
`;

const ShowcaseBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
