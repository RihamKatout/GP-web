import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Category, Store } from "../../../types";

interface ChartProps {
  stores: Store[];
  categories: Category[];
}
export const StoresByCategoriesChart: React.FC<ChartProps> = ({
  stores,
  categories,
}) => {
  const data = categories.map((category) => {
    const storesInCategory = stores.filter(
      (store) => store.storeCategoryId === category.id
    ).length;
    return {
      name: category.name,
      value: storesInCategory,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
  });
  return (
    <Container>
      <p style={{ textAlign: "center" }}>Categories By Stores</p>
      <Wrapper>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <StyledList>
          {data.map((item) => (
            <li key={item.name} className="text-gray-700">
              <span style={{ color: item.color }}>●</span> {item.name}-
              {item.value.toLocaleString()}
            </li>
          ))}
        </StyledList>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  grid-area: chart;
  flex-direction: column;
  p {
    margin: 0;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  gap: 0.5rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    gap: 0.5rem;
    display: flex;
    font-size: 0.9rem;
    align-items: center;
  }
`;
