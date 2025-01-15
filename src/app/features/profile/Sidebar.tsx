import React from "react";
import styled from "styled-components";
import { SidebarItems } from "..";
import { ProfileSectionsEnum } from "../../types";
import { useAuth } from "../../context";

interface SidebarProps {
  selectedSection: ProfileSectionsEnum;
  setSelectedSection: (section: ProfileSectionsEnum) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedSection,
  setSelectedSection,
}) => {
  const { user } = useAuth();
  return (
    <SidebarContainer>
      {SidebarItems.map((item) => {
        if (item.id === 3 && !user?.roles.includes("STORE_MANAGER")) {
          return null;
        }
        if (
          item.id === 4 &&
          (!user?.roles.includes("ADMIN") || !user?.roles.includes("SUPPORT"))
        ) {
          return null;
        }
        return (
          <SidebarItem
            key={item.id}
            onClick={() => setSelectedSection(item.section)}
            active={selectedSection === item.section}
          >
            {item.icon}
            <p>{item.title}</p>
          </SidebarItem>
        );
      })}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  gap: 1rem;
  display: flex;
  width: 20vw;
  height: auto;
  color: white;
  padding: 20px;
  max-width: 250px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
`;

const SidebarItem = styled.div<{ active: boolean }>`
  display: flex;
  gap: 0.5rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary : "transparent"};
  p {
    font-size: 1.2rem;
    margin: 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:last-child {
    margin-top: auto;
  }
  @media (max-width: 860px) {
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 760px) {
    &:last-child {
      margin-top: 0;
    }
  }
  @media (max-width: 700px) {
    p {
      display: none;
    }
    justify-content: center;
  }
`;
