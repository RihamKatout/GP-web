import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { PleaseLoginModal } from "../../../pages";
import { useAuth } from "../../../context";
import { Product, ProductSizeEnum } from "../../../types";
import { CartService } from "../../../api";
import { ProductColors, ProductSizes } from "../..";
import CardWriting from "../../../components/Cake3D/CardWriting";
import { Modal as AntdModal } from "antd";
import messageIcon from "../../../../assets/Icons/message.png"; //messageIcon
import { message } from "antd";

const { Dragger } = Upload;

interface AddToCartSectionProps {
  product: Product;
  setSelectedSize: React.Dispatch<React.SetStateAction<ProductSizeEnum>>;
  selectedSize: ProductSizeEnum;
  price: number;
  setPrice: (price: number) => void;
  isAvailable: boolean;
}

export const AddToCartSection: React.FC<AddToCartSectionProps> = ({
  product,
  setSelectedSize,
  selectedSize,
  price,
  setPrice,
  isAvailable,
}) => {
  const { isLoggedIn } = useAuth();
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      message.error("You need to log in to add items to the cart.");
      return;
    }

    if (!isAvailable) {
      message.warning("This item is not available.");
      return;
    }

    try {
      await CartService.addItem({
        product,
        size: selectedSize,
        quantity,
        details,
      });
      message.success("Item added to cart successfully!");
    } catch (e: any) {
      message.error("Item already exists in the cart!");
      console.error(e?.response?.data?.errors?.[0]);
    }
  };

  const handleQuantityChange = (value: number) => {
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleFileChange = (info: any) => {
    const { file } = info;

    if (file.originFileObj) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setUploadedImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file.originFileObj);
      const blob = file.originFileObj;
      console.log("Blob:", blob);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    setDetails("" );
    setQuantity(1);
    // if (product.colors?.length !== 0) setSelectedColor(product.colors?.[0]);
    // const availableSizes = Object.keys(product.sizePrices) as Array<
    //   keyof typeof product.sizePrices
    // >;
    // setSelectedSize(availableSizes[0]);
    // setPrice(product.sizePrices[availableSizes[0]]);
  }, [product]);

  console.log("vb",details);
  
  const [message1, setCardMessage] = useState<string>("");

  function handleSaveMessage(id: string, message1: string): void {
    setCardMessage(message1);
    console.log(`Message saved for card ${id}: ${message1}`);
  }
console.log(selectedSize,price);

  return (
    <AddToCartContainer>
      <h5>Add to cart</h5>

      <SectionContent>
        {isLoggedIn ? (
          <>
            <div className="product-info">
              <ProductColors
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
              <ProductSizes
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                setPrice={setPrice}
              />

              <Input
                placeholder="Add your details here"
                value={details}
                onChange={(e) => setDetails(e.target.value )}
                style={{ width: "100%", marginTop: "0.5rem" }}
              />

              <SummarySection>
                <div className="summary-section" style={{ gap: "0.8rem" }}>
                  <p style={{ fontSize: "0.85rem" }}>Qty</p>
                  <QuantityButtonsContainer>
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => handleQuantityChange(quantity + 1)}>
                      +
                    </button>
                    {quantity >= product.stock ? (
                      <span>Max stock reached</span>
                    ) : null}
                  </QuantityButtonsContainer>
                </div>
                <div className="summary-section">
                  <p style={{ fontSize: "0.85rem" }}>Total</p>
                  <p style={{ fontSize: "1.2rem" }}>{price * quantity}$</p>
                </div>
                <button
                  onClick={openModal}
                  style={{ cursor: "pointer", background: "none", border: "none" }}
                >
                  <img
                    src={messageIcon}
                    alt="Delete"
                    style={{ width: "70px", height: "40px" }}
                  />
                </button>

                <button className="add-button" onClick={handleAddToCart}>
                  Add
                </button>
              </SummarySection>
            </div>
          </>
        ) : (
          <PleaseLoginModal
            message="Please login to add this product to your cart!"
            fontSize="1.2rem"
            darkFont={true}
            maxWidth="100%"
          />
        )}
        <Modal
          open={isModalOpen}
          onCancel={closeModal}
          footer={[
            <button key="cancel" onClick={closeModal}>
              Cancel
            </button>,
          ]}
        >
          <CardWriting cardId={product.name} onSaveMessage={handleSaveMessage} />
        </Modal>
      </SectionContent>
    </AddToCartContainer>
  );
};

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

const AddToCartContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
  background-color: ${({ theme }) => theme.colors.white};
  h5 {
    font-family: "Delius", serif;
    font-weight: bold;
    width: auto;
    padding-bottom: 0.5rem;
    margin: 1rem 1rem;
    color: ${({ theme }) => theme.colors.secondary_dark};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary_dark};
  }
  @media (max-width: 780px) {
    margin-top: 1rem;
  }
`;

const SectionContent = styled.div`
  gap: 1rem;
  height: auto;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  .product-info {
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: flex-start;
  }
  @media (max-width: 780px) {
    width: 100%;
    .product-info {
      width: 100%;
    }
  }
  & > div {
    width: auto;
  }
`;

const QuantityButtonsContainer = styled.button`
  padding: 0;
  width: auto;
  margin-top: -0.5rem;
  border: none;
  color: black;
  display: flex;
  align-items: center;
  background-color: transparent;
  p {
    height: 25px;
    width: 30px;
    font-size: 0.9rem;
    align-content: center;
  }
  span {
    color: red;
    font-size: 0.8rem;
    margin: 0;
    margin-left: 0.5rem;
  }
  button {
    width: 25px;
    height: 25px;
    border: none;
    font-weight: bold;
    border-radius: 99px;
    transition: background-color 0.5s;
    background-color: ${({ theme }) => theme.colors.white};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.tan};
    }
  }
`;

const SummarySection = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  .add-button {
    margin-right: 0;
    margin-left: auto;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    font-family: "Delius", serif;
  }
  .summary-section {
    width: 30%;
    display: flex;
    border-radius: 0.5rem;
    padding: 0.2rem 0.4rem;
    flex-direction: column;
    margin: 0.5rem 0.5rem 0 0;
    background-color: ${({ theme }) => theme.colors.gray_light};
  }
`;
