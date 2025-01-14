import React, { useState } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../../components/Layout';
import { ProfileForm } from '../../features/profile/ProfileForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';
import ProfileActivity from '../../features/profile/ProfileActivity';
import ProfileShopping from '../../features/profile/ProfileShopping';
import riham from '../../../assets/store/riham.png'
export const ProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState('Profile'); // Tracks the active section
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logoutContext } = useAuth();
  const [userInfo, setUserInfo] = useState({
    avatar: riham,
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
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prev) => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleLogout = () => {
    logoutContext();
    navigate("/");
  };

  return (
    <MainLayout>
      <DashboardContainer>
        <Sidebar>
          <div>
            <img src={userInfo.avatar} alt="User Avatar" style={{ width: '80%' , borderRadius: '50%' , margin: '0 auto' , display: 'block'}} />
            <UserName style={{ textAlign: 'center' , marginBottom: '10px' }}>{`${userInfo.firstName} ${userInfo.lastName}`}</UserName>
          </div>
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
            <ProfileContent>
            <ProfileHeader isEditing={isEditing}>
        <ProfileHeaderColumn>
            <Avatar src={userInfo.avatar} alt="User Avatar" isEditing={isEditing} />
            <UserName>{`${userInfo.firstName} ${userInfo.lastName}`}</UserName>
            <UserInfo>{userInfo.email}</UserInfo>
        </ProfileHeaderColumn>
        <EditButtonWrapper isEditing={isEditing}>
              <EditButton onClick={handleEditClick}>
               {isEditing ? 'Cancel' : 'Edit'}
              </EditButton>
           </EditButtonWrapper>
          </ProfileHeader>
          
              {isEditing && (
                <ProfileFormWrapper>
                  <ProfileForm
                    userInfo={userInfo}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    handleAvatarChange={handleAvatarChange}
                  />
                </ProfileFormWrapper>
              )}
            </ProfileContent>
          
            <ProfileShopping />
            <ProfileActivity />
           </>
          )}

          {selectedSection === 'Shopping' && (
            <Section>
              <ProfileShopping/>
            </Section>
          )}

          {selectedSection === 'Activity' && (
            <Section>
              <ProfileActivity />
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
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  color: white;
  padding: 20px;
  border-radius: 1rem;
  border-right: 2px solid #555;
`;

const SidebarItem = styled.div<{ active: boolean }>`
  margin: 15px 0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ active, theme }) => (active ? theme.colors.secondary : 'transparent')};
  box-shadow: 0 1px 1.25px 0 rgba(217, 217, 217, 0.5),
      2px 0.5px 0.5px rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Avatar = styled.img<{ isEditing: boolean }>`
  width: ${({ isEditing }) => (isEditing ? '120px' : '80px')};
  height: ${({ isEditing }) => (isEditing ? '120px' : '80px')};
  border-radius: 50%;
  margin-right: 20px;
  margin-top: 20px;

  margin-bottom: 10px;
  object-fit: cover;
`;

const UserName = styled.h2`
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.primary_dark};
`;

const UserInfo = styled.p`
  margin: 5px ;
  color: #777;
`;

const EditButton = styled.button`
  margin-left: auto;
  padding: 18px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius:1.5rem;
  cursor: pointer;
  font-family: "Delius", serif;
  background-color: rgba(210, 110, 126, 0.9);
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5),
      2px 0.5rem 0.5rem rgba(255, 255, 255, 0.52) inset,
      0 0.25rem 0.5rem 0 rgba(212, 170, 185, 0.36) inset;
  &:hover {
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                    0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                    0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
        background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
const EditButtonWrapper = styled.div<{ isEditing: boolean }>`
  display: flex;
  justify-content: ${({ isEditing }) => (isEditing ? 'center' : 'flex-end')};
  margin-top: 20px; /* Adjust as needed for spacing */
  align-items: center;
  width: 63%; /* Ensures it spans the full width of the card */
`;


const Section = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
`;

const ProfileContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on small screens */
  }
`;

const ProfileFormWrapper = styled.div`
  flex: 1;
  background-color: white;
 // padding: 20px;
  border-radius: 1rem;
  box-shadow: 10px -4px 25px rgba(0, 0, 0, 0.2);
`;
const ProfileHeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;

  & > h2, & > p {
    text-align: center;
  }
`;
const ProfileHeader = styled.div<{ isEditing: boolean }>`
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 10px -4px 25px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  display:${({ isEditing }) => (isEditing ? 'grid' : 'flex')};
  grid-template-columns: ${({ isEditing }) => (isEditing ? '1fr' : 'none')};
  gap: ${({ isEditing }) => (isEditing ? '40px' : '0')};
  justify-content: space-between;
  //align-items: start;
`;


