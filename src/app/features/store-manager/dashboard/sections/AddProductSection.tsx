import { Divider } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import {
  Category,
  StoreDashboardSectionsEnum,
  ProductManagementDto,
} from "../../../../types";
import { Checkbox, Input, InputNumber, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ConfigurationsContainer } from "../components/ConfigurationsContainer";
import { ProductService } from "../../../../api";
import { useParams } from "react-router-dom";
import { productSchema } from "../../../../validations/product.validations";
import { z } from "zod";

interface AddProductSectionProps {
  categories: Category[];
  setSelectedSection: (section: StoreDashboardSectionsEnum) => void;
}

export const AddProductSection: React.FC<AddProductSectionProps> = ({
  categories,
  setSelectedSection,
}) => {
  const {id:storeId} = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    basePrice: 0,
    isAvailable: true,
    onDemand: false,
    stock: 0,
    stockEdge: 0,
    categoryId: null as number | null,
    modelUrl: "",
    is3dCustomizable: false,
    configurations: [
      {
        id: 0,
        name: "Default",
        allowsMultipleUnits: true,
        unitPriceImpact: 0,
        configurationAttributes: [],
      },
    ],
    mainImageUrl: "", // Add this new field
  });

  const updateProduct = (field: string, value: any) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  };

  // Add validation function
  const validateProduct = () => {
    try {
      productSchema.parse(product);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          message.error(`${err.path.join('.')}: ${err.message}`);
        });
      }
      return false;
    }
  };

  const handleSave = async () => {
    try {
      if (!validateProduct()) {
        return;
      }

      if (!product.categoryId) {
        message.error("Please select a category");
        return;
      }

      const productData: ProductManagementDto = {
        product: {
          id: 0,
          name: product.name,
          description: product.description,
          mainImageURL: "placeholder.jpg",
          basePrice: product.basePrice,
          stock: product.onDemand ? 0 : product.stock,
          stockEdge: product.onDemand ? 0 : product.stockEdge,
          needStock: !product.onDemand,
          isAvailable: product.isAvailable,
          model3dURL: product.modelUrl || null,
          is3dCustomizable: product.is3dCustomizable,
          defaultFeatures: true,
          rating: 0,
          numberOfReviews: 0,
          categoryId: product.categoryId,
        },
        storeId: Number(storeId),
        configurations: product.configurations,
        categoryId: product.categoryId,
      };

      const result = await ProductService.createProduct(productData);
      message.success("Product created successfully with ID: " + result);
      setSelectedSection(StoreDashboardSectionsEnum.Products);
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errors?.[0];
      message.error("Failed to create product: " + errorMessage);
    }
  };

  const handleAddNewCategory = () => {};

  return (
    <Container className="main">
      <ButtonsContainer
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <button
          className="cancel"
          onClick={() =>
            setSelectedSection(StoreDashboardSectionsEnum.Products)
          }
        >
          Cancel
        </button>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </ButtonsContainer>
      <ProductInfo>
        <h5>General Information</h5>
        <Divider style={{ border: "1px solid black", marginTop: "-0.5rem" }} />
        <div>
          <h6>Product name</h6>
          <Input
            placeholder="name"
            variant="filled"
            value={product.name}
            onChange={(e) => updateProduct("name", e.target.value)}
            count={{
              show: true,
              max: 40,
            }}
          />
        </div>
        <div>
          <h6>Product description</h6>
          <TextArea
            placeholder="description"
            variant="filled"
            value={product.description}
            onChange={(e) => updateProduct("description", e.target.value)}
            allowClear
            style={{ height: 100 }}
          />
        </div>
        <div>
          <h6>Base price $</h6>
          <InputNumber
            prefix="$"
            style={{ width: 120 }}
            variant="filled"
            value={product.basePrice}
            onChange={(value) => updateProduct("basePrice", value || 0)}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <h5>Stock & availability</h5>
          <Divider style={{ border: "1px solid black", marginTop: "0.5rem" }} />
          <div className="stock" style={{ marginTop: "0.5rem" }}>
            <Checkbox
              checked={product.isAvailable}
              onChange={(e) => updateProduct("isAvailable", e.target.checked)}
            >
              is available
            </Checkbox>
            <Checkbox
              checked={product.onDemand}
              onChange={(e) => updateProduct("onDemand", e.target.checked)}
            >
              made on demand
            </Checkbox>
          </div>
          {!product.onDemand && (
            <div className="stock" style={{ marginTop: "0.5rem" }}>
              <div>
                <p>stock</p>
                <InputNumber
                  placeholder="stock"
                  variant="filled"
                  value={product.stock}
                  onChange={(value) => updateProduct("stock", value || 0)}
                />
              </div>
              <div>
                <p>min stock</p>
                <InputNumber
                  placeholder="min stock"
                  variant="filled"
                  value={product.stockEdge}
                  onChange={(value) => updateProduct("stockEdge", value || 0)}
                />
              </div>
            </div>
          )}
        </div>
      </ProductInfo>
      <CategoryContainer>
        <h5>Product category</h5>
        <Divider style={{ border: "1px solid black", marginTop: "-0.5rem" }} />
        <div className="category-select">
          <p>Category</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            value={product.categoryId}
            onChange={(value) => updateProduct("categoryId", value)}
          />
          <button onClick={handleAddNewCategory}>New category</button>
        </div>
      </CategoryContainer>
      <ProductImages>
        <h5>Product images</h5>
        <div>
          <h6>Main image URL</h6>
          <Input
            placeholder="Main image URL"
            variant="filled"
            value={product.mainImageUrl}
            onChange={(e) => updateProduct("mainImageUrl", e.target.value)}
            style={{ width: 400 }}
          />
        </div>
      </ProductImages>
      <CustomizationSection>
        <h5>Customization</h5>
        <Divider style={{ border: "1px solid black", marginTop: "-0.5rem" }} />
        <div className="three-d-model">
          <div style={{ alignItems: "center", gap: "1rem" }}>
            <h6>3d model URL</h6>
            <Input
              placeholder="3d model url"
              variant="filled"
              style={{ width: 400 }}
              value={product.modelUrl}
              onChange={(e) => updateProduct("modelUrl", e.target.value)}
            />
          </div>
          <Checkbox
            style={{ height: "fit-content" }}
            checked={product.is3dCustomizable}
            onChange={(e) =>
              updateProduct("is3dCustomizable", e.target.checked)
            }
          >
            3d customization
          </Checkbox>
        </div>
        <ConfigurationsContainer
          configurations={product.configurations}
          onConfigurationsChange={(configs) =>
            updateProduct("configurations", configs)
          }
        />
      </CustomizationSection>
    </Container>
  );
};

