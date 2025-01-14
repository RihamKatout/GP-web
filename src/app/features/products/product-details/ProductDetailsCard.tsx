import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import {
  ProductColors,
  ProductSizes,
  ReviewSection,
  WishlistButton,
} from "../..";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedColor, setSelectedColor] = useState<string>();

  useEffect(() => {
    setPrice(product.price);
    setIsWishlisted(product?.inWishlist ?? false);
  }, []);

  return (
    <Container>
      <Header>
        <h2>{product?.name}</h2>
        <h2>{price}$</h2>
      </Header>
      <ProductCard>
        {/* first section contains product image and wishlist button*/}
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
          <></>
        )}
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

        <div className="right-column">
          <div className="rating">
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
              size="medium"
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
      <Divider style={{ backgroundColor: "gray", marginTop: "-1rem" }} />
      <ReviewSection />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.tan_light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  padding: 1rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  border-radius: 1rem 1rem 0 0;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
  z-index: 1000;
`;

const ProductCard = styled.div`
  display: flex;

  width: 100%;
  min-height: 50%;
  overflow: hidden;

  .left-column {
    width: 40%;
    position: relative;
    padding: 1rem;
    img {
      width: 100%;
      padding: 1rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1),
        0 2px 25px rgba(79, 89, 121, 0.2) inset;
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
    .rating {
      display: flex;
      align-items: center;
      p {
        margin: 0 0.5rem;
        font-size: 0.8rem;
      }
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
    padding: 1rem 1rem 0 1rem;
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
    margin: 0;
    flex-direction: column;
    .left-column {
      width: 100%;
    }
  }
`;
