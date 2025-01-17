import { useState } from "react";
import styled from "styled-components";
import StoreIcon from "@mui/icons-material/Store";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { StoreDashboardSectionsEnum } from "../../types";
import { StoreDashboardSection, StoreDashboardSidebar } from "../../features";
import { useParams } from "react-router-dom";

export const StoreDashboardPage = () => {
  const [selectedSection, setSelectedSection] =
    useState<StoreDashboardSectionsEnum>(StoreDashboardSectionsEnum.Dashboard);
  const { id } = useParams();

  return (
    <Container>
      <StoreName>
        <StoreIcon fontSize="large" />
        <p>Sweet touches</p>
      </StoreName>
      <SectionName>
        <p>{selectedSection}</p>
      </SectionName>
      <Home>
        <NotificationsIcon fontSize="large" />
        <button>Back to home</button>
      </Home>
      <StoreDashboardSidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      {selectedSection === StoreDashboardSectionsEnum.Dashboard && (
        <StoreDashboardSection />
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
