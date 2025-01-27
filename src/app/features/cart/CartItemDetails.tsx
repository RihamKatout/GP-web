import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { CartItemDto, ConfigurationInstance } from "../../types";
import { ProductConfiguration } from "../products";
import { CustomModal, CustomSnackbar } from "../../components/common";
import { CartService } from "../../api";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
interface CartItemDetailsProps {
  cartItemDto: CartItemDto;
  isModalOpen: boolean;
  closeModal: () => void;
  status?: "view" | "add" | "edit";
}

const pricesReducer = (state: number, action: any) => {
  switch (action.type) {
    case "ADD_PRICE_IMPACT":
      return state + action.priceImpact;
    case "REMOVE_PRICE_IMPACT":
      return state - action.priceImpact;
    case "RESET_PRICE":
      return action.basePrice;
    default:
      return state;
  }
};

export const CartItemDetails: React.FC<CartItemDetailsProps> = ({
  cartItemDto,
  isModalOpen,
  closeModal,
  status,
}) => {
  const [currentStatus, setCurrentStatus] = useState<"view" | "add" | "edit">(
    status || "view"
  );
  const [selectedChoices, setSelectedChoices] = useState<
    ConfigurationInstance[]
  >(cartItemDto.cartItem.configurationInstances);
  const { configurations } = cartItemDto;
  const { product, configurationInstances } = cartItemDto.cartItem;
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarInfo, setSnackbarInfo] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "info";
  }>({ message: "", type: "success" });
  const [price, dispatchPrices] = useReducer(pricesReducer, product.basePrice);
  const isAvailable =
    (product?.isAvailable && product?.stock > 0) || !product.needStock;

  const [formData, setFormData] = useState({
    message: cartItemDto?.cartItem?.message || "",
    details: cartItemDto?.cartItem?.details || "",
    quantity: cartItemDto?.cartItem?.quantity || 1,
  });

  const handleDeleteConfigInstance = (instanceId: number, configId: number) => {
    const configInstancesCount = selectedChoices.filter(
      (instance) => instance.configurationId === configId
    ).length;

    if (configInstancesCount === 1) {
      setSnackbarInfo({
        message: "You must have at least one instance of this configuration",
        type: "error",
      });
      setIsSnackbarOpen(true);
      return;
    }

    setSelectedChoices((prev) =>
      prev.filter((instance) => instance.id !== instanceId)
    );
  };

  const handleUpdate = async () => {
    try {
      const tmpCartItem = {
        ...cartItemDto.cartItem,
        ...formData,
        configurationInstances: selectedChoices,
      };
      const response = await CartService.updateItem(
        cartItemDto.cartItem.id,
        tmpCartItem
      );
      if (response.status === 200) {
        cartItemDto.cartItem = tmpCartItem;
        setCurrentStatus("view");
        setSnackbarInfo({
          message: "Cart item updated successfully",
          type: "success",
        });
        setIsSnackbarOpen(true);
      }
    } catch (e) {
      // TODO: show error message
      console.error(e);
    }
  };

  const handleDiscard = () => {
    setCurrentStatus("view");
    setFormData({
      message: cartItemDto?.cartItem?.message || "",
      details: cartItemDto?.cartItem?.details || "",
      quantity: cartItemDto?.cartItem?.quantity || 1,
    });
  };
  useEffect(() => {
    dispatchPrices({ type: "RESET_PRICE", basePrice: product.basePrice });
  }, [product.basePrice]);

  return (
    <CustomModal open={isModalOpen} onClose={closeModal}>
      <CustomSnackbar
        isSnackbarOpen={isSnackbarOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
        message={snackbarInfo.message}
        type={snackbarInfo.type}
      />

      <Container>
        <Header>
          <h2>{product?.name}</h2>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h2>{price}$</h2>
          </div>
        </Header>
        <ProductCard>
          <ProductInfoColumn>
            <img src={product?.mainImageURL} alt={product?.name} />
            {currentStatus === "edit" ? (
              <>
                <InputGroup>
                  <p>Note</p>
                  <input
                    type="text"
                    placeholder="Details"
                    value={formData.details}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        details: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <p>Message</p>
                  <input
                    type="text"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <p>Quantity</p>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        quantity: parseInt(e.target.value),
                      }))
                    }
                  />
                </InputGroup>
                <ButtonsContainer>
                  <button
                    onClick={handleDiscard}
                    className="filled-gray"
                    style={{ width: "50%" }}
                  >
                    <DoNotDisturbAltIcon />
                    Discard
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="filled-button"
                    style={{ width: "50%" }}
                  >
                    <SaveIcon />
                    Save
                  </button>
                </ButtonsContainer>
              </>
            ) : (
              <>
                {cartItemDto?.cartItem?.details && (
                  <div className="details">
                    <p>Note</p>
                    <p>{cartItemDto?.cartItem?.details}</p>
                  </div>
                )}
                {cartItemDto?.cartItem?.message && (
                  <div className="details">
                    <p>Message</p>
                    <p>{cartItemDto?.cartItem?.message}</p>
                  </div>
                )}
                <p>
                  Quantity: <span>{cartItemDto?.cartItem?.quantity}</span>
                </p>
              </>
            )}
            {isAvailable ? (
              <></>
            ) : (
              <p
                style={{
                  color: "red",
                  backgroundColor: "rgb(255, 209, 209)",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "0.5rem",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {product?.isAvailable
                  ? "Product is out of stock"
                  : "Product is unavailable right now"}
              </p>
            )}
          </ProductInfoColumn>

          <SpecificationsColumn>
            <ButtonsContainer>
              {currentStatus === "view" && (
                <button
                  onClick={() => setCurrentStatus("edit")}
                  className="filled-button"
                >
                  <EditIcon />
                  Edit
                </button>
              )}
            </ButtonsContainer>
            {selectedChoices?.map((instance) => {
              const config = configurations.find(
                (config) => config.id === instance.configurationId
              );
              return (
                config && (
                  <ProductConfiguration
                    config={config}
                    key={instance?.id}
                    dispatchPrices={dispatchPrices}
                    choices={instance.choices}
                    instanceId={instance.id}
                    mode={currentStatus === "edit" ? "editable" : "disabled"}
                    setSelectedChoices={setSelectedChoices}
                    selecedChoices={selectedChoices}
                    handleDeleteConfigInstance={handleDeleteConfigInstance}
                  />
                )
              );
            })}
          </SpecificationsColumn>
        </ProductCard>
      </Container>
    </CustomModal>
  );
};

