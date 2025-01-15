import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { ProfileInfoSection, Sidebar } from "../../features";
import { ProfileSectionsEnum } from "../../types";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const { logoutContext, user } = useAuth();
  const [selectedSection, setSelectedSection] = useState<ProfileSectionsEnum>(
    ProfileSectionsEnum.Profile
  );

  if (!user) {
    navigate("/login", { state: { from: "/profile" } });
  }

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update avatar logic here (e.g., API call to update avatar)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <MainLayout>
      <UserProfileContainer>
        <Sidebar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />

        <MainContent>
          {selectedSection === ProfileSectionsEnum.Profile && <ProfileInfoSection />}
          {/* {selectedSection === SectionName.Profile && ( */}
          {/* <>
            <ProfileContent>
              <ProfileHeader isEditing={isEditing}>
                <ProfileHeaderColumn>
                  <Avatar
                    src={user?.userImageURL || riham}
                    alt="User Avatar"
                    isEditing={isEditing}
                  />
                  <UserName>{`${user?.firstName || ""} ${
                    user?.lastName || ""
                  }`}</UserName> */}
          {/* <UserInfo>{user?.firstName || ''}</UserInfo> */}
          {/* </ProfileHeaderColumn>
                <EditButtonWrapper isEditing={isEditing}>
                  <EditButton onClick={handleEditClick}>
                    {isEditing ? "Cancel" : "Edit"}
                  </EditButton>
                </EditButtonWrapper>
              </ProfileHeader>

              {isEditing && user && (
                <ProfileFormWrapper>
                  <ProfileForm
                    userInfo={user}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    handleAvatarChange={handleAvatarChange}
                  />
                </ProfileFormWrapper>
              )}
            </ProfileContent> */}
          {/* 
            <ProfileShopping />
            <ProfileActivity />
          </> */}
          {/* )} */}
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
