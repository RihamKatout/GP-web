import { useEffect, useState } from "react";
import styled from "styled-components";
import { MainLayout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import {
  AddStoreSection,
  MyStoresSection,
  ProfileInfoSection,
  Sidebar,
} from "../../features";
import { ProfileSectionsEnum } from "../../types";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { logoutContext, user } = useAuth();
  const [selectedSection, setSelectedSection] = useState<ProfileSectionsEnum>(
    ProfileSectionsEnum.AddStore
  );

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
    if (selectedSection === ProfileSectionsEnum.Logout) {
      logoutContext();
      navigate("/");
    }
    if (selectedSection === ProfileSectionsEnum.AdminDashboard) {
      navigate("/dashboard");
    }
  }, [selectedSection]);

  if (!user) {
    navigate("/login", { state: { from: "/profile" } });
  }

  return (
    <MainLayout>
      <UserProfileContainer>
        <Sidebar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />

        <MainContent>
          {selectedSection === ProfileSectionsEnum.Profile && (
            <ProfileInfoSection setSelectedSection={setSelectedSection} />
          )}
          {selectedSection === ProfileSectionsEnum.MyStores && (
            <MyStoresSection />
          )}
          {selectedSection === ProfileSectionsEnum.AddStore && (
            <AddStoreSection setSelectedSection={setSelectedSection} />
          )}
        </MainContent>
      </UserProfileContainer>
    </MainLayout>
  );
};

// Styled components
const UserProfileContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  background-color: #f4f4f9;
  padding-top: 60px;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;
