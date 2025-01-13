import React, { useState } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../../components/Layout';
import { ProfileForm } from '../../features/profile/ProfileForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';
import ProfileActivity from '../../features/profile/ProfileActivity';

export const ProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState('Profile'); // Tracks the active section
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logoutContext } = useAuth();
  const [userInfo, setUserInfo] = useState({
    avatar: 'https://via.placeholder.com/80',
    firstName: 'Jane',
    lastName: 'Doe',
    phone: '123-456-7890',
    email: 'jane.doe@example.com',
    password: '',
  });

  const handleEditClick = () => setIsEditing(!isEditing);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic (e.g., API call)
  };
  const handleLogout = () => {
    logoutContext();
    navigate("/");
  };

  return (
    <MainLayout>
      <DashboardContainer>
        <Sidebar>
          <SidebarItem
            onClick={() => setSelectedSection('Profile')}
            active={selectedSection === 'Profile'}
          >
            Profile
          </SidebarItem>
          <SidebarItem
            onClick={() => setSelectedSection('Shopping')}
            active={selectedSection === 'Shopping'}
          >
            Shopping
          </SidebarItem>
          <SidebarItem
            onClick={() => setSelectedSection('Activity')}
            active={selectedSection === 'Activity'}
          >
            Activity
          </SidebarItem>
          <SidebarItem
            onClick={handleLogout}
            active={selectedSection === 'Logout'}
          >
            Logout
          </SidebarItem>
        </Sidebar>

        <MainContent>
          {selectedSection === 'Profile' && (
            <>
              <ProfileHeader>
                <Avatar src={userInfo.avatar} alt="User Avatar" />
                <div>
                  <UserName>{`${userInfo.firstName} ${userInfo.lastName}`}</UserName>
                  <UserInfo>{userInfo.email}</UserInfo>
                </div>
                <EditButton onClick={handleEditClick}>
                  {isEditing ? 'Cancel' : 'Edit'}
                </EditButton>
              </ProfileHeader>
              {isEditing && (
                <ProfileForm
                  userInfo={userInfo}
                  handleChange={handleChange}
                  handleSave={handleSave}
                />
              )}
            </>
          )}

          {selectedSection === 'Shopping' && (
            <Section>
              <SectionTitle>Shopping Cart</SectionTitle>
              <DashboardContent>Your shopping cart is empty.</DashboardContent>
            </Section>
          )}

          {selectedSection === 'Activity' && (
            <Section>
              <ProfileActivity />
            </Section>
          )}

          {selectedSection === 'Logout' && (
            <Section>
              <SectionTitle>Logout</SectionTitle>
              <DashboardContent>You have logged out successfully.</DashboardContent>
            </Section>
          )}
        </MainContent>
      </DashboardContainer>
    </MainLayout>
  );
};

// Styled components
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f9;
  padding-top: 60px;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
`;

const SidebarItem = styled.div<{ active: boolean }>`
  margin: 15px 0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#555' : 'transparent')};

  &:hover {
    background-color: #555;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`;

const UserName = styled.h2`
  margin: 0;
`;

const UserInfo = styled.p`
  color: #777;
`;

const EditButton = styled.button`
  margin-left: auto;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Section = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
`;

const SectionTitle = styled.h3`
  margin: 0;
`;

const DashboardContent = styled.p`
  color: #555;
`;
