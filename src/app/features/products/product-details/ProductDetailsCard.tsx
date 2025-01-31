import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import { AddToCartPreview, WishlistButton } from "../..";
import { useNavigate } from "react-router-dom";
import { Divider, Rating } from "@mui/material";
import { ProductDetail } from "../../../types";
import { DefaultStoreImg } from "../../../../assets";
import { ProductConfiguration } from "..";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CustomSnackbar } from "../../../components/common";
import img from "../../../../assets/product/3dcakeTry.png";
import img2 from "../../../../assets/product/3dCake.png";
import img3 from "../../../../assets/product/3dHeart.png";
import img4 from "../../../../assets/product/3dCharryCake.png";
//TODO: fix reviews
interface ProductDetailsCardProps {
  productDto: ProductDetail;
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

export const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({
  productDto,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDragStart = (e: any) => e.preventDefault();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const { product, inWishlist, store, configurations } = productDto;
  const [price, dispatchPrices] = useReducer(pricesReducer, 0);
  const isAvailable =
    (productDto.product?.isAvailable && productDto.product?.stock > 0) ||
    !productDto.product.needStock;
  const items = [
    <img
      src={product?.mainImageURL}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  if (product?.id === 2) {
    items.push(
      <img src={img} onDragStart={handleDragStart} role="presentation" />
    );
  }
  if (product?.id === 3) {
    items.push(
      <img src={img2} onDragStart={handleDragStart} role="presentation" />
    );
  }
  if (product?.id === 4) {
    items.push(
      <img src={img3} onDragStart={handleDragStart} role="presentation" />
    );
  }
  if (product?.id === 5) {
    items.push(
      <img src={img4} onDragStart={handleDragStart} role="presentation" />
    );
  }

  useEffect(() => {
    dispatchPrices({
      type: "ADD_PRICE_IMPACT",
      priceImpact: product.basePrice,
    });
    setIsWishlisted(inWishlist ?? false);
    return () => {
      dispatchPrices({
        type: "REMOVE_PRICE_IMPACT",
        priceImpact: product.basePrice,
      });
    };
  }, [product.basePrice]);

  const handleAddToCart = () => {
    if (!isAvailable) {
      setIsSnackbarOpen(true);
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <Container>
      <CustomSnackbar
        isSnackbarOpen={isSnackbarOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
        message="Product is not available right now"
        type="error"
      />
      <AddToCartPreview
        product={productDto.product}
        configurations={configurations}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Header>
        <h2>{product?.name}</h2>
        <h2>{price.toFixed(2)}$</h2>
      </Header>
      <ProductCard>
        {/* first section contains product info and wishlist button*/}
        <StoreMobile>
          <div
            className="store-info"
            onClick={() => navigate(`/store/${store?.storeId}`)}
          >
            <img
              src={store?.storeLogoURL || DefaultStoreImg}
              alt={store?.storeName}
            />
            <p>{store?.storeName} store</p>
          </div>
          <Divider
            style={{
              border: "1px solid rgb(140, 140, 140)",
              margin: "1rem",
            }}
          />
        </StoreMobile>
        <ProductInfoColumn>
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
          <div className="rating">
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
              size="medium"
            />
            <p style={{ color: "rgb(150, 150, 150)" }}>
              ({product.numberOfReviews} reviews)
            </p>
          </div>
          <p className="description">{product?.description}.</p>
        </ProductInfoColumn>

        <SpecificationsColumn>
          {configurations?.map((config) => (
            <ProductConfiguration
              config={config}
              key={config.id}
              dispatchPrices={dispatchPrices}
              mode={"enabled"}
            />
          ))}
          <button className="cart-icon" onClick={handleAddToCart}>
            <AddShoppingCartIcon />
            <p>Add to cart</p>
          </button>
        </SpecificationsColumn>
      </ProductCard>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  z-index: 1000;
  font-size: 1.3rem;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  justify-content: space-between;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
  color: ${({ theme }) => theme.colors.tan_light};
  background-color: ${({ theme }) => theme.colors.secondary_dark};
`;

const ProductCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 50%;
  overflow: hidden;
  @media (max-width: 780px) {
    width: auto;
    flex-direction: column;
  }
`;

const ProductInfoColumn = styled.div`
  gap: 1rem;
  width: 35%;

  display: flex;
  padding: 1rem;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  img {
    width: 100%;
    height: 350px;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1),
      0 2px 25px rgba(79, 89, 121, 0.2) inset;
    clip-path: inset(0px 0px 10px 0px);
  }

  .wishlist {
    position: absolute;
    z-index: 1000;
    top: 1.5rem;
    left: 1.5rem;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary_extra_dark};
    &:hover {
      color: rgb(159, 43, 43);
    }
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
    color: ${({ theme }) => theme.colors.secondary};
    text-align: justify;
  }
  .alice-carousel {
    margin: 0 !important;
  }
  @media (max-width: 780px) {
    width: auto;
    padding: 1.5rem;
  }
`;

const SpecificationsColumn = styled.div`
  gap: 1rem;
  flex-grow: 1;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  .cart-icon {
    display: flex;
    border: none;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary_dark};
    margin-left: auto;
    padding: 0.5rem;
    font-size: 1.5rem;
    width: 120px;
    align-items: center;
    transition: background-color 0.5s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary_light};
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const StoreMobile = styled.div`
  display: none;
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
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
`;
