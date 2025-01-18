import { useState } from "react";
import styled from "styled-components";
import StoreIcon from "@mui/icons-material/Store";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Product, StoreDashboardSectionsEnum } from "../../types";
import {
  ProductDetailsSection,
  ProductsManagementSection,
  StoreAnalyticsSection,
  StoreDashboardSidebar,
} from "../../features";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { StoreManagerService } from "../../api";

export const StoreDashboardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productId, setProductId] = useState<number | undefined>(undefined);
  const [lowStock, setLowStock] = useState<Product[]>([]);
  const [selectedSection, setSelectedSection] =
    useState<StoreDashboardSectionsEnum>(StoreDashboardSectionsEnum.Dashboard);

  // get analytics data
  const { data } = useQuery(
    ["analytics", id],
    () => StoreManagerService.getStoreAnalytics(Number(id)),
    {
      enabled: !!id,
      onSuccess: (data) => {
        setLowStock(data.lowStock || []);
      },
      refetchOnWindowFocus: false,
    }
  );

  const handleOpenProduct = (productId: number) => {
    setSelectedSection(StoreDashboardSectionsEnum.ProductDetails);
    setProductId(productId);
  };

  return (
    <Container>
      <StoreName>
        <StoreIcon fontSize="large" />
        <p>{data?.storeName}</p>
      </StoreName>
      <SectionName>
        <p>{selectedSection}</p>
      </SectionName>
      <Home>
        <NotificationsIcon fontSize="large" />
        <button onClick={() => navigate("/")}>Back to home</button>
      </Home>
      <StoreDashboardSidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setProductId={setProductId}
      />

      {selectedSection === StoreDashboardSectionsEnum.ProductDetails &&
        productId && <ProductDetailsSection productId={productId}/>}
      {selectedSection === StoreDashboardSectionsEnum.Dashboard && (
        <StoreAnalyticsSection
          lowStock={lowStock}
          handleOpenProduct={handleOpenProduct}
        />
      )}

      {selectedSection === StoreDashboardSectionsEnum.Products && (
        <ProductsManagementSection
          lowStock={lowStock}
          storeId={Number(id)}
          storeCategoryId={data?.storeCategoryId || 0}
          handleOpenProduct={handleOpenProduct}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4.5fr 1fr;
  grid-template-rows: 1fr 10fr;
  gap: 1rem;
  grid-template-areas:
    "name sectionName home"
    "sidebar main main";
  p {
    margin: 0;
  }
  .main {
    gap: 0.5rem;
    width: auto;
    height: fit-content;
    grid-area: main;
    display: grid;
    padding: 0 1rem 1rem 1rem;
    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.gray};
    }
    & > div {
      gap: 0.5rem;
      padding: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
      background-color: ${({ theme }) => theme.colors.gray_light};
    }
  }
`;

const StoreName = styled.div`
  gap: 0.5rem;
  display: flex;
  padding: 1rem;
  grid-area: name;
  align-items: center;
  justify-content: flex-start;
  p {
    font-weight: 700;
    font-size: 1.5rem;
  }
  svg {
    color: ${({ theme }) => theme.colors.secondary_dark};
  }
`;

const SectionName = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  p {
    font-weight: 700;
    grid-area: sectionName;
    font-size: 2.5rem;
  }
`;

const Home = styled.div`
  gap: 1rem;
  padding: 1rem;
  display: flex;
  grid-area: home;
  align-items: center;
  justify-content: flex-end;
  button {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.success};
  }
`;
