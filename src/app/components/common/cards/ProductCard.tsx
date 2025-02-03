import React, { useState } from "react";
import { Configuration, Product, ProductWithStoreDto } from "../../../types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { WishlistButton } from "../../../features";
import cart1 from "../../../../assets/Icons/cart1.png";
import { CartItemDetails } from "../../../features/cart/CartItemDetails";
import { useQuery } from "react-query";
import { ProductService } from "../../../api";

export const ProductCard: React.FC<
  ProductWithStoreDto & {
    onWishlistRemove?: (productId: number) => void;
  }
> = (productDto) => {
  const navigate = useNavigate();
  const product: Product = productDto.product;
  const [isWishlisted, setIsWishlisted] = useState(productDto.inWishlist);
  const [configurations, setConfigurations] = useState<Configuration[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAvailable =
    (product.isAvailable && product.stock > 0) || !product.needStock;

  const { refetch } = useQuery(
    ["product", product.id],
    () => ProductService.getProductById(Number(product.id)),
    {
      enabled: false,
      cacheTime: 0,
    }
  );

  const handleAddToCart = async () => {
    const { data } = await refetch();
    setConfigurations(data?.configurations ?? []);
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <CartItemDetails
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          status="add"
          cartItemDto={{
            cartItem: {
              id: 0,
              storeId: productDto.storeBasicInfo?.storeId ?? 0,
              storeName: productDto.storeBasicInfo?.storeName ?? "",
              quantity: 1,
              product: productDto.product,
              configurationInstances: [],
            },
            configurations: configurations,
          }}
        />
      )}
      <ProductCardStyle>
        <WishlistButton
          isWishlisted={isWishlisted}
          setIsWishlisted={setIsWishlisted}
          productId={product.id}
          onWishlistRemove={productDto.onWishlistRemove}
        />
        <img
          src={product.mainImageURL}
          alt={product.name}
          className="product-image"
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
          <StoreName
            onClick={() =>
              navigate(`/store/${productDto.storeBasicInfo?.storeId}`)
            }
          >
            by {productDto.storeBasicInfo?.storeName}
          </StoreName>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <TagsContainer>
            {productDto.product.is3dCustomizable && (
              <CustomizableTag2>3D</CustomizableTag2>
            )}
            {!product.defaultFeatures && (
              <CustomizableTag>Customizable</CustomizableTag>
            )}
          </TagsContainer>
          <div className="price-cart">
            <p>${product.basePrice}</p>
            <img
              src={cart1}
              alt="Add to Cart"
              onClick={handleAddToCart}
              className="cart-icon"
            />
          </div>
        </div>
      </ProductCardStyle>
    </>
  );
};

const ProductCardStyle = styled.div`
  width: 200px;
  display: flex;
  height: 300px !important;
  position: relative;
  flex-direction: column;
  p {
    margin: 0;
  }
  .product-image {
    object-fit: fit;
    border-radius: 10px;
    width: 100% !important;
    height: 180px !important;
    padding: 0 2rem 2.5rem 2rem;
    background: linear-gradient(
      -135deg,
      rgb(223, 222, 222),
      rgb(245, 245, 245)
    );
  }
  .product-details {
    gap: 0.4rem;
    display: flex;
    padding: 0.5rem;
    margin-top: -2rem;
    border-radius: 10px;
    height: 150px !important;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
    h6 {
      margin: 0;
      width: 160px !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: -0.2rem;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: bold;
      font-family: "Delius Swash Caps", serif;
      &:hover {
        color: ${({ theme }) => theme.colors.primary_dark};
      }
    }
    .cart-icon {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .price-cart {
      display: flex;
      margin-top: auto;
      align-items: flex-end;
      justify-content: space-between;
      p {
        font-weight: bold;
        font-size: 1.15rem;
      }
    }
  }
  .wishlist {
    z-index: 1;
    top: 155px;
    right: 0.5rem;
    cursor: pointer;
    position: absolute;
    color: ${({ theme }) => theme.colors.primary_dark};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const CustomizableTag = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.1rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
`;
const CustomizableTag2 = styled.div`
  background-color: ${({ theme }) => theme.colors.golden};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.1rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
`;

const StoreName = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
