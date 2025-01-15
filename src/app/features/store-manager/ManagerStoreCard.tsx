import React from "react";
import { Store, StoreStatusEnum } from "../../types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { DefaultStoreImg } from "../../../assets";
interface ManagerStoreCardProps {
  store: Store;
}
export const ManagerStoreCard: React.FC<ManagerStoreCardProps> = ({
  store,
}) => {
  const navigate = useNavigate();
  const active = store?.status === StoreStatusEnum.ACTIVE;

  return (
    <Container
      active={active}
      key={store.id}
      onClick={() => navigate(`/store-dashboard/${store.id}`)}
    >
      <StoreInfo>
        {" "}
        <img src={store.logoURL || DefaultStoreImg} alt={store.name} />
        <h2>{store.name}</h2>
      </StoreInfo>
      <p className="status">
        <span>{store.status}</span>
      </p>
      <p className="pending">12</p>
      <p className="inprogress">2</p>
      <DashboardContainer>
        <DashboardIcon />
        <p>Dashboard</p>
      </DashboardContainer>
    </Container>
  );
};

const Container = styled.div<{ active: boolean }>`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem 1rem 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;
  p {
    margin: 0;
  }
  .status {
    span {
      font-size: 0.9rem;
      padding: 5px 10px;
      width: fit-content;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme, active }) =>
        active ? theme.colors.success : theme.colors.danger};
      border-radius: 0.5rem;
    }
    width: 12vw;
  }
  .pending {
    width: 12vw;
  }
  .inprogress {
    width: 12vw;
  }
`;

const StoreInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  width: 25vw;
  h2 {
    margin: 0;
    font-family: "Overlock", serif;
    font-weight: 700;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ccc;
  }
`;

const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  p {
    margin-left: 5px;
  }
`;
