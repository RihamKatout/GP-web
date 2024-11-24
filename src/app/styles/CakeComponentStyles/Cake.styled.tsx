import styled from "styled-components";

export const CakePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; /* Left and right columns smaller, middle column larger */
  height: 100vh; /* Full viewport height */
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: #f0f0f0; /* Light background for left and right columns */
  
`;

export const MiddleColumn = styled(Column)`
  background-color: #fff; /* Different background color for the middle column */
  padding: 20px;
  margin-top: 80px;
  margin-bottom:50px;
  border-radius: 20px;
`;
export const CakeInput = styled.input`
    color: #090909;
  border: 0.2em solid ${({theme}) => theme.colors.secondary};
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  max-width: 190px;
`
export const ColumnContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 20px;

`
export const CakeButton = styled.button`
   background-color: #ffffff00;
  color: #141313;
  width: 8.5em;
  height: 2.9em;
  border: ${({theme}) => theme.colors.secondary} 0.2em solid;
  border-radius: 11px;
  text-align: center;
  transition: all 0.6s ease;
  margin-top: 10px;

  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
    cursor: pointer;
  }

`

