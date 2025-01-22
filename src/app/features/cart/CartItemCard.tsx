import styled from "styled-components";
import { CartItem } from "../../types";
import React from "react";
import { CartService } from "../../api";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../../assets/Icons/trash.jpg";
import messageIcon from "../../../assets/Icons/message.png";//messageIcon
import { useState } from "react";
import CardWriting from "../../components/Cake3D/CardWriting";
import { Modal as AntdModal } from "antd";
import previewIcon from "../../../assets/Icons/message.png"; // Preview icon
import ReviewModal from "./ReviewModal";

// TODO: view order details

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

const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 0.5rem;
  
  div {
    margin-left: auto;
  }
`;


// Add styles and constants as needed...

interface CartItemCardProps {
  item: CartItem;
  setSelectedItems: React.Dispatch<React.SetStateAction<Number[] | undefined>>;
  checkedItems?: Number[];
  setItems?: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleDeleteItem: (id: Number) => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  setSelectedItems,
  checkedItems = [],
  setItems,
  handleDeleteItem,
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

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
 console.log(item?.product?.basePrice);
  const openModal = () => setIsModalOpen(true); // Open modal
  const closeModal = () => setIsModalOpen(false); // Close modal
  console.log(item.details);
  return (
    <div>
      <ItemContainer>
        <ItemSection>
          <input
            type="checkbox"
            checked={checkedItems.includes(item.id)}
            onChange={() => {
              if (!checkedItems.includes(item.id)) {
                setSelectedItems((prev) => [...(prev || []), item.id]);
              } else {
                setSelectedItems((prev) =>
                  prev?.filter((id) => id !== item.id)
                );
              }
            }}
          />
          <ProductImage
            src={item?.product?.mainImageURL || "src/assets/shop-logo.png"}
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
            {item?.product?.basePrice}$ |{" "}
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
            <ProductLabel>{item.size}</ProductLabel>
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

              {/* Preview Icon Button */}
              <button
                onClick={openModal}
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                <img
                  src={previewIcon}
                  alt="Preview"
                  style={{ width: "55px", height: "45px" }}
                />
              </button>

              {/* Delete Icon */}
              <button
                onClick={() => handleDeleteItem(item.id)}
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                <img
                  src={deleteIcon}
                  alt="Delete"
                  style={{ width: "55px", height: "45px" }}
                />
              </button>
            </div>
          </ProductDetailsContainer>
        </ItemSection>
      </ItemContainer>

      {/* Modal for Preview */}
      {isModalOpen && (
        <ReviewModal
          isOpen={isModalOpen}
          onClose={closeModal}
          productName={item.product.name}
          price={item.product.basePrice}
          size={item.size}
          imageurl={item.product.mainImageURL}
          details={item.details} 
          quantity={quantity}       />
      )}
    </div>
  );
};

  
const ProductLabel = styled.label`
  font-size: 0.85rem;
  padding:0.3rem 0.6rem;
  font-weight: bold;
  border-radius: 15px;
  text-align: center;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray_light};
  box-shadow:  
              0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
`

const ItemContainer = styled.div`
  background-color: white;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 90vw;
    padding: 0.8rem;
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  background-color: rgb(188, 188, 188);
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
              0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
              0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.125) inset;
  @media (max-width: 780px) {
    width: 20vw;
    height: 20vw;
  }
`;

const ItemHeader = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #6a437c;
  }
  @media (max-width: 780px) {
    font-size: 0.95rem;
  }
`;

const QuantityButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(217, 217, 217, 0.5);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
              0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
              0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
  p {
    margin: 0;
    height: 30px;
    width: 50px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid rgb(174, 174, 174);
    border-right: 1px solid rgb(174, 174, 174);
  }

  button {
    border: none;
    background-color: #f5f5f5;
    color: #333;
    font-weight: bold;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }

    &:disabled {
      background-color: rgb(224, 224, 224);
      cursor: not-allowed;
    }
  }
`;

const Modal = styled(AntdModal)`
  .ant-modal-content {
    border-radius: 1rem;
  }

  .ant-modal-header {
    background-color: #6a437c;
    color: white;
    border-radius: 1rem 1rem 0 0;
  }

  .ant-modal-body {
    padding: 1.5rem;
  }

  .ant-modal-footer {
    border-top: 1px solid #f0f0f0;
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
  }
`;

// const LetterIcon = styled(MailIcon)`
//   color: #6a437c;
//   cursor: pointer;
//   transition: color 0.3s;

//   &:hover {
//     color: #4a2d5c;
//   }
// `;
