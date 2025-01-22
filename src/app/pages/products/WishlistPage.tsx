import { useState } from "react";
import { WishlistService } from "../../api/wishlistService";
import { CustomSnackbar, ProductCard } from "../../components/common";
import { Product, SectionIdEnum } from "../../types";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { useQuery } from "react-query";
import styled from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Popconfirm } from "antd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { EmptyCart } from "../../features";
import { set } from "zod";

export const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const fetchWishlist = async () => {
    try {
      const products = await WishlistService.getWishlist();
      setWishlistItems(products);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useQuery("wishlist", fetchWishlist);

  const handleClearWishlist = async () => {
    try {
      await WishlistService.clearWishlist();
      setWishlistItems([]);
      setIsSnackbarOpen(true);
    } catch (error) {
      console.error("Error clearing wishlist:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.wishlist}>
        <CustomSnackbar
          isSnackbarOpen={isSnackbarOpen}
          setIsSnackbarOpen={setIsSnackbarOpen}
          message="Wishlist cleared!"
        />
        <Container>
          <div className="wishlist-header">
            <h3>
              Keep your favorites in one place and make them yours when you're
              ready!
            </h3>
            <Popconfirm
              title="Clear wisdlist"
              description="Are you sure to clear your wishlist?"
              icon={<ErrorOutlineIcon style={{ color: "red" }} />}
              onConfirm={handleClearWishlist}
              okText="Yes"
              cancelText="No"
            >
              <div className="clear-wishlist">
                <DeleteForeverIcon />
                <p>clear my wishlist</p>
              </div>
            </Popconfirm>
          </div>
          <div>
            {wishlistItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <CardsContainer>
                {wishlistItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    inWishlist={true}
                  />
                ))}
              </CardsContainer>
            )}
          </div>
        </Container>
      </SectionContainer>
    </MainLayout>
  );
};

const Container = styled.div`
  gap: 1rem;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  .wishlist-header {
    display: flex;
    padding: 1rem;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 25px rgba(4, 42, 78, 0.17);
    background-color: ${({ theme }) => theme.colors.secondary_dark};
    h3 {
      margin: 0;
      font-weight: 500;
      font-family: "Delius", serif;
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .clear-wishlist {
    gap: 0.5rem;
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
    background-color: ${({ theme }) => theme.colors.primary_dark};
    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.white};
    }
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const CardsContainer = styled.div`
  gap: 1rem;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
`;
