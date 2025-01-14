import React from 'react';
import styled from 'styled-components';

interface UserInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

interface ProfileFormProps {
  userInfo: UserInfo;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ userInfo, handleChange, handleSave }) => {
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
      <SaveButton onClick={handleSave}>Save</SaveButton>
    </EditForm>
  );
};

const EditForm = styled.div`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  

  label {
    flex: 1;
    margin-right: 10px;
    font-weight: bold;
  }

  input {
    flex: 2;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
