import React from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { CartItemDto } from "../../types";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: CartItemDto;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, item }) => {

  return (
    <Modal open={isOpen} onCancel={onClose} footer={null}>
      <ModalContent>
        <h3>Product Details</h3>
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
