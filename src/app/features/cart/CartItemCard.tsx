import React, { useEffect } from "react";
import { useState } from "react";
import { Popconfirm } from "antd";
import styled from "styled-components";
import { CartItemDetails } from "./CartItemDetails";
import { CartItemDto } from "../../types";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../../assets/Icons/trash.jpg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CartService } from "../../api";

interface CartItemCardProps {
  item: CartItemDto;
  setSelectedItems: React.Dispatch<React.SetStateAction<Number[] | undefined>>;
  checkedItems?: Number[];
  setItems?: React.Dispatch<React.SetStateAction<CartItemDto[]>>;
  handleDeleteItem: (id: Number) => void;
  setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  setSelectedItems,
  checkedItems = [],
  setItems,
  handleDeleteItem,
  setTotalPrice,
}) => {
  const { cartItem, configurations } = item;
  const { product } = cartItem;
  const navigate = useNavigate();
  const openModal = () => setIsModalOpen(true);
  const [price, setPrice] = useState<number>(0);
  const closeModal = () => setIsModalOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(item.cartItem.quantity);

  const handleQuantityChange = async (value: number) => {
    if (value > 0) {
      const updatedItem = await CartService.updateQuantity(
        item.cartItem.id,
        value
      );
      if (checkedItems.includes(cartItem.id)) {
        setTotalPrice &&
          setTotalPrice((prev) => prev - price * quantity + price * value);
      }
      setQuantity(value);
      if (setItems) {
        setItems((prev) => {
          if (prev) {
            const index = prev.findIndex(
              (i) => i.cartItem.id === item.cartItem.id
            );
            prev[index].cartItem = updatedItem.data;
            return [...prev];
          }
          return prev;
        });
      }
    }
  };

  useEffect(() => {
    const priceSummation = cartItem.configurationInstances?.reduce(
      (acc, configInst) => {
        const configuration = configurations?.find(
          (config) => config.id === configInst.configurationId
        );
        configInst?.choices?.forEach((choice) => {
          const priceImpact = configuration?.configurationAttributes
            ?.find((attr) => attr.id === choice.attributeId)
            ?.choices?.find((ch) => ch.name === choice.choiceName)?.priceImpact;
          acc += priceImpact || 0;
        });
        return acc;
      },
      0
    );
    setPrice(priceSummation + product.basePrice);
  }, [item.cartItem]);

  return (
    <div>
      {isModalOpen && (
        <CartItemDetails
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          cartItemDto={item}
        />
      )}
      <ItemContainer>
        <input
          type="checkbox"
          checked={checkedItems.includes(cartItem.id)}
          onChange={() => {
            if (!checkedItems.includes(cartItem.id)) {
              setTotalPrice &&
                setTotalPrice((prev) => (prev || 0) + price * quantity);
              setSelectedItems((prev) => [...(prev || []), cartItem.id]);
            } else {
              setTotalPrice &&
                setTotalPrice((prev) => (prev || 0) - price * quantity);
              setSelectedItems((prev) =>
                prev?.filter((id) => id !== cartItem.id)
              );
            }
          }}
        />
        <ProductImage
          src={product?.mainImageURL || "src/assets/shop-logo.png"}
        />
        <ProductDetailsContainer>
          <div>
            <ItemHeader
              onClick={() => navigate(`/product/${product?.id}`)}
              style={{ cursor: "pointer" }}
            >
              {product?.name}
            </ItemHeader>
            <p>
              {" "}
              -- &nbsp;
              {!product?.isAvailable ? (
                <span style={{ color: "red" }}>unavailable</span>
              ) : (product?.stock !== 0 &&
                  product?.stock >= cartItem.quantity) ||
                !product?.needStock ? (
                <span style={{ color: "green" }}>available</span>
              ) : (
                <span style={{ color: "red" }}>out of stock</span>
              )}
            </p>
          </div>
          {/* preview item */}
          <button onClick={openModal} className="preview">
            View details
          </button>
        </ProductDetailsContainer>
        <ItemSection>
          <p className="price">{price} $</p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <QuantityButtonsContainer>
              <button
                onClick={() => handleQuantityChange(cartItem.quantity - 1)}
                disabled={cartItem.quantity === 1}
              >
                -
              </button>
              <p style={{ margin: "0" }}>{cartItem.quantity}</p>
              <button
                onClick={() => handleQuantityChange(cartItem.quantity + 1)}
              >
                +
              </button>
            </QuantityButtonsContainer>

            <DeleteIcon>
              <Popconfirm
                title="Remove item"
                description="Are you sure to remove this item?"
                icon={<ErrorOutlineIcon style={{ color: "red" }} />}
                onConfirm={() => handleDeleteItem(cartItem.id)}
                okText="Yes"
                cancelText="No"
              >
                <img src={deleteIcon} alt="Delete" />
              </Popconfirm>
            </DeleteIcon>
          </div>
        </ItemSection>
      </ItemContainer>
    </div>
  );
};

const ItemContainer = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  padding: 1rem;
  overflow: hidden;
  background-color: white;
  height: 120px !important;
  align-items: center;
  border-bottom: 1px solid rgb(224, 224, 224);
  @media (max-width: 600px) {
    width: 90vw;
    padding: 0.8rem;
  }
  p {
    margin: 0;
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  padding: 0.35rem;
  object-fit: fill;
  border-radius: 0.5rem;
  background-color: rgb(230, 230, 230);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

const ItemHeader = styled.p`
  margin: 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary_dark};
  }
`;

const QuantityButtonsContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  p {
    width: 30px;
    height: 25px;
    display: flex;
    font-size: 0.85rem;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgb(174, 174, 174);
    border-right: 1px solid rgb(174, 174, 174);
  }
  button {
    width: 25px;
    border: none;
    height: 25px;
    font-weight: bold;
    background-color: #f5f5f5;
    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.colors.primary_dark};
    }
    &:disabled {
      cursor: not-allowed;
      background-color: rgb(224, 224, 224);
    }
  }
`;

const ItemSection = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  .price {
    font-size: 1.2rem;
  }
`;

const ProductDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .preview {
    border: none;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary_dark};
    font-size: 0.8rem;
    font-family: "Overlock", sans-serif;
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const DeleteIcon = styled.div`
  img {
    width: 25px;
    height: 30px;
    cursor: pointer;
  }
`;
