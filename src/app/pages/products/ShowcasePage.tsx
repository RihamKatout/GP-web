import { MainLayout, SectionContainer } from "../../components/Layout";
import {
  ProductFilters,
  ProductWithStoreDto,
  SectionIdEnum,
} from "../../types";
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
import { useNavigate, useSearchParams } from "react-router-dom";

import { Carousel } from "antd";
import bunny from "../../../assets/characters/Bunny.png";
import cat from "../../../assets/characters/cat.png";
import bear from "../../../assets/characters/Bear.png";
// TODO: fix carousel
// prevent opening model for unavailable products
// prevent unlogged users from adding to cart
// show success message on adding to cart
// wishlist feature
// handle sorting in backend
const ShowcaseContainer = styled("div")({
  display: "flex",
  height: "100%",
  maxWidth: "100vw",
  overflow: "hidden",
  flexWrap: "wrap",
  gap: "0",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

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
    // debouncedSearch(updatedFilters);
  };

  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}

      <SectionContainer sectionId={SectionIdEnum.products}>
        <ShowcaseContainer>
          {/* Sidebar */}
          <FilterSidebar
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
        </ShowcaseContainer>
      </SectionContainer>
    </MainLayout>
  );
};
const HeroContainer = styled.div`
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text || "#000"};
  transition: 0.2s;
  padding: 20px;

  .content {
    display: grid;
    grid-template-columns: 1fr; /* Single column for small screens */
    gap: 10px;
    align-items: center;
    text-align: left;

    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
    }
  }

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-left: 100px;
    width: 80%;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-top: 40px;
      font-family: "Delius Swash Caps",  serif;
      span {
        color: ${({ theme }) => theme.colors.primary || "#e63946"};
      }
    }

    p {
      font-size: 1.2rem;
      line-height: 1.5;
      font-family: "Overlock", serif;
    }

    button {
      border-radius: 15px;
      width: 200px;
      padding: 10px;
      color: #2b2929;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 20px;
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
    }
  }
  .video-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: fit-content;
    margin-top: 120px;

    .dotlottie-container {
      max-width: 100px;
      width: 90%;
    }
  }
`;
