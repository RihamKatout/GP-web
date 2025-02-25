import React, { useState } from "react";
import { useQuery } from "react-query";
import { OrderService } from "../../api";
import { Order } from "../../types/shopping/Order.types";

// Define style objects
const containerStyle = {
  padding: "2rem",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: "#f2f4f8",
};

const filterContainerStyle = {
  marginBottom: "1.5rem",
  display: "flex",
  alignItems: "center",
};

const labelStyle = {
  marginRight: "0.75rem",
  fontWeight: 600,
};

const selectStyle = {
  padding: "0.6rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  fontSize: "1rem",
};

const orderCardStyle = {
  backgroundColor: "#fff",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const subOrderStyle = {
  backgroundColor: "#f9fafb",
  padding: "1rem",
  borderRadius: "6px",
  margin: "1rem 0",
  borderLeft: "3px solid #0078d4",
};

const itemStyle = {
  padding: "0.75rem",
  margin: "0.5rem 0",
  border: "1px dashed #bbb",
  borderRadius: "4px",
  backgroundColor: "#fff",
};

export const MyOrdersSection = () => {
  const { data: orders, isLoading } = useQuery(
    ["my_orders"],
    () => OrderService.getUserOrders(),
    {
      cacheTime: 0,
    }
  );

  const [filterStatus, setFilterStatus] = useState("All");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  const filteredOrders = orders?.filter((order: Order) =>
    filterStatus === "All"
      ? true
      : order.subOrders?.some((subOrder) => subOrder.status === filterStatus)
  );

  return (
    <div style={containerStyle}>
      {/* Filter option */}
      <div style={filterContainerStyle}>
        <label htmlFor="statusFilter" style={labelStyle}>
          Filter by status:
        </label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={handleFilterChange}
          style={selectStyle}
        >
          {[
            "All",
            "PENDING",
            "DELIVERED",
            "REJECTED",
            "IN_PROGRESS",
            "COMPLETED",
            "CANCELED",
          ].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {/* Display orders */}
      <div>
        {isLoading && <p>Loading orders...</p>}
        {filteredOrders?.map((order: Order) => (
          <div
            key={order.id}
            style={orderCardStyle}
          >
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Total Price:</strong> ${order.totalPrice?.toFixed(2)}
            </p>
            <p>
              <strong>Delivery Cost:</strong> ${order.deliveryCost?.toFixed(2)}
            </p>
            {order.deliveryAddress && (
              <p>
                <strong>Delivery Address:</strong> {order.deliveryAddress}
              </p>
            )}
            <div>
              <strong>Sub Orders:</strong>
              {order.subOrders?.map((subOrder) => (
                <div
                  key={subOrder.id}
                  style={subOrderStyle}
                >
                  <p>
                    <strong>Status:</strong> {subOrder.status}
                  </p>
                  <p>
                    <strong>Order Date:</strong>{" "}
                    {new Date(subOrder.orderDate).toLocaleString()}
                  </p>
                  {subOrder.deliveryDate && (
                    <p>
                      <strong>Delivery Date:</strong>{" "}
                      {new Date(subOrder.deliveryDate).toLocaleString()}
                    </p>
                  )}
                  {subOrder.storeInfo && (
                    <p>
                      <strong>Store:</strong> {subOrder.storeInfo.storeName}
                    </p>
                  )}
                  <p>
                    <strong>Sub Total Price:</strong> $
                    {subOrder.totalPrice.toFixed(2)}
                  </p>
                  <div style={{ marginTop: "0.5rem", marginLeft: "20px" }}>
                    <strong>Items:</strong>
                    {subOrder.products?.map((item) => (
                      <div
                        key={item.id}
                        style={itemStyle}
                      >
                        <p>
                          <strong>Product:</strong> {item.productInfo?.name}
                        </p>
                        <p>
                          <strong>Quantity:</strong> {item.quantity}
                        </p>
                        <p>
                          <strong>Price:</strong> ${item.price?.toFixed(2)}
                        </p>
                        {item.message && (
                          <p>
                            <strong>Message:</strong> {item.message}
                          </p>
                        )}
                        {item.note && (
                          <p>
                            <strong>Note:</strong> {item.note}
                          </p>
                        )}
                        {item.description && (
                          <p>
                            <strong>Description:</strong> {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