const Container = styled.div`
  display: flex;
  overflow-y: auto;
  max-height: 90vh;
  border-radius: 1rem;
  flex-direction: column;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  p {
    margin: 0;
  }
`;

const Header = styled.div`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.tan_light};
  background-color: ${({ theme }) => theme.colors.secondary_dark};
`;

const ProductCard = styled.div`
  display: flex;
  @media (max-width: 780px) {
    width: auto;
    padding: 2rem;
    flex-direction: column;
  }
`;

const ProductInfoColumn = styled.div`
  gap: 0.5rem;
  display: flex;
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  img {
    width: 220px;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1),
      0 2px 25px rgba(79, 89, 121, 0.2) inset;
  }
  .details {
    width: 220px;
    display: flex;
    flex-direction: column;
    p:last-child {
      opacity: 0.9;
      font-size: 0.85rem;
      padding: 0.5rem;
      font-weight: 600;
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  @media (max-width: 780px) {
    max-height: auto;
  }
`;

const SpecificationsColumn = styled.div`
  gap: 1rem;
  flex-grow: 1;
  display: flex;
  padding: 1rem;
  max-height: 70vh;
  overflow-y: auto;
  flex-direction: column;
  @media (max-width: 780px) {
    max-height: 100%;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  justify-content: flex-end;
  button {
    gap: 0.2rem;
    border: none;
    display: flex;
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    transition: background-color 0.3s;
  }
  .filled-button {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary_dark};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  .filled-gray {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.lightGray};
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_light};
    }
  }
`;

const InputGroup = styled.div`
  gap: 0.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;
