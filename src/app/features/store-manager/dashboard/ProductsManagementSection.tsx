import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { DashboardCard } from "./StyledComponents";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { LowStock } from "./components/LowStock";
import { useState } from "react";
import { set } from "zod";

const ActiveProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 200,
    orders: 20,
    stock: 100,
    imageURL:
      "https://drive.google.com/thumbnail?id=1gMy5DYxIIIB5QSX0y4HTRwb-sL55INpc",
  },
  {
    id: 2,
    name: "Product 2",
    price: 300,
    orders: 30,
    stock: 200,
    imageURL:
      "https://drive.google.com/thumbnail?id=1gMy5DYxIIIB5QSX0y4HTRwb-sL55INpc",
  },
  {
    id: 3,
    name: "Product 3",
    price: 400,
    orders: 40,
    stock: 300,
    imageURL:
      "https://drive.google.com/thumbnail?id=1gMy5DYxIIIB5QSX0y4HTRwb-sL55INpc",
  },
  {
    id: 4,
    name: "Product 4",
    price: 500,
    orders: 50,
    stock: 400,
    imageURL:
      "https://drive.google.com/thumbnail?id=1gMy5DYxIIIB5QSX0y4HTRwb-sL55INpc",
  },
];

const ArchivedProducts = [
  {
    id: 2,
    name: "Product 2",
    price: 300,
    orders: 30,
    stock: 200,
    imageURL:
      "https://drive.google.com/thumbnail?id=1gMy5DYxIIIB5QSX0y4HTRwb-sL55INpc",
  },
  {
    id: 3,
    name: "Product 3",
    price: 400,
    orders: 40,
    stock: 300,
    imageURL:
      "https://drive.google.com/thumbnail?id=1gMy5DYxIIIB5QSX0y4HTRwb-sL55INpc",
  },
  {
    id: 4,
    name: "Product 4",
    price: 500,
    orders: 50,
    stock: 400,
    imageURL:
      "https://drive.google.com/thumbnail?id=1gMy5DYxIIIB5QSX0y4HTRwb-sL55INpc",
  },
];

export const ProductsManagementSection = () => {
  // true = active products, false = archived products
  const [productsType, setProductsType] = useState<boolean>(true);
  const [products, setProducts] = useState(ActiveProducts);

  const handleProductsTypeChange = () => {
    setProducts(productsType ? ArchivedProducts : ActiveProducts);
    setProductsType((prev) => !prev);
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
      <DashboardCard style={{ gridArea: "addProduct", cursor: "pointer" }}>
        <AddCircleIcon style={{ color: "green" }} />
        <h6>Add product</h6>
      </DashboardCard>
      <LowStock />
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
            Active
          </button>
          <button
            style={{
              backgroundColor: productsType ? "transparent" : "orange",
              fontWeight: !productsType ? "bold" : "normal",
              borderColor: productsType ? "orange" : "transparent",
            }}
            onClick={handleProductsTypeChange}
          >
            Archived
          </button>
        </div>
        <div className="products-list">
          <div
            className="product"
            style={{
              fontSize: "0.9rem",
              backgroundColor: "rgba(255, 140, 0, 0.3)",
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

          {products.map((product, index) => (
            <div key={product.id} className="product">
              <span>{index + 1}.</span>
              <img src={product.imageURL} alt="product" />
              <p>{product.name}</p>
              <p>{product.price} $</p>
              <p>{product.orders}</p>
              <p>{product.stock}</p>
              <EditIcon style={{ color: "gray" }} />
              <DeleteForeverIcon style={{ color: "red" }} />
            </div>
          ))}
        </div>
      </ProductsContainer>
    </Container>
  );
};

const Container = styled.div`
  grid-template-columns: 1fr 1fr 2.5fr 1.5fr;
  grid-template-rows: 1fr 7fr;
  grid-template-areas:
    "card1 addProduct none none"
    "products products products lowStock";
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
    }
  }
`;