const Container = styled.div`
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 0.3fr 0.8fr 2.5fr 4fr;
  grid-template-areas:
    "buttons buttons"
    "productInfo productCategory"
    "productInfo productImage"
    "customization customization";
  div {
    border-radius: 0.5rem;
  }
  h5 {
    margin: 0;
  }
`;

const ButtonsContainer = styled.div`
  gap: 0.5rem;
  grid-area: buttons;
  justify-content: flex-end;
  height: 60px !important;
  button {
    border-radius: 0.5rem;
    font-family: "Overlock", serif;
    width: 80px;
    border: none;
  }
  .save {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.5s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .cancel {
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.orange};
    }
  }
`;

const ProductInfo = styled.div`
  grid-area: productInfo;
  flex-direction: column;
  gap: 1rem;

  .stock {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "option1 option2";
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.1rem;
      p {
        margin-left: 0.2rem;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

const CategoryContainer = styled.div`
  grid-area: productCategory;
  flex-direction: column;
  gap: 1rem;

  .category-select {
    display: flex;
    gap: 0.5rem;
  }

  button {
    margin-left: auto;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.orange};
    font-family: "Overlock", serif;
    font-weight: 600;
    font-size: 0.85rem;
    border-radius: 0.5rem;
    transition: all 0.5s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

const ProductImages = styled.div`
  grid-area: productImage;
  flex-direction: column;
  gap: 1rem;
`;

const CustomizationSection = styled.div`
  grid-area: customization;
  flex-direction: column;
  gap: 1rem;
  div {
    display: flex;
  }
  .three-d-model {
    gap: 2rem;
  }
`;
