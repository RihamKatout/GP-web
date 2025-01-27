import { CartItemCard } from "..";
import styled from "styled-components";
import { CartService } from "../../api";
import { Divider } from "@mui/material";
import { CartItemDto } from "../../types";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button, Input, Popconfirm } from "antd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// TODO: handle payment
interface CartSectionProps {
  cartItems: CartItemDto[];
  setItems?: React.Dispatch<React.SetStateAction<CartItemDto[]>>;
}

export const CartSection: React.FC<CartSectionProps> = ({
  cartItems,
  setItems,
}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [selectedItems, setSelectedItems] = useState<Number[] | undefined>(
    undefined
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    scrollTo(0, 0);
    setSelectedItems(undefined);
  }, []);

  const handleDeleteSelectedItems = async () => {
    if (!selectedItems) return;
    await CartService.deleteItems(selectedItems);
    queryClient.invalidateQueries(["cart"]);
    setSelectedItems(undefined);
    setTotalPrice(0);
  };

  const handleClearCart = async () => {
    await CartService.clearCart();
    queryClient.invalidateQueries(["cart"]);
  };

  const handleDeleteItem = async (id: Number) => {
    await CartService.deleteItem(id);
    queryClient.invalidateQueries(["cart"]);
  };

  const groupedItems = cartItems?.reduce(
    (
      acc: Record<
        string,
        { storeId: number; storeName: string; items: CartItemDto[] }
      >,
      itemDto: CartItemDto
    ) => {
      const storeId = itemDto.cartItem.storeId;
      const storeName = itemDto.cartItem.storeName;

      if (!acc[storeId]) {
        acc[storeId] = {
          storeId,
          storeName,
          items: [],
        };
      }

      acc[storeId].items.push(itemDto);
      return acc;
    },
    {}
  );

  return (
    <CartContainer>
      {/* cart items */}
      <CartItemsContainer>
        {groupedItems &&
          Object.values(groupedItems).map(({ storeId, storeName, items }) => (
            <div key={storeId} className="store-group">
              <h3 onClick={() => navigate(`/store/${storeId}`)}>{storeName}</h3>
              {items.map((item) => (
                <CartItemCard
                  key={item.cartItem.id}
                  item={item}
                  setSelectedItems={setSelectedItems}
                  setItems={setItems}
                  checkedItems={selectedItems || []}
                  handleDeleteItem={handleDeleteItem}
                  setTotalPrice={setTotalPrice}
                />
              ))}
            </div>
          ))}
      </CartItemsContainer>

      {/* cart summary */}
      <CheckoutContainer>
        <h3 style={{ fontWeight: "bold" }}>Summary</h3>
        <Divider
          style={{
            backgroundColor: "black",
            border: "1px solid black",
            marginBottom: "1rem",
          }}
        />
        <div className="Option">
          <p>Subtotal</p>
          <h5>{totalPrice}$</h5>
        </div>
        <div className="Option">
          <p>Discount</p>
          <h5>- $</h5>
        </div>
        <div className="Option">
          <p>Delivery Service</p>
          <h5>- $</h5>
        </div>
        <div className="Option">
          <p style={{ color: "black", fontWeight: "bold", fontSize: "1.1rem" }}>
            Total
          </p>
          <h5>{totalPrice}$</h5>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <Input
            type="text"
            placeholder="promo code"
            color="${({ theme }) => theme.colors.secondary};"
          />
          <Button className="dark-button">Apply</Button>
        </div>
        <Button className="dark-button">Pay</Button>
        <ClearButtonsContainer>
          {selectedItems?.length ? (
            <Button disabled={!selectedItems?.length}>
              <Popconfirm
                title="Remove selected items"
                description="Are you sure to remove selected items?"
                icon={<ErrorOutlineIcon style={{ color: "red" }} />}
                onConfirm={handleDeleteSelectedItems}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlineIcon />
                Remove selected items
              </Popconfirm>
            </Button>
          ) : (
            <></>
          )}
          <Button style={{ width: !selectedItems?.length ? "100%" : "50%" }}>
            <Popconfirm
              title="Clear cart"
              description="Are you sure to clear your cart?"
              icon={<ErrorOutlineIcon style={{ color: "red" }} />}
              onConfirm={handleClearCart}
              okText="Yes"
              cancelText="No"
            >
              <DeleteForeverIcon />
              Clear my cart
            </Popconfirm>
          </Button>
        </ClearButtonsContainer>
      </CheckoutContainer>
    </CartContainer>
  );
};
const CartContainer = styled.div`
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CartItemsContainer = styled.div`
  width: 60vw;
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  @media (max-width: 1000px) {
    width: 90vw;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
  .store-group {
    h3 {
      margin: 0;
      color: white;
      cursor: pointer;
      font-weight: bold;
      padding: 0.7rem 1rem;
      font-family: "Overlock", sans-serif;
      background-color: ${({ theme }) => theme.colors.secondary_dark};
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ClearButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  button {
    width: 50%;
    font-size: 0.8rem;
    color: white;
    background-color: rgb(255, 36, 36);
    border: none;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    button {
      width: 100% !important;
    }
  }
`;

const CheckoutContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  max-width: 450px;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 0.5rem;
  flex-direction: column;
  background-color: #ffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  div {
    width: 100%;
  }
  p {
    text-align: start;
  }
  .Option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: rgb(118, 118, 118);
      font-size: 1rem;
      margin: 0;
    }
    h5 {
      font-size: 1.1rem;
      margin: 0;
    }
  }
  .dark-button {
    color: white;
    background-color: ${({ theme }) => theme.colors.secondary_dark};
  }
`;
