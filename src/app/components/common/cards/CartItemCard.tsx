import styled from "styled-components";
import { CartItem } from "../../../types";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CartService } from "../../../api";

// TODO: for mobile: fix item header
const ItemContainer = styled.div`
  // background: linear-gradient(90deg, rgb(216, 249, 225), rgb(235, 213, 245));
  background-color: white;
  display: flex;
  gap: 1rem;
  padding: 0.8rem;
  width: 100%;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const ItemSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:nth-child(1) {
    gap: 1rem;
    flex-direction: row;
    align-items: center;
  }
  &:nth-child(3) {
    gap: 0.5rem;
    margin-left: auto;
    margin-right: 0.5rem;
    align-items: flex-end;
    justify-content: flex-end;
  }
  @media (max-width: 780px) {
    overflow: visible;
    &:nth-child(1) {
      gap: 0.5rem;
    }
  }
`;

const ProductImage = styled.img`
  width: 8vw;
  height: 8vw;
  @media (max-width: 780px) {
    width: 20vw;
    height: 20vw;
  }
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 0.4rem;
  p {
    color: rgb(97, 97, 97);
    padding: 0;
    margin: 0.2rem 0;
  }
  @media (max-width: 780px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

const ItemHeader = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  @media (max-width: 780px) {
    font-size: 0.9rem;
  }
`;

const QuantityButton = styled.button`
  border: none;
  color: white;
  background-color: #6a437c;
  border-radius: 3px;
  font-weight: bold;
  width: 26px;
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
        <ItemHeader>{item?.product?.name}</ItemHeader>
        <ProductDetailsContainer>
          <p>
            {item?.product?.price}$ -{" "}
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
          <p>size: {item.size.toLowerCase()}</p>
          <p>order details</p>
        </ProductDetailsContainer>
      </ItemSection>

      <ItemSection>
        <DeleteOutlineIcon
          sx={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDeleteItem(item.id)}
        />
        <ItemHeader>
          Total: {(item?.product?.price || 0) * quantity}$
        </ItemHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "0.3rem",
          }}
        >
          <QuantityButton
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </QuantityButton>
          <p style={{ margin: "0" }}>{quantity}</p>
          <QuantityButton onClick={() => handleQuantityChange(quantity + 1)}>
            +
          </QuantityButton>
        </div>
      </ItemSection>
    </ItemContainer>
  );
};
