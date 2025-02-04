import { useQuery } from "react-query";
import { CartService, OrderService } from "../../api";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { CartItemDto, SectionIdEnum } from "../../types";
import { CartSection, EmptyCart } from "../../features";
import { useEffect, useState } from "react";
import { CustomSnackbar } from "../../components/common";
import { paymentLogic } from "./OrderLogic";
import { Order } from "../../types/shopping/Order.types";

export const CartPage = () => {
  const { data: cartItems, refetch: refetchCart } = useQuery(["cart"], CartService.getCart);
  const [items, setItems] = useState<CartItemDto[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<CartItemDto[] | undefined>(
    undefined
  );
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [address, setAddress] = useState<string>("");

  const [snackbarInfo, setSnackbarInfo] = useState<{
    message: string;
    severity: "success" | "error" | "warning" | "info";
  }>({
    message: "",
    severity: "success",
  });

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
    if (cartItems?.data) {
      setItems(cartItems.data);
    }
  }, [cartItems]);

  const handlePayment = async () => {
    if (!selectedItems || selectedItems.length === 0) {
      setSnackbarInfo({
        message: `please select items to purchase`,
        severity: "info",
      });
      setIsSnackbarOpen(true);
      return;
    }
    if (address === "") {
      setSnackbarInfo({
        message: `please enter a valid address`,
        severity: "error",
      });
      setIsSnackbarOpen(true);
      return;
    }
    selectedItems?.map((item) => {
      const { product } = item.cartItem;
      const isAvailable =
        product.isAvailable &&
        (!product.needStock || item.cartItem.quantity <= product.stock);
      if (!isAvailable) {
        setSnackbarInfo({
          message: `product ${product.name} is not available`,
          severity: "error",
        });
        setIsSnackbarOpen(true);
        return;
      }
    });

    const order: Order = paymentLogic(selectedItems, address);
    console.log(order);
    // TODO: send order to backend
    const response = await OrderService.placeOrder(order);
    if(response.status === 200){
      setSnackbarInfo({
        message: `Order placed successfully`,
        severity: "success",
      });
      setIsSnackbarOpen(true);
      // send request to delete cart items
      await CartService.deleteItems(selectedItems.map(item => item.cartItem.id));
      // refresh cart items
      refetchCart();
    }
  };

  useEffect(() => {
    const storeIds = selectedItems?.map((item) => item.cartItem.storeId);
    const uniqueStoreIds = [...new Set(storeIds || [])];
    setDeliveryCost && setDeliveryCost(uniqueStoreIds.length * 5);
  }, [selectedItems]);
  return (
    <MainLayout>
      <CustomSnackbar
        isSnackbarOpen={isSnackbarOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
        message={snackbarInfo.message}
        type={snackbarInfo.severity}
      />
      <SectionContainer sectionId={SectionIdEnum.cart}>
        {items?.length ? (
          <CartSection
            cartItems={items}
            setItems={setItems}
            setSelectedItems={setSelectedItems}
            handlePayment={handlePayment}
            deliveryCost={deliveryCost}
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            address={address}
            setAddress={setAddress}
          />
        ) : (
          <EmptyCart />
        )}
      </SectionContainer>
    </MainLayout>
  );
};
