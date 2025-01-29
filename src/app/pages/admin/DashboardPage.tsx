import { useState } from "react";
import styled from "styled-components";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { DashboardSectionsEnum } from "../../types";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../features/admin-dashboard/components/Sidebar";
import { AdminsSection, StoresSection } from "../../features/admin-dashboard";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState<DashboardSectionsEnum>(
    DashboardSectionsEnum.Admins
  );

  // // get analytics data
  // const { data: analytics } = useQuery(
  //   ["analytics", id],
  //   () => StoreManagerService.getStoreAnalytics(Number(id)),
  //   {
  //     enabled: !!id,
  //     onSuccess: (data) => {
  //       setLowStock(data.lowStock || []);
  //       setCategories(data.productCategories || []);
  //     },
  //     refetchOnWindowFocus: false,
  //   }
  // );
  return (
    <Container>
      <SectionName>
        <p>{selectedSection}</p>
      </SectionName>
      <Home>
        <NotificationsIcon fontSize="large" />
        <button onClick={() => navigate("/")}>Back to home</button>
      </Home>
      <Sidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      {selectedSection === DashboardSectionsEnum.Stores && <StoresSection />}
      {selectedSection === DashboardSectionsEnum.Admins && <AdminsSection />}
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
    "sidebar sectionName home"
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
    padding: 1rem;
    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.gray};
    }
    & > div {
      padding: 0.8rem;
      display: flex;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
      background-color: ${({ theme }) => theme.colors.gray_light};
    }
  }
`;

const SectionName = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  p {
    font-weight: 700;
    grid-area: sectionName;
    font-size: 2rem;
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
