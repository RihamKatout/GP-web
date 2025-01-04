import { Button, Input } from "antd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartItemCard } from "../../components/common";
import styled from "styled-components";
import { CartItem } from "../../types";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { CartService } from "../../api";

// TODO: group items by store
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
  gap: 1rem;
  width: 60vw;
  overflow: hidden;
  background-color: rgb(221, 221, 221);
  border-radius: 0.6rem;
  padding: 1rem;
  @media (max-width: 1000px) {
    width: 90vw;
  }
  @media (max-width: 600px) {
    padding: 0;
    gap: 0.5rem;
  }
`;

const CartSummeryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30vw;
  max-width: 380px;
  background-color: #6a437c;
  border-radius: 0.6rem;
  padding: 1rem;
  @media (max-width: 780px) {
    width: 90vw;
  }
`;

const ClearButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 1200px) {
    flex-direction: column;
    button {
      width: 100% !important;
    }
  }
  @media (max-width: 1300px) {
    button {
      font-size: 0.8rem;
    }
  }
`;

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(221, 221, 221);
  background-color: white;
  padding: 2rem 3rem;
  text-align: center;
  border-radius: 0.6rem;
  gap: 1rem;
  div {
    width: 100%;
  }
  p {
    text-align: start;
  }
  .Option {
    display: flex;
    align-items: center;
    margin-top: -1.2rem;
    justify-content: space-between;
    p {
      color: rgb(156, 156, 156);
      font-size: 1rem;
    }
    h5 {
      font-size: 1.1rem;
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

  return (
    <CartContainer>
      {/* cart items */}
      <CartItemsContainer>
        {cartItems?.map((item: CartItem) => (
          <CartItemCard
            key={item.id}
            item={item}
            setSelectedItems={setSelectedItems}
            setItems={setItems}
            checkedItems={selectedItems || []}
          />
        ))}
      </CartItemsContainer>

      {/* cart summary */}
      <CartSummeryContainer>
        <ClearButtonsContainer>
          <Button
            onClick={handleDeleteSelectedItems}
            disabled={!selectedItems?.length}
            style={{ width: "50%" }}
          >
            <DeleteOutlineIcon />
            Remove selected items
          </Button>
          <Button onClick={handleClearCart} style={{ width: "50%" }}>
            <DeleteForeverIcon />
            Clear my cart
          </Button>
        </ClearButtonsContainer>
        <CheckoutContainer>
          <h3>Summary</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <Input type="text" placeholder="promo code" color="#6a437c" />
            <Button style={{ backgroundColor: "black", color: "white" }}>
              Apply
            </Button>
          </div>
          <h4 style={{ marginTop: "2rem" }}>
            {cartItems?.reduce(
              (total, item) =>
                selectedItems?.includes(item.id)
                  ? total + item.quantity
                  : total,
              0
            )}{" "}
            items
          </h4>
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
            <p>Delivery Service</p>
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
          <Button style={{ backgroundColor: "black", color: "white" }}>
            Pay
          </Button>
        </CheckoutContainer>
      </CartSummeryContainer>
    </CartContainer>
  );
};
