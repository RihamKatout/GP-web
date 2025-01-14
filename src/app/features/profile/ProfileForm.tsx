import React from 'react';
import styled from 'styled-components';

interface UserInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  avatar: string; // Add avatar to the userInfo interface
}

interface ProfileFormProps {
  userInfo: UserInfo;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
  handleAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // New prop for avatar change
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  userInfo,
  handleChange,
  handleSave,
  handleAvatarChange, // Destructure the new prop
}) => {
  return (
    <EditForm>
      
      <FormRow>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={userInfo.lastName}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <label>Profile Picture:</label>
        {/* <AvatarContainer> */}
          {/* <img src={userInfo.avatar} alt="Current Avatar" /> */}
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        {/* </AvatarContainer> */}
      </FormRow>

      <SaveButton onClick={handleSave}>Save</SaveButton>
    </EditForm>
  );
};

// Styled components
const EditForm = styled.div`
  //margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 18px;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  label {
    flex: 1;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.primary_dark};
    font-weight: 700;
    font-family: "Overlock", serif;
  }

  input {
    flex: 2;
    padding: 8px;
    outline: none;
    border-radius: 10px;
    font-family: "Delius";
    border: 1px solid rgb(220, 220, 220);
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5);
      &:focus {
        border: 2px solid #e4bcbc;
      }
  }
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  align-items: center;
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
