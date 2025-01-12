import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import { ProductColors, ProductSizes, WishlistButton } from "../..";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { Divider, Rating } from "@mui/material";
import { Product, ProductSizeEnum } from "../../../types";

//TODO: fix reviews
//TODO: fix error message
interface ProductDetailsCardProps {
  product: Product;
  setSelectedSize: React.Dispatch<React.SetStateAction<ProductSizeEnum>>;
  selectedSize: ProductSizeEnum;
  price: number;
  setPrice: (price: number) => void;
  isAvailable: boolean;
}
export const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({
  product,
  setSelectedSize,
  selectedSize,
  price,
  setPrice,
  isAvailable,
}) => {
  const handleDragStart = (e: any) => e.preventDefault();

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

  const theme = useTheme();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedColor, setSelectedColor] = useState<string>();

  useEffect(() => {
    setPrice(product.price);
    setIsWishlisted(product?.inWishlist ?? false);
  }, []);

  return (
    <>
      <ProductCard>
        {/* first section contains product image and wishlist button*/}
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
          />
          <WishlistButton
            isWishlisted={isWishlisted}
            setIsWishlisted={setIsWishlisted}
            productId={product?.id}
          />
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
              margin: "1rem 0",
            }}
          />
        )}
        <div className="right-column">
          <div className="header">
            <h2>{product?.name}</h2>
            <h2>{price}$</h2>
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
          <p className="description">
            {product?.description}
            {product?.description}
            {product?.description}
            {product?.description}
            {product?.description}
            {product?.description}
            {product?.description}
            {product?.description}
            {product?.description}
            {product?.description}
            {product?.description}.
          </p>
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
        </div>
      </ProductCard>
    </>
  );
};

const ProductCard = styled.section`
  width: auto;
  min-height: 50%;
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 10px -2px 25px rgba(0, 0, 0, 0.29);
  .left-column {
    width: 40%;
    position: relative;
    padding: 1rem;
    img {
      width: 100%;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.secondary_extra_light};
      box-shadow: 5px -2px 50px rgba(0, 0, 0, 0.2) inset;
    }
    .wishlist {
      position: absolute;
      z-index: 1000;
      top: 1.5rem;
      left: 1.5rem;
      height: 2.5rem;
      width: 2.5rem;
      cursor: pointer;
      color: rgb(237, 18, 58);
      &:hover {
        color: rgb(159, 43, 43);
      }
    }
  }
  .right-column {
    gap: 1rem;
    flex-grow: 1;
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    .header {
      color: ${({ theme }) => theme.colors.secondary_dark};
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.4rem;
      font-weight: bolder;
      margin-bottom: -0.5rem;
    }
    .rating {
      display: flex;
      align-items: center;
      p {
        margin: 0 0.5rem;
        font-size: 0.8rem;
      }
      margin-bottom: 1rem;
    }
    .description {
      color: ${({ theme }) => theme.colors.secondary};
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
