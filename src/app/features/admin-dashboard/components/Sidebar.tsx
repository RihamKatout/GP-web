import styled from "styled-components";
import React from "react";
import { DashboardSectionsEnum } from "../../../types";
import { SidebarItems } from "./SidebarItems";

interface DashboardSidebarProps {
  selectedSection: DashboardSectionsEnum;
  setSelectedSection: (section: DashboardSectionsEnum) => void;
}

export const Sidebar: React.FC<DashboardSidebarProps> = ({
  selectedSection,
  setSelectedSection,
}) => {
  return (
    <Container>
      {SidebarItems.map((item) => (
        <SidebarItem
          key={item.id}
          active={selectedSection === item.section}
          onClick={() => {
            setSelectedSection(item.section);
          }}
        >
          {item.icon}
          <p>{item.title}</p>
        </SidebarItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  gap: 1rem;
  height: auto;
  padding: 1rem;
  display: flex;
  grid-area: sidebar;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  p {
    margin: 0;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SidebarItem = styled.div<{ active: boolean }>`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  border-radius: 0.5rem;
  gap: 1rem;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary : "transparent"};
  svg {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;
