import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { DashboardCard } from "./StyledComponents";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { LowStock } from "./components/LowStock";
import React, { useEffect, useState } from "react";
import { Category, Product, ProductFilters } from "../../../types";
import { useQuery } from "react-query";
import { ProductService, StoreCategoryService } from "../../../api";
import { Popconfirm } from "antd";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
interface ProductsManagementSectionProps {
  lowStock: Product[];
  storeId: number;
  storeCategoryId: number;
  handleOpenProduct: (productId: number) => void;
}

export const ProductsManagementSection: React.FC<
  ProductsManagementSectionProps
> = ({ lowStock, storeId, storeCategoryId, handleOpenProduct }) => {
  // true = active products, false = archived products
  const [productsType, setProductsType] = useState<boolean>(true);
  const [activeProducts, setActiveProducts] = useState<Product[]>([]);
  const [archivedProducts, setArchivedProducts] = useState<Product[]>([]);
  const [productsToDisplay, setProductsToDisplay] = useState<Product[]>([]);
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    let tmpProducts = productsType ? activeProducts : archivedProducts;
    if (categoryId) {
      setProductsToDisplay(
        tmpProducts.filter((product) => product.categoryId === categoryId)
      );
    } else setProductsToDisplay(tmpProducts);
  }, [productsType, categoryId, activeProducts, archivedProducts]);
  const handleProductsTypeChange = () => {
    setProductsType((prev) => !prev);
  };

  const filters: ProductFilters = {
    storeId: storeId,
    page: 0,
    size: 20,
  };

  // fetch store products
  useQuery(["products", storeId], () => ProductService.fetchProducts(filters), {
    keepPreviousData: true,
    onSuccess: (data) => {
      setActiveProducts(data.content.filter((product) => product.isAvailable));
      setArchivedProducts(
        data.content.filter((product) => !product.isAvailable)
      );
      scrollTo({ top: 0, behavior: "smooth" });
    },
    refetchOnWindowFocus: false,
  });

  // fetch store categories
  useQuery(
    ["categories", storeId],
    () => StoreCategoryService.getStoreCategoryById(storeCategoryId),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setCategories(data.data.productCategories);
      },
      refetchOnWindowFocus: false,
    }
  );

  const handleCategoryChange = (categoryId: string) => {
    setCategoryId(Number(categoryId));
  };

  //TODO: show success or error message
  const handleDeleteProduct = async (productId: number) => {
    try {
      await ProductService.deleteProduct(productId);
      setActiveProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      setArchivedProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      console.log("Product deleted successfully!");
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <Container className="main">
      <DashboardCard style={{ gridArea: "card1" }}>
        <Inventory2Icon />
        <div>
          <h6>Total products</h6>
          <p>200</p>
        </div>
      </DashboardCard>
      <div
        className="addProduct"
        style={{ boxShadow: "none", backgroundColor: "transparent" }}
      >
        <AddCircleIcon style={{ color: "green" }} />
        <h6>Add product</h6>
      </div>
      <LowStock lowStock={lowStock} handleOpenProduct={handleOpenProduct} />
      <ProductsContainer>
        <div className="products-header">
          <button
            style={{
              backgroundColor: productsType ? "orange" : "transparent",
              fontWeight: productsType ? "bold" : "normal",
              borderColor: !productsType ? "orange" : "transparent",
            }}
            onClick={handleProductsTypeChange}
          >
            Active ({activeProducts.length})
          </button>
          <button
            style={{
              backgroundColor: productsType ? "transparent" : "orange",
              fontWeight: !productsType ? "bold" : "normal",
              borderColor: productsType ? "orange" : "transparent",
            }}
            onClick={handleProductsTypeChange}
          >
            Archived ({archivedProducts.length})
          </button>
          <div className="category-filter">
            <p>Category</p>
            <CategorySelect
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value={undefined}>All</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </CategorySelect>
          </div>
        </div>
        <div className="products-list">
          <div
            className="product"
            style={{
              fontSize: "0.9rem",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
              padding: "0.2rem",
            }}
          >
            <p>#</p>
            <p>Image</p>
            <p>Name</p>
            <p>Price</p>
            <p>Orders</p>
            <p>Stock</p>
          </div>

          {productsToDisplay.map((product, index) => (
            <div key={product.id} className="product">
              <span>{index + 1}.</span>
              <img src={product.imageurl} alt="product" />
              <p
                className="productName"
                onClick={() => handleOpenProduct(product.id)}
              >
                {product.name}
              </p>
              <p>{product.price} $</p>
              {/* <p>{product.orders}</p> */}
              <p>200</p>
              <p>{product.stock}</p>
              <EditIcon style={{ color: "gray" }} />
              <Popconfirm
                title="Delete product"
                description="Are you sure to delete this product?"
                icon={<ErrorOutlineIcon style={{ color: "red" }} />}
                onConfirm={() => handleDeleteProduct(product.id)}
                okText="Yes"
                cancelText="No"
              >
                <DeleteForeverIcon style={{ color: "red" }} />
              </Popconfirm>
            </div>
          ))}
        </div>
      </ProductsContainer>
    </Container>
  );
};

const Container = styled.div`
  grid-template-columns: 1fr 1fr 2.5fr 1.5fr;
  grid-template-rows: 1fr 3.5fr 3.5fr;
  grid-template-areas:
    "card1 addProduct none none"
    "products products products lowStock"
    "products products products topProducts";
  .addProduct {
    grid-area: addProduct;
    h6 {
      margin: 0;
      color: ${({ theme }) => theme.colors.secondary_dark};
    }
    svg {
      font-size: 1.7rem;
      color: ${({ theme }) => theme.colors.success};
    }
  }
  .category-filter {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 0.5rem;
    p {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  grid-area: products;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .products-header {
    width: 100%;
    gap: 0.5rem;
    display: flex;
    margin-bottom: 0.5rem;
    justify-content: flex-start;
    button {
      border-radius: 0.5rem;
      border: ${({ theme }) => "2px solid " + theme.colors.orange};
      padding: 0.3rem 0.5rem;
      font-size: 0.8rem;
    }
  }

  .products-list {
    width: 100%;
    height: 100%;
    max-height: 70vh;
    overflow-y: scroll;
    .product {
      display: grid;
      grid-template-columns: 0.2fr 0.4fr 2fr 1fr 1fr 1fr 0.2fr 0.2fr;
      gap: 0.5rem;
      grid-template-rows: 1fr;
      width: 100%;
      align-items: center;
      padding: 0.5rem 0.2rem;
      span {
        color: ${({ theme }) => theme.colors.black};
        font-weight: bold;
        margin-right: 0.5rem;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.1);
      }
      svg {
        cursor: pointer;
      }
      .productName {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const CategorySelect = styled("select")({
  padding: "0.1rem",
  borderRadius: "0.5rem",
  border: "2px solid #1b1a1a",
});
