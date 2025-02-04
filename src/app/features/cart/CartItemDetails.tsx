import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { CartItemDto, ConfigurationInstance } from "../../types";
import { ProductConfigurationInstance } from "../products";
import { useQueryClient } from "react-query";
import { CustomModal, CustomSnackbar } from "../../components/common";
import { CartService } from "../../api";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import AddIcon from "@mui/icons-material/Add";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import { Select } from "@mui/material";
import { calcPriceSummation } from "./Service";
import CardWriting from "../../components/Cake3D/CardWriting";
import { Modal, Button } from "antd";

interface CartItemDetailsProps {
  cartItemDto: CartItemDto;
  isModalOpen: boolean;
  closeModal: () => void;
  status?: "view" | "add" | "edit";
  setCartItemDto?: React.Dispatch<React.SetStateAction<CartItemDto>>;
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
  setCartItemDto,
}) => {
  const queryClient = useQueryClient();
  const [currentStatus, setCurrentStatus] = useState<"view" | "add" | "edit">(
    status || "view"
  );
  const [selectedChoices, setSelectedChoices] = useState<
    ConfigurationInstance[]
  >(cartItemDto.cartItem.configurationInstances);
  const [isSelectDisplayed, setIsSelectDisplayed] = useState(false);
  const multipleAllowedConfigurations = cartItemDto.configurations.filter(
    (config) => config.allowsMultipleUnits
  );
  const { configurations } = cartItemDto;
  const { product } = cartItemDto.cartItem;
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarInfo, setSnackbarInfo] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "info";
  }>({ message: "", type: "success" });
  const initialPrice =
    product.basePrice -
    configurations.reduce(
      (sum, config) => sum + (config.unitPriceImpact || 0),
      0
    );
  const [price, dispatchPrices] = useReducer(pricesReducer, initialPrice);
  const isAvailable =
    (product?.isAvailable && product?.stock > 0) || !product.needStock;

  const [formData, setFormData] = useState({
    message: cartItemDto?.cartItem?.message || "",
    details: cartItemDto?.cartItem?.details || "",
    quantity: cartItemDto?.cartItem?.quantity || 1,
  });

  const initializeInstances = () => {
    if (currentStatus === "add") {
      const newInstances = configurations.map((config) => {
        return {
          id: -Math.random(),
          configurationId: config.id,
          choices: config.configurationAttributes.map((attr) => ({
            attributeId: attr.id,
            choiceName: attr.choices[0].name,
          })),
        };
      });
      setSelectedChoices(newInstances);
      return;
    }
    setSelectedChoices(cartItemDto.cartItem.configurationInstances || []);
  };

  useEffect(() => {
    initializeInstances();
  }, [currentStatus]);
  const handleRefetch = () => {
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  const handleDeleteConfigInstance = (instanceId: number, configId: number) => {
    const configInstancesCount = selectedChoices.filter(
      (instance) => instance.configurationId === configId
    ).length;

    const instanceToDelete = selectedChoices.find(
      (instance) => instance.id === instanceId
    );
    if (!instanceToDelete) return;

    if (configInstancesCount === 1) {
      setSnackbarInfo({
        message: "You must have at least one instance of this configuration",
        type: "error",
      });
      setIsSnackbarOpen(true);
      return;
    }

    // If deleting an instance (in add mode or when configuration is not unique), subtract its choices price impact.
    const config = configurations.find((c) => c.id === configId);
    if (config) {
      const priceImpactToRemove = instanceToDelete.choices.reduce(
        (sum, choice) => {
          const attribute = config.configurationAttributes.find(
            (attr) => attr.id === choice.attributeId
          );
          if (attribute) {
            const matchingChoice = attribute.choices.find(
              (c) => c.name === choice.choiceName
            );
            return sum + (matchingChoice?.priceImpact || 0);
          }
          return sum;
        },
        0
      );
      if (currentStatus === "add") {
        dispatchPrices({
          type: "REMOVE_PRICE_IMPACT",
          priceImpact: priceImpactToRemove,
        });
      }
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
        setSnackbarInfo({
          message: "Cart item updated successfully",
          type: "success",
        });
        setIsSnackbarOpen(true);
        setCartItemDto && setCartItemDto(response.data);
        handleRefetch();
        setTimeout(() => {
          const finalPrice = calcPriceSummation(response.data);
          dispatchPrices({ type: "RESET_PRICE", basePrice: finalPrice || 0 });
        }, 1);
        setCurrentStatus("view");
      }
    } catch (e) {
      setSnackbarInfo({
        message: "Failed to update cart item",
        type: "error",
      });
      setIsSnackbarOpen(true);
    }
  };

  const handleAddCartItem = async () => {
    try {
      const response = await CartService.addItem({
        ...cartItemDto.cartItem,
        ...formData,
        configurationInstances: selectedChoices,
      });
      if (response.status === 201) {
        setSnackbarInfo({
          message: "Cart item added successfully",
          type: "success",
        });
        setIsSnackbarOpen(true);
        setTimeout(() => {
          closeModal();
        }, 1000);
        handleRefetch();
      }
    } catch (e) {
      setSnackbarInfo({
        message: "Failed to add cart item",
        type: "error",
      });
      setIsSnackbarOpen(true);
    }
  };
  const handleDiscard = () => {
    closeModal();
  };

  const handleAddConfiguration = () => {
    setIsSelectDisplayed(true);
  };

  const handleConfigurationChange = (e: SelectChangeEvent) => {
    const configId = parseInt(e.target.value as string);
    if (!configId) return;

    const config = configurations.find((c) => c.id === configId);
    if (!config) return;

    const newInstance: ConfigurationInstance = {
      id: -Math.random(),
      configurationId: configId,
      choices: config.configurationAttributes.map((attr) => ({
        attributeId: attr.id,
        choiceName: attr.choices[0].name,
      })),
    };

    setSelectedChoices((prev) => [...prev, newInstance]);
    setIsSelectDisplayed(false);
  };

  /////////Message Section
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSaveMessage = (id: string, message: string) => {
    setFormData((prev) => ({
      ...prev,
      message: message, // Save the message in the input field
    }));
    setIsModalVisible(false); // Close modal after saving
  };

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
            {currentStatus !== "view" ? (
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
                <button onClick={handleOpenModal}>Open Card Writing</button>
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
                    onClick={
                      status === "add" ? handleAddCartItem : handleUpdate
                    }
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
              {currentStatus !== "view" && (
                <>
                  <button
                    onClick={handleAddConfiguration}
                    className="filled-button"
                  >
                    <AddIcon />
                    configuration
                  </button>
                  {isSelectDisplayed && (
                    <Select
                      native
                      sx={{
                        minWidth: "200px",
                        height: "32px",
                        fontSize: "14px",
                        "& select": {
                          padding: "4px 8px",
                          borderRadius: "4px",
                        },
                      }}
                      value=""
                      onChange={handleConfigurationChange}
                    >
                      <option value="" disabled>
                        Choose configuration
                      </option>
                      {multipleAllowedConfigurations.map((config) => (
                        <option key={config.id} value={config.id}>
                          {config.name}
                        </option>
                      ))}
                    </Select>
                  )}
                </>
              )}
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
                  <ProductConfigurationInstance
                    key={`${instance.id}-${currentStatus}`}
                    config={config}
                    dispatchPrices={dispatchPrices}
                    instance={instance}
                    mode={currentStatus !== "view" ? "editable" : "disabled"}
                    setSelectedChoices={setSelectedChoices}
                    handleDeleteConfigInstance={handleDeleteConfigInstance}
                    type="cart"
                  />
                )
              );
            })}
          </SpecificationsColumn>
        </ProductCard>
        <Modal open={isModalVisible} onCancel={handleCloseModal} footer={null} zIndex={3000}>
        <CardWriting cardId="1" onSaveMessage={handleSaveMessage} />
      </Modal>
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
