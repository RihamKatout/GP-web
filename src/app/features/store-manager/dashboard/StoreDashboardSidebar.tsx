import styled from "styled-components";
import { StoreSidebarItems } from "./StoreSidebarItems";
import React from "react";
import { StoreDashboardSectionsEnum } from "../../../types";

interface StoreDashboardSidebarProps {
  selectedSection: StoreDashboardSectionsEnum;
  setSelectedSection: (section: StoreDashboardSectionsEnum) => void;
  setProductId: (productId?: number) => void;
}
export const StoreDashboardSidebar: React.FC<StoreDashboardSidebarProps> = ({
  selectedSection,
  setSelectedSection,
  setProductId,
}) => {
  return (
    <Container>
      {StoreSidebarItems.map((item) => (
        <SidebarItem
          key={item.id}
          active={selectedSection === item.section}
          onClick={() => {
            setSelectedSection(item.section);
            setProductId(undefined);
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
  border-radius: 0 1rem 0 0;
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
