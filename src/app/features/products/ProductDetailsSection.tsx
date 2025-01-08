import React, { useState } from "react";
import { Product } from "../../types";
import AliceCarousel from "react-alice-carousel";
import { Rating } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "styled-components";

//TODO: fix number of reviews
interface ProductSectionProps {
  product: Product | undefined;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string | undefined>(undefined);
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
  const isAvailable = product?.isAvailable && product?.stock > 0;

  return (
    <SectionContainer>
      <ProductStoreContainer>
        <ProductCard>
          {/* first section will contain product image, add or remove from wishlist, and reviews */}
          <div className="left-column">
            <AliceCarousel
              mouseTracking
              items={items}
              autoPlay
              infinite
              animationDuration={2000}
              autoPlayInterval={2000}
              keyboardNavigation
              disableButtonsControls
            />
            <div className="review-card">
              <p>hi</p>
              <button>view all</button>
            </div>
          </div>
        </ProductCard>
      </ProductStoreContainer>
    </SectionContainer>
  );
};

/*
    <ProductIdContainer className="tan-threeD-effect-border">
      <ImageAndReviewSection>
        
      </ImageAndReviewSection>
      <ProductDetailsSection>
        {/* <div
          className="store-info"
          onClick={() => navigate(`/store/${product.storeIdTmp}`)}
        >
          <img src={product.storeLogoUrl} alt={product.storeName} />
          <p>{product.storeName} store</p>
        </div>
        <Divider style={{ border: "1px solid rgb(200, 200, 200)" }} /> */
//     <div className="header">
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           width: "100%",
//           justifyContent: "space-between",
//         }}
//       >
//         <h2>{product?.name}</h2>
//         <h2 style={{ fontSize: "1.5rem" }}>{price}$</h2>
//       </div>
//       {isAvailable ? (
//         <></>
//       ) : (
//         <p style={{ color: "red" }}>
//           {product?.isAvailable ? "out of stock" : "unavailable right now"}
//         </p>
//       )}
//     </div>
//     <div className="rating">
//       <Rating
//         name="half-rating-read"
//         // defaultValue={product?.rating}
//         defaultValue={3.5}
//         precision={0.5}
//         readOnly
//         size="small"
//       />
//       <p> (42 reviews)</p>
//     </div>
//     <p style={{ color: "rgb(130, 130, 130)" }}>
//       {product?.description} {product?.description} {product?.description}{" "}
//       {product?.description} {product?.description} {product?.description}
//       {product?.description}
//     </p>
//     <div className="buttons">
//       <button className="outline">Add to cart</button>
//       <button className="button-63">
//         <AddShoppingCartIcon style={{ marginRight: "0.3rem" }} />
//         Add to cart
//       </button>
//     </div>
//   </ProductDetailsSection>
// </ProductIdContainer>
const SectionContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 3rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ProductStoreContainer = styled.section`
  gap: 1rem;
  display: flex;
  margin-left: 2rem;
  max-width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductCard = styled.section`
  gap: 1rem;
  width: 70%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.tan};
  .left-column {
    background-color: red;
    display: flex;
    width: 40%;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    img {
      width: 100%;
      padding: 2rem;
      background: linear-gradient(45deg, rgb(215, 196, 224), rgb(127, 92, 146));
    }
    .review-card {
      display: flex;
      width: auto;
      justify-content: space-between;      
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.white};
      button{
        background-color: ${({ theme }) => theme.colors.secondary_light};
        border-radius: 0 1rem 1rem 0;
        border: none;
        color: ${({ theme }) => theme.colors.white};
        padding: 1rem 0.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ImageAndReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  jsutify-content: center;
  img {
    width: 100%;
    padding: 2rem;
    background: linear-gradient(45deg, rgb(215, 196, 224), rgb(127, 92, 146));
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductDetailsSection = styled.div`
  width: 50%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Delius Swash Caps", serif;
  }
  .store-info {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    margin-bottom: -1rem;
    img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    p {
      cursor: pointer;
      color: rgb(57, 57, 57);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    p:first-child {
      background: rgb(215, 196, 224);
      color: rgb(57, 57, 57);
    }
  }
  .rating {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    p {
      color: rgb(130, 130, 130);
      font-size: 0.75rem;
    }
  }
  .buttons {
    gap: 1rem;
    width: 100%;
    display: flex;
    margin-top: 1rem;
    button {
      width: 50%;
      padding: 0.4rem;
      font-size: 1.1rem;
    }
    .outline {
      background: white;
      color: rgb(33, 33, 33);
      border: 3px solid rgb(127, 92, 146);
    }
    &:first-child {
      background: rgb(215, 196, 224);
      color: rgb(57, 57, 57);
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
