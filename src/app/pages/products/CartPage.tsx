import { useQuery } from "react-query";
import { CartService } from "../../api";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { CartItemDto, SectionIdEnum } from "../../types";
import { CartSection, EmptyCart } from "../../features";
import { useEffect, useState } from "react";

export const CartPage = () => {
  const { data: cartItems } = useQuery(["cart"], CartService.getCart);
  const [items, setItems] = useState<CartItemDto[]>([]);

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
    if (cartItems?.data) {
      setItems(cartItems.data);
    }
  }, [cartItems]);

  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.cart}>
        {items?.length ? (
          <CartSection cartItems={items} setItems={setItems} />
        ) : (
          <EmptyCart />
        )}
      </SectionContainer>
    </MainLayout>
  );
};
