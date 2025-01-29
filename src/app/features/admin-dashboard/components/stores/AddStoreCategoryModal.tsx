import React, { useEffect } from "react";
import { CustomModal } from "../../../../components/common";
import styled from "styled-components";

interface AddStoreCategoryModalProps {
  open: boolean;
  onClose: () => void;
  actionHandler: (
    categoryId: number,
    categoryName: string,
    imageurl: string
  ) => void;
  type: "add" | "edit";
  editInfo?: {
    categoryNameToEdit: string;
    categoryId: number;
  };
}

// TODO: add image upload
export const AddStoreCategoryModal: React.FC<AddStoreCategoryModalProps> = ({
  open,
  type,
  onClose,
  actionHandler,
  editInfo,
}) => {
  const [categoryName, setCategoryName] = React.useState(
    editInfo?.categoryNameToEdit || ""
  );
  useEffect(() => {
    setCategoryName(editInfo?.categoryNameToEdit || "");
    return () => {
      setCategoryName("");
    };
  }, [open]);

  return (
    <CustomModal open={open} onClose={onClose}>
      <Container>
        {type === "add" ? <h4>Add Category</h4> : <h4>Edit Category</h4>}
        <InputGroup>
          <p>Category name</p>
          <input
            type="text"
            onChange={(e) => setCategoryName(e.target.value)}
            value={categoryName}
            placeholder={categoryName || "Category name"}
          />
        </InputGroup>
        <ButtonsContainer>
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={() => {
              actionHandler(editInfo?.categoryId || 0, categoryName, "");
            }}
          >
            Save
          </button>
        </ButtonsContainer>
      </Container>
    </CustomModal>
  );
};

const Container = styled.div`
  gap: 1rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  h4 {
    margin: 0;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
    font-family: "Poppins", sans-serif;
  }
`;

const InputGroup = styled.div`
  gap: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    font-weight: bold;
  }
  input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

const ButtonsContainer = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  button {
    width: 50%;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border- radius: 5px;
    padding: 0.5rem 1rem;
  }
  button:nth-child(1) {
    background-color: #ccc;
  }
  button:nth-child(2) {
    background-color: ${(props) => props.theme.colors.orange};
    color: white;
  }
`;
