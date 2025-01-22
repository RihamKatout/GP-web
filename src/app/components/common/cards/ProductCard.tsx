import React, { useState } from "react";
import { Product, ProductWithStoreDto } from "../../../types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ProductPreview } from "../../../features";
import cart1 from "../../../../assets/Icons/cart1.png"; // Ensure the file path is correct or place the file in the public folder

const ProductCardStyle = styled.div`
  width: 200px;
  display: flex;
  height: 320px;
  position: relative;
  flex-direction: column;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
  border-radius: 15px;

  .img1 {
    object-fit: fit;
    border-radius: 15px;
    width: 100% !important;
    height: 140px !important;
  }

  .product-details {
    display: flex;
    padding: 0.5rem;
    //margin-top: -1.5rem;
    border-radius: 10px;
    height: 55%;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.35);

    h6 {
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      font-family: "Delius Swash Caps", serif;

      &:hover {
        text-decoration: underline;
        color: rgb(144, 101, 167);
      }
    }

    .description {
      margin: 0.5rem 0;
      overflow: hidden;
      font-size: 0.75rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      color: rgb(130, 130, 130);
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
      flex-direction: column;
      margin-left: 12px;

      p {
        margin: 0;
        font-weight: bold;
        font-size: 1.15rem;
      }
    }

    .price-cart {
      display: flex;
      margin-top: auto;
      align-items: center;
      justify-content: space-between;

      button {
        border: none;
        background-color: transparent;
        border-radius: 50%;
        transition: background-color 0.5s;

        img {
          object-fit: cover;
          //height: 45px; /* Ensures consistent display */
          width: 60px;
          margin-left: 1rem;
          &:hover {
            cursor: pointer;
            background-color: rgba(161, 136, 173, 0.4);
          }
        }
      }
    }
  }

  .wishlist {
    z-index: 1;
    top: 0.5rem;
    right: 0.5rem;
    position: absolute;
    color: rgb(94, 94, 94);

    &:hover {
      color: rgb(0, 0, 0);
    }
  }
`;

const CustomizableTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  z-index: 2;
`;

const StoreName = styled.div`
  font-size: 0.9rem;
  //font-weight: bold;
  color: ${({ theme }) => theme.colors.primary_dark};
  text-align: left;
  margin-bottom: 0.3rem;
  font-family: "Delius Swash Caps",  serif;
`;

export const ProductCard: React.FC<ProductWithStoreDto> = (productDto) => {
  const product: Product = productDto.product;
  const navigate = useNavigate();
  const isAvailable =
    (product.isAvailable && product.stock > 0) || !product.needStock;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
    console.log("Added to cart");
  };

  const handleAddToWishlist = () => {
    console.log("Added to wishlist");
  };

  return (
    <>
      <ProductPreview
        product={productDto.product}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ProductCardStyle>
        {productDto.product.is3dCustomizable && (
          <CustomizableTag>3D</CustomizableTag>
        )}

        <img src={product.mainImageURL} alt={product.name} className="img1" />

        <FavoriteBorderIcon
          className="wishlist"
          onClick={handleAddToWishlist}
        />

        <div className="product-details">
          {productDto.storeBasicInfo?.storeName ? (
            <StoreName>--{productDto.storeBasicInfo.storeName}--</StoreName>
          ) : (
            <></>
          )}

          <h6 onClick={() => navigate("/product/" + productDto.product.id)}>
            {product.name}
            {!isAvailable && (
              <span
                style={{
                  color: "red",
                  fontSize: "0.7rem",
                  marginLeft: "0.5rem",
                  textDecoration: "underline",
                }}
              >
                {product.isAvailable ? "Out of stock" : "Unavailable"}
              </span>
            )}
          </h6>

          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />

          <p className="description">{product.description}</p>

          <div className="price-cart">
            <div className="price">
              <p>${product.basePrice}</p>
            </div>
            <button onClick={handleAddToCart}>
              <img src={cart1} alt="Add to Cart" />
            </button>
          </div>
        </div>
      </ProductCardStyle>
    </>
  );
};
