import { useQuery } from "react-query";
import { CartService } from "../../api";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { CartItem, SectionIdEnum } from "../../types";
import { CartSection, EmptyCart } from "../../features";
import { useEffect, useState } from "react";

export const CartPage = () => {
  const { data: cartItems } = useQuery(["cart"], CartService.getCart);
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
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
