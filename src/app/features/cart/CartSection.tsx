import { Button, Input } from "antd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartItemCard } from "..";
import styled from "styled-components";
import { CartItem } from "../../types";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { CartService } from "../../api";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

// handle payment
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
  display: flex;
  flex-direction: column;
  width: 60vw;
  overflow: hidden;
  border-radius: 0.6rem;
  border: 2px solid #6a437c;
  @media (max-width: 1000px) {
    width: 90vw;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
  .store-group {
    border-radius: 0.6rem;
    h5 {
      padding: 0.7rem 1rem;
      margin: 0;
      color: white;
      background-color: #6a437c;
      cursor: pointer;
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
  display: flex;
  flex-direction: column;
  background-color: #;
  border: 2px solid #6a437c;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 0.6rem;
  gap: 0.5rem;
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
`;

interface CartSectionProps {
  cartItems: CartItem[];
  setItems?: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartSection: React.FC<CartSectionProps> = ({
  cartItems,
  setItems,
}) => {
  const queryClient = useQueryClient();
  const [selectedItems, setSelectedItems] = useState<Number[] | undefined>(
    undefined
  );
  const navigate = useNavigate();
  useEffect(() => {
    scrollTo(0, 0);
    setSelectedItems(undefined);
  }, []);

  const handleDeleteSelectedItems = async () => {
    if (
      window.confirm(
        "Are you sure you want to remove selected items from cart?"
      )
    ) {
      if (!selectedItems) return;
      console.log(selectedItems);
      await CartService.deleteItems(selectedItems);
      queryClient.invalidateQueries(["cart"]);
      setSelectedItems(undefined);
    }
  };

  const handleClearCart = async () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      await CartService.clearCart();
      queryClient.invalidateQueries(["cart"]);
    }
  };

  const handleDeleteItem = async (id: Number) => {
    if (window.confirm("Are you sure you want to remove item from your cart?")) {
      await CartService.deleteItem(id);
      queryClient.invalidateQueries(["cart"]);
    }
  }
  const groupedItems = cartItems?.reduce(
    (
      acc: Record<
        string,
        { storeId: number; storeName: string; items: CartItem[] }
      >,
      item: CartItem
    ) => {
      const storeId = item.storeId;
      const storeName = item.storeName;

      if (!acc[storeId]) {
        acc[storeId] = {
          storeId,
          storeName,
          items: [],
        };
      }

      acc[storeId].items.push(item);
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
              <h5 onClick={() => navigate(`/store/${storeId}`)}>{storeName}</h5>
              {items.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  setSelectedItems={setSelectedItems}
                  setItems={setItems}
                  checkedItems={selectedItems || []}
                  handleDeleteItem={handleDeleteItem}
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
          <h5>
            {cartItems?.reduce(
              (total, item) =>
                selectedItems?.includes(item.id)
                  ? total + item.product.price * item.quantity
                  : total,
              0
            )}
            $
          </h5>
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
          <h5>
            {cartItems?.reduce(
              (total, item) =>
                selectedItems?.includes(item.id)
                  ? total + item.product.price * item.quantity
                  : total,
              0
            )}
            $
          </h5>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <Input type="text" placeholder="promo code" color="#6a437c" />
          <Button style={{ backgroundColor: "#6a437c", color: "white" }}>
            Apply
          </Button>
        </div>
        <Button style={{ backgroundColor: "#6a437c", color: "white" }}>
          Pay
        </Button>
        <ClearButtonsContainer>
          {selectedItems?.length ? (
            <Button
              onClick={handleDeleteSelectedItems}
              disabled={!selectedItems?.length}
            >
              <DeleteOutlineIcon />
              Remove selected items
            </Button>
          ) : (
            <></>
          )}
          <Button
            onClick={handleClearCart}
            style={{ width: !selectedItems?.length ? "100%" : "50%" }}
          >
            <DeleteForeverIcon />
            Clear my cart
          </Button>
        </ClearButtonsContainer>
      </CheckoutContainer>
    </CartContainer>
  );
};
