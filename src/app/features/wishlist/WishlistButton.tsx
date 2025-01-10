import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth } from "../../context";
import { CustomModal } from "../../components/common";
import { PleaseLoginModal } from "../../pages";
import { WishlistService } from "../../api/wishlistService";

interface WishlistButtonProps {
  isWishlisted: boolean;
  setIsWishlisted: (isWishlisted: boolean) => void;
  productId: number;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  isWishlisted,
  setIsWishlisted,
  productId,
}) => {
  const { isLoggedIn } = useAuth();
  const [isWishlistErrorOpen, setIsWishlistErrorOpen] = useState(false);

  const handleWishlistClick = async () => {
    if (!isLoggedIn) {
      setIsWishlistErrorOpen(true);
      return;
    }
    if (isWishlisted) {
      WishlistService.deleteProduct(productId);
      setIsWishlisted(false);
    } else {
      WishlistService.addProduct(productId);
      setIsWishlisted(true);
    }
  };
  return (
    <>
      <CustomModal
        open={isWishlistErrorOpen}
        onClose={() => setIsWishlistErrorOpen(false)}
      >
        <PleaseLoginModal message="Please login to add this product to your wishlist!" />
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
