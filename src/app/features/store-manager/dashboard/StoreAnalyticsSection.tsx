import styled from "styled-components";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { DashboardCard, VerticalContainer } from "./StyledComponents";
import { LowStock } from "./components/LowStock";
import { Product } from "../../../types";

// TODO: fix responsive

interface StoreAnalyticsSectionProps {
  lowStock: Product[];
}
export const StoreAnalyticsSection: React.FC<StoreAnalyticsSectionProps> = ({
  lowStock,
}) => {
  const topProducts = [
    { name: "product1", id: 1, orders: 10, revenue: 200 },
    { name: "product2", id: 2, orders: 5, revenue: 100 },
    { name: "product3", id: 3, orders: 2, revenue: 40 },
    { name: "product3", id: 3, orders: 2, revenue: 40 },
    { name: "product3", id: 3, orders: 2, revenue: 40 },
  ];

  return (
    <Container className="main">
      <DashboardCard style={{ gridArea: "card1" }}>
        <MonetizationOnIcon />
        <div>
          <h6>Total revenues</h6>
          <p>
            2000$<span>/month</span>
          </p>
        </div>
      </DashboardCard>
      <DashboardCard style={{ gridArea: "card2" }}>
        <CheckCircleIcon />
        <div>
          <h6>Completed orders</h6>
          <p>
            200<span>/month</span>
          </p>
        </div>
      </DashboardCard>
      <DashboardCard style={{ gridArea: "card3" }}>
        <PendingIcon />
        <div>
          <h6>Pending orders</h6>
          <p>10</p>
        </div>
      </DashboardCard>
      <DashboardCard style={{ gridArea: "card4" }}>
        <DonutLargeIcon />
        <div>
          <h6>In-progress orders</h6>
          <p>2</p>
        </div>
      </DashboardCard>
      <VerticalContainer style={{ gridArea: "chart1" }}>
        <p>Revenues</p>
      </VerticalContainer>
      <VerticalContainer style={{ gridArea: "topProducts" }}>
        <p>Top Products by orders</p>
        <div
          className="product"
          style={{
            fontSize: "0.9rem",
            backgroundColor: "rgba(255, 140, 0, 0.3)",
            padding: "0.2rem",
          }}
        >
          <p>Name</p>
          <p>ID</p>
          <p>Orders</p>
          <p>Revenue</p>
        </div>
        {topProducts.map((product, index) => (
          <div key={product.id} className="product">
            <p>
              <span>{index + 1}.</span> {product.name}
            </p>
            <p>{product.id}</p>
            <p>{product.orders}</p>
            <p>{product.revenue}$</p>
          </div>
        ))}
      </VerticalContainer>

      <LowStock lowStock={lowStock}/>
      <VerticalContainer style={{ gridArea: "categories1" }}>
        <p>Revenue by categories</p>
      </VerticalContainer>
      <VerticalContainer style={{ gridArea: "map" }}>
        <p>Revenue by location</p>
      </VerticalContainer>
    </Container>
  );
};

const Container = styled.div`
  grid-template-columns: 1fr 0.5fr 0.5fr 1fr 1fr 2fr;
  grid-template-rows: 1fr 4fr 3fr;
  grid-template-areas:
    "card1 card2 card2 card3 card4 categories1"
    "chart1 chart1 chart1 chart1 chart1 categories1"
    "lowStock lowStock topProducts topProducts topProducts map";
  .product {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 0.5rem;
    grid-template-rows: 1fr;
    width: 100%;
    span {
      color: ${({ theme }) => theme.colors.orange};
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;
