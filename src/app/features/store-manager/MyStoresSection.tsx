import { useEffect } from "react";
import { useQuery } from "react-query";
import { useAuth } from "../../context";
import { UnauthorizedPage } from "../../pages";
import { StoreManagerService } from "../../api";
import styled from "styled-components";
import { ManagerStoreCard } from "./ManagerStoreCard";

//TODO: add new store button 
// fix responsive
export const MyStoresSection = () => {
  const { user } = useAuth();
  if (!user?.roles.includes("STORE_MANAGER")) {
    return <UnauthorizedPage />;
  }
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // fetch all user's stores
  const {
    data: stores,
    isLoading,
    error,
  } = useQuery(["my_stores"], () => StoreManagerService.getStores(), {
    cacheTime: 0,
  });

  return (
    <Container>
      {isLoading && <div>Loading...</div>}
      <Header>
        <p className="store">Store</p>
        <p className="status">Status</p>
        <p className="pending">pending orders</p>
        <p className="inprogress">inprogress orders</p>
      </Header>
      {stores && stores.map((store) => <ManagerStoreCard store={store} />)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: rgb(219, 219, 219);
  color: ${({ theme }) => theme.colors.black};
  padding: 1rem;
  width: 100%;
  display: flex;
  gap: 1rem;

  align-items: center;
  margin-bottom: 1rem;
  p {
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    font-family: "Overlock", serif;
    font-weight: 700;
    margin: 0;
  }
  .store {
    width: 25vw;
  }
  .status {
    width: 12vw;
  }
  .pending {
    width: 12vw;
  }
  .inprogress {
    width: 12vw;
  }
`;
