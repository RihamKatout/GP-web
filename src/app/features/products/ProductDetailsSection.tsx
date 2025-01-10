import React, { useEffect, useState } from "react";
import { Product, ProductSizeEnum } from "../../types";
import AliceCarousel from "react-alice-carousel";
import { Divider, Rating, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  ProductColors,
  ProductPreview,
  ProductSizes,
  WishlistButton,
} from "..";

//TODO: fix reviews
interface ProductSectionProps {
  product: Product;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  const [price, setPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState<ProductSizeEnum>();
  const [selectedColor, setSelectedColor] = useState<string>();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const handleDragStart = (e: any) => e.preventDefault();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isAvailable = product?.isAvailable && product?.stock > 0;

  useEffect(() => {
    setPrice(product.price);
    setIsWishlisted(product?.inWishlist ?? false);
  }, []);

  const items = [
    <img
      src={product?.imageurl}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={product?.imageurl}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={product?.imageurl}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  //TODO: fix error message
  const handleAddToCart = async () => {
    if (!isAvailable) {
      alert("Sorry! Product is unavailable at the moment");
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <ProductPreview
        product={product}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <SectionContainer>
        <ProductStoreContainer>
          <ProductCard className="tan-threeD-effect-border">
            {/* first section will contain product image, wishlist button, and reviews */}
            <div className="left-column">
              <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                infinite
                animationDuration={2000}
                autoPlayInterval={2000}
                keyboardNavigation
                disableDotsControls
              />{" "}
              <WishlistButton
                isWishlisted={isWishlisted}
                setIsWishlisted={setIsWishlisted}
                productId={product?.id}
              />
              {/* create reviews component */}
              <ReviewContainer>
                <p style={{ padding: "1rem" }}>hi</p>
                <button onClick={handleAddToCart}>view all</button>
              </ReviewContainer>
            </div>

            {isMobile ? (
              <>
                <div
                  className="store-info"
                  onClick={() => navigate(`/store/${product?.storeIdTmp}`)}
                >
                  <img src={product?.storeLogoUrl} alt={product?.storeName} />
                  <p>{product?.storeName} store</p>
                </div>
                <Divider
                  style={{
                    border: "1px solid rgb(140, 140, 140)",
                    margin: "1rem",
                  }}
                />
              </>
            ) : (
              <Divider
                style={{
                  border: "1px solid rgb(140, 140, 140)",
                  margin: "1rem",
                }}
              />
            )}
            <div className="right-column">
              <div className="header">
                <h2>{product?.name}</h2>
                <h2 style={{ fontSize: "1.5rem" }}>{price}$</h2>
              </div>
              <div className="rating">
                <Rating
                  name="half-rating-read"
                  defaultValue={product?.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <p style={{ color: "rgb(150, 150, 150)" }}> (42 reviews)</p>
              </div>
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
                  }}
                >
                  {product?.isAvailable
                    ? "Product is out of stock"
                    : "Product is unavailable right now"}
                </p>
              )}
              <p className="description">{product?.description}.</p>
              <ProductColors
                colors={product?.colors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
              <ProductSizes
                sizes={product?.sizePrices}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                setPrice={setPrice}
              />
              <button onClick={handleAddToCart}>
                <AddShoppingCartIcon sx={{ color: "navy", height: "40px" }} />
              </button>
            </div>
          </ProductCard>
        </ProductStoreContainer>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 3rem 0;
  flex-direction: column;
  h2 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
`;

const ProductStoreContainer = styled.section`
  display: flex;
  max-width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductCard = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  border-radius: 1rem;
  margin: 0 2rem;
  background-color: ${({ theme }) => theme.colors.tan};
  .left-column {
    display: flex;
    width: 40%;
    flex-direction: column;
    padding: 1rem;
    position: relative;
    img {
      width: 100%;
      padding: 2rem;
      background-color: ${({ theme }) => theme.colors.white};
    }
    .wishlist {
      position: absolute;
      z-index: 1000;
      top: 1.5rem;
      left: 1.5rem;
      height: 2rem;
      width: 2rem;
      cursor: pointer;
      color: rgb(216, 100, 100);
      &:hover {
        color: rgb(159, 43, 43);
      }
    }
  }
  .right-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: -0.7rem;
    }
    .rating {
      display: flex;
      align-items: center;
      p {
        margin: 0 0.5rem;
        font-size: 0.8rem;
      }
    }
    .description {
      color: ${({ theme }) => theme.colors.gray};
      text-align: justify;
    }

    button {
      height: 40px;
      width: 40px;
      border: none;
      margin: 0 0 0 auto;
      background-color: transparent;
      border-radius: 50%;
      transition: background-color 0.5s;
      &:hover {
        cursor: pointer;
        background-color: rgba(131, 126, 176, 0.4);
      }
    }
  }
  .store-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
    p {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 768px) {
    width: auto;
    margin: 0 4rem;
    flex-direction: column;
    .left-column {
      width: 100%;
    }
  }
`;

const ReviewContainer = styled.section`
  display: flex;
  width: auto;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  button {
    background-color: ${({ theme }) => theme.colors.secondary_light};
    border-radius: 0 0.5rem 0.5rem 0;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 0.5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
