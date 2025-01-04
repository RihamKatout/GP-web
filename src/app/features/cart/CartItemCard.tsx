import styled from "styled-components";
import { CartItem } from "../../types";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartService } from "../../api";
import { useNavigate } from "react-router-dom";

// TODO: view order details
const ItemContainer = styled.div`
  background-color: white;
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0.8rem 1rem 0.8rem;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid rgb(224, 224, 224);
  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const ItemSection = styled.div`
  display: flex;
  justify-content: center;
  &:nth-child(1) {
    gap: 0.5rem;
    align-items: center;
  }
  &:nth-child(2) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

const ProductImage = styled.img`
  width: 6vw;
  height: 6vw;
  background-color: rgb(188, 188, 188);
  @media (max-width: 780px) {
    width: 20vw;
    height: 20vw;
  }
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 0.5rem;
  label {
    font-size: 0.85rem;
    padding: 0.1rem 0.5rem;
    border-radius: 0.2rem;
    background-color: rgb(228, 228, 228);
  }
  div {
    margin-left: auto;
  }
`;

const ItemHeader = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.3rem;
  @media (max-width: 780px) {
    font-size: 0.9rem;
  }
`;

const QuantityButtonsContainer = styled.button`
  display: flex;
  border: 1px solid rgb(174, 174, 174);
  color: black;
  border-radius: 0.6rem;
  padding: 0;
  p {
    height: 25px;
    width: 50px;
    font-size: 0.9rem;
    border-left: 1px solid rgb(174, 174, 174);
    border-right: 1px solid rgb(174, 174, 174);
    align-content: center;
  }
  button {
    border: none;
    font-weight: bold;
    width: 25px;
    height: 25px;
    background-color: transparent;
  }
`;

interface CartItemCardProps {
  item: CartItem;
  setSelectedItems: React.Dispatch<React.SetStateAction<Number[] | undefined>>;
  checkedItems?: Number[];
  setItems?: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  setSelectedItems,
  checkedItems = [],
  setItems,
}) => {
  const [quantity, setQuantity] = React.useState(item.quantity);
  const navigate = useNavigate();
  const handleDeleteItem = async (id: Number) => {
    if (
      window.confirm("Are you sure you want to remove item from your cart?")
    ) {
      await CartService.deleteItem(id);
      if (setItems) {
        setItems((prev) => {
          if (prev) {
            return prev.filter((i) => i.id !== id);
          }
          return prev;
        });
      }
      setSelectedItems(undefined);
    }
  };

  const handleQuantityChange = async (value: number) => {
    if (value > 0) {
      const updatedItem = await CartService.updateQuantity(item.id, value);
      setQuantity(value);
      if (setItems) {
        setItems((prev) => {
          if (prev) {
            const index = prev.findIndex((i) => i.id === item.id);
            prev[index] = updatedItem.data;
            return [...prev];
          }
          return prev;
        });
      }
    }
  };

  return (
    <ItemContainer>
      <ItemSection>
        <input
          type="checkbox"
          checked={checkedItems.includes(item.id)}
          onChange={() => {
            if (!checkedItems.includes(item.id)) {
              setSelectedItems((prev) => [...(prev || []), item.id]);
            } else {
              setSelectedItems((prev) => prev?.filter((id) => id !== item.id));
            }
          }}
        />
        <ProductImage
          src={item?.product?.imageurl || "src/assets/shop-logo.png"}
        />
      </ItemSection>

      <ItemSection>
        <ItemHeader
          onClick={() => navigate(`/product/${item?.product?.id}`)}
          style={{ cursor: "pointer" }}
        >
          {item?.product?.name}
        </ItemHeader>
        <p>
          {item?.product?.price}$ |{" "}
          <span style={{ fontWeight: "bold" }}>
            {!item?.product?.isAvailable ? (
              <span style={{ color: "red" }}>unavailable</span>
            ) : item?.product?.stock !== 0 &&
              item?.product?.stock >= quantity ? (
              <span style={{ color: "green" }}>in stock</span>
            ) : (
              <span style={{ color: "red" }}>out of stock</span>
            )}
          </span>
        </p>
        <ProductDetailsContainer>
          <label>{item.size}</label>
          <label style={{ cursor: "pointer" }}>order details</label>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <QuantityButtonsContainer>
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity === 1}
              >
                -
              </button>
              <p style={{ margin: "0" }}>{quantity}</p>
              <button onClick={() => handleQuantityChange(quantity + 1)}>
                +
              </button>
            </QuantityButtonsContainer>
            <DeleteIcon
              sx={{ color: "rgb(235, 83, 83)", cursor: "pointer" }}
              onClick={() => handleDeleteItem(item.id)}
            />
          </div>
        </ProductDetailsContainer>
      </ItemSection>
    </ItemContainer>
  );
};
