import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MainLayout, SectionContainer } from "../components/Layout";
import { ProductCategory, ProductFilters, SectionIdEnum } from "../types";
import { useQuery } from "react-query";
import { ProductCategoryService, ProductService } from "../api";
import { Loader } from "../components/common";
import { FiltersContainer } from "../styles";
import { ProductsShowcaseSection } from "../features/products/ProductsShowcaseSection";

// TODO: fix

export const ShowcasePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  const queryParams: ProductFilters = Object.fromEntries(
    Array.from(searchParams.entries())
  ) as unknown as ProductFilters;

  const normalizedParams: ProductFilters = {
    ...queryParams,
    storeCategoryId: queryParams.storeCategoryId
      ? Number(queryParams.storeCategoryId)
      : undefined,
    minPrice: queryParams.minPrice ? Number(queryParams.minPrice) : undefined,
    maxPrice: queryParams.maxPrice ? Number(queryParams.maxPrice) : undefined,
    minRating: queryParams.minRating
      ? Number(queryParams.minRating)
      : undefined,
    page: queryParams.page ? Number(queryParams.page) : 0,
    size: queryParams.size ? Number(queryParams.size) : 20,
  };

  const [filters, setFilters] = useState<ProductFilters>(normalizedParams);
  const [formFilters, setFormFilters] =
    useState<ProductFilters>(normalizedParams);

  useEffect(() => {
    const fetchCategories = async () => {
      window.scrollTo(0, 0);
      const response =
        await ProductCategoryService.getProductCategorizeByStoreCategory(
          filters.storeCategoryId
        );
      setCategories(response);
    };
    fetchCategories();
  }, [filters.storeCategoryId]);

  const { data, isLoading, isError } = useQuery(
    ["products", filters],
    () => ProductService.fetchProducts(filters),
    { keepPreviousData: true }
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormFilters((prev) => ({
      ...prev,
      [name]: value === "" ? undefined : value,
    }));
  };

  const applyFilters = () => {
    setFilters((prev) => ({ ...prev, ...formFilters, page: 0 }));
  };

  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  if (isError) return <p>Error loading products.</p>;

  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.showcase}>
        <div>
          <FiltersContainer>
            <input
              type="text"
              name="keyWord"
              placeholder="Search by name"
              value={formFilters.keyWord || ""}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              value={formFilters.minPrice || ""}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              value={formFilters.maxPrice || ""}
              onChange={handleInputChange}
            />
            <select
              name="categoryId"
              value={formFilters.categoryId || ""}
              onChange={handleInputChange}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button onClick={applyFilters}>Search</button>
          </FiltersContainer>

          {isLoading && <Loader type="bouncing" />}
          <ProductsShowcaseSection
            data={data}
            page={filters.page}
            handlePageChange={handlePageChange}
          ></ProductsShowcaseSection>
        </div>
      </SectionContainer>
    </MainLayout>
  );
};
