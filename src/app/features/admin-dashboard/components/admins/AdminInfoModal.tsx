import React, { useEffect, useState } from "react";
import { User } from "../../../../types";
import { CustomModal } from "../../../../components/common";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";

interface AdminInfoModalProps {
  open: boolean;
  onClose: () => void;
  user: User;
  handleSendEmail: (userId: number, subject: string, text: string) => void;
}
export const AdminInfoModal: React.FC<AdminInfoModalProps> = ({
  open,
  onClose,
  user,
  handleSendEmail,
}) => {
  const [emailSubject, setEmailSubject] = useState("");
  const [emailText, setEmailText] = useState("");
  useEffect(() => {
    setEmailSubject("");
    setEmailText("");
  }, [open]);
  return (
    <CustomModal open={open} onClose={onClose}>
      <Container>
        <Title>Admin Information</Title>
        <InfoGrid>
          <InfoItem>
            <Label>Name:</Label>
            <Value>{`${user.firstName} ${user.lastName}`}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Username:</Label>
            <Value>{user.username}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Status:</Label>
            <StatusValue active={user.enabled}>
              {user.enabled ? "Active" : "Inactive"}
            </StatusValue>
          </InfoItem>
          <InfoItem>
            <Label>Account:</Label>
            <Value>
              {!user.accountNonLocked
                ? "Locked"
                : !user.accountNonExpired
                ? "Expired"
                : !user.credentialsNonExpired
                ? "Credentials Expired"
                : "Valid"}
            </Value>
          </InfoItem>
        </InfoGrid>
        <EmailSection>
          <EmailInput
            type="text"
            placeholder="Subject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
          />
          <EmailTextArea
            placeholder="Email content..."
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
          />
        </EmailSection>
        <ButtonContainer>
          <EmailButton
            onClick={() => handleSendEmail(user.id, emailSubject, emailText)}
          >
            <FaEnvelope />
            <span>Send Email</span>
          </EmailButton>
        </ButtonContainer>
      </Container>
    </CustomModal>
  );
};

const Container = styled.div`
  padding: 1rem 2.5rem;
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.75rem;
  font-weight: 600;
  font-family: "Overlock", sans-serif;
  width: 100%;
  text-align: center;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  background-color: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
  &:hover {
    background-color: #f1f5f9;
  }
`;

const Label = styled.span`
  font-weight: 600;
  width: 120px;
  color: #64748b;
  font-size: 0.95rem;
`;

const Value = styled.span`
  color: #334155;
  font-size: 0.95rem;
`;

const StatusValue = styled(Value)<{ active: boolean }>`
  color: ${(props) => (props.active ? "#059669" : "#dc2626")};
  font-weight: 600;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => (props.active ? "#059669" : "#dc2626")};
    margin-right: 8px;
    box-shadow: 0 0 0 2px ${(props) => (props.active ? "#dcfce7" : "#fee2e2")};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const EmailButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #2557a7;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #1e4785;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const EmailSection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EmailInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #2557a7;
    box-shadow: 0 0 0 1px #2557a7;
  }
`;

const EmailTextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  width: 100%;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2557a7;
    box-shadow: 0 0 0 1px #2557a7;
  }
`;
