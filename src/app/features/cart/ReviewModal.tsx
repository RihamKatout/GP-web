import React from "react";
import styled from "styled-components";
import { Modal } from "antd";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  price: number;
  size: string;
  imageurl: string;
  details: string;
  quantity: number;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  productName,
  price,
  size,
  imageurl,
  quantity,
  details,
}) => {
  console.log("Details being :", details);

  return (
    <Modal open={isOpen} onCancel={onClose} footer={null}>
      <ModalContent>
        <h3>Product Details</h3>
        <img src={imageurl} alt="product" style={{ width: "100px" }} />
        <p>
          <b>Name:</b> {productName}
        </p>
        <p>
          <b>Price:</b> {price}$
        </p>
        <p>
          <b>Size:</b> {size}
        </p>
        <p>
          <b>Quantity:</b> {quantity}
        </p>
        <p>
          {/* <b>Stock:</b> {stock} */}
        </p>
        <h3>Preview Message</h3>
      <p>{details || "No message provided."}</p>
      </ModalContent>
    </Modal>
  );
};

export default ReviewModal;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #6a437c;
  }
  p {
    margin: 0;
    font-size: 1rem;
    color: #333;
    word-wrap: break-word;
  }
`;
