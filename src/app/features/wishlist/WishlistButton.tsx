import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth } from "../../context";
import { CustomSnackbar, CustomModal } from "../../components/common";
import { PleaseLoginModal } from "../../pages";
import { WishlistService } from "../../api/wishlistService";

interface WishlistButtonProps {
  isWishlisted: boolean;
  setIsWishlisted: (isWishlisted: boolean) => void;
  productId: number;
  onWishlistRemove?: (productId: number) => void;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  isWishlisted,
  setIsWishlisted,
  productId,
  onWishlistRemove,
}) => {
  const { isLoggedIn } = useAuth();
  const [isWishlistErrorOpen, setIsWishlistErrorOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handleWishlistClick = async () => {
    if (!isLoggedIn) {
      setIsWishlistErrorOpen(true);
      return;
    }
    if (isWishlisted) {
      await WishlistService.deleteProduct(productId);
      setIsWishlisted(false);
      onWishlistRemove?.(productId);
    } else {
      await WishlistService.addProduct(productId);
      setIsWishlisted(true);
    }
    setIsSnackbarOpen(true);
  };
  return (
    <>
      <CustomSnackbar
        message={!isWishlisted ? "Removed from wishlist" : "Added to wishlist"}
        isSnackbarOpen={isSnackbarOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
      />
      <CustomModal
        open={isWishlistErrorOpen}
        onClose={() => setIsWishlistErrorOpen(false)}
      >
        <PleaseLoginModal
          message="Please login to add this product to your wishlist!"
          hasBackground={true}
        />
      </CustomModal>
      {isWishlisted ? (
        <FavoriteIcon className="wishlist" onClick={handleWishlistClick} />
      ) : (
        <FavoriteBorderIcon
          className="wishlist"
          onClick={handleWishlistClick}
        />
      )}
    </>
  );
};
