import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewSection from './ReviewSection'; // Import the ReviewSection component
import SimilarProducts from './SimilarProducts'; // Create a SimilarProducts component

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('similarProducts');

  return (
    <Container>
      <TabHeader>
        <TabButton
          isActive={activeTab === 'similarProducts'}
          onClick={() => setActiveTab('similarProducts')}
        >
          Similar Products
        </TabButton>
        <TabButton
          isActive={activeTab === 'reviews'}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </TabButton>
      </TabHeader>
      <TabContent>
        {activeTab === 'similarProducts' && <SimilarProducts />}
        {activeTab === 'reviews' && <ReviewSection />}
      </TabContent>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 3rem ;
  padding: 1rem;
  width: 1010px;
  height: 400px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TabHeader = styled.div`
  display: flex;
  //justify-content: space-around;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

interface TabButtonProps {
  isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  flex: 1;
  padding: 1rem;
  border: none;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary : 'transparent'};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  cursor: pointer;
  border-radius: 15px 15px 0 0;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary_light};
  }
`;

const TabContent = styled.div`
  padding: 1rem;
`;

export default TabsContainer;
