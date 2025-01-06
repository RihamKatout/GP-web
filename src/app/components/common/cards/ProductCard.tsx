import React, { useState } from "react";
import { Product } from "../../../types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ProductPreview } from "../../../features";

const ProductCardStyle = styled.div`
  width: 200px;
  display: flex;
  height: 300px;
  position: relative;
  flex-direction: column;
  img {
    object-fit: fit;
    border-radius: 10px;
    width: 100% !important;
    height: 55% !important;
    padding: 0 2rem 2rem 2rem;
    background: linear-gradient(135deg, rgb(227, 227, 227), rgb(196, 162, 214));
  }
  .product-details {
    display: flex;
    padding: 0.5rem;
    margin-top: -1.5rem;
    border-radius: 10px;
    height: 55% !important;
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
      gap: 0;
      display: flex;
      flex-direction: column;
      p {
        margin: 0;
        padding: 0;
        font-weight: bold;
        font-size: 1.15rem;
      }
    }
    .price-cart {
      gap: 2rem;
      display: flex;
      margin-top: auto;
      align-items: flex-end;
      justify-content: space-between;
      button {
        height: 30px;
        border: none;
        background-color: transparent;
        border-radius: 50%;
        transition: background-color 0.5s;
        &:hover {
          cursor: pointer;
          background-color: rgba(161, 136, 173, 0.4);
        }
      }
    }
  }
  .wishlist {
    z-index: 1;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    position: absolute;
    color: rgb(94, 94, 94);
    &:hover {
      color: rgb(0, 0, 0);
    }
  }
`;

// TODO : wishlist and cart functionality
export const ProductCard: React.FC<Product> = (product) => {
  const navigate = useNavigate();
  const isAvailable = product.isAvailable && product.stock > 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddToCart = () => {
    setIsModalOpen(true);
    console.log("added to cart");
  };
  const handleAddToWishlist = () => {
    console.log("added to wishlist");
  };

  return (
    <>
      <ProductPreview
        product={product}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ProductCardStyle>
        <img src={product.imageurl} alt={product.name} />

        <FavoriteBorderIcon
          className="wishlist"
          onClick={handleAddToWishlist}
        />
        <div className="product-details">
          <h6 onClick={() => navigate("/product/" + product.id)}>
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
                {product.isAvailable ? "Out of stock" : "unavailable"}
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
              <p>${product.price}</p>
            </div>
            <button onClick={handleAddToCart}>
              <AddShoppingCartIcon
                sx={{ color: "#6a437c", height: "20px", fontWeight: "700" }}
              />
              {/* Add to cart */}
            </button>
          </div>
        </div>
      </ProductCardStyle>
    </>
  );
};
