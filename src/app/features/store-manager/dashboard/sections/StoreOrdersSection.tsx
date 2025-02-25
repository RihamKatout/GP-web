import React from "react";
import { useQuery } from "react-query";
import { OrderService } from "../../../../api";
import { Order } from "../../../../types/shopping/Order.types";

interface props {
  storeId: number;
}
const StoreOrdersSection: React.FC<props> = ({ storeId }) => {
  const { data: orders, refetch } = useQuery(
    ["store_orders"],
    () => OrderService.getStoreOrders(storeId),
    {
      refetchOnWindowFocus: false,
    }
  );

  // New function to set suborder status to "in progress".
  const setInProgress = async (subOrderId: number) => {
    await OrderService.updateSubOrderStatus(subOrderId, "in progress");
    refetch();
  };

  return (
    <div>
      {orders?.map((order: any) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {/* Display all order details */}
          <div>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Total Price:</strong> {order.totalPrice}</p>
            {/* ...display additional order details as needed... */}
          </div>
          {/* Check and display suborders with button */}
          {order.subOrders && Array.isArray(order.subOrders) && (
            <div style={{ marginTop: "10px", paddingLeft: "10px", borderTop: "1px dashed #aaa" }}>
              <p><strong>SubOrders:</strong></p>
              {order.subOrders.map((subOrder: any) => (
                <div key={subOrder.id} style={{ marginBottom: "6px" }}>
                  <span>
                    <strong>ID:</strong> {subOrder.id} | <strong>Status:</strong> {subOrder.status}
                  </span>
                  <button 
                    onClick={() => setInProgress(subOrder.id)}
                    style={{ marginLeft: "10px", padding: "4px 8px" }}
                  >
                    Set In Progress
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StoreOrdersSection;
