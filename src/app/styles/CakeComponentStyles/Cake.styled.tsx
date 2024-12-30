import styled from "styled-components";

export const CakePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.3fr 1fr; /* Left and right columns smaller, middle column larger */
  height: 120vh; /* Full viewport height */
  padding: 0rem;
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
  /* margin-top: 10px;
 margin-bottom:50px; */
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
   background-color: #ffffff;
  color: #141313;
  width: 7.5em;
  height: 4.3em;
  border: #C47B83 0.17em solid;
  border-radius: 11px;
  text-align: center;
  transition: all 0.6s ease;
  margin-top: 10px;

  &:hover {
    //background-color: ${({theme}) => theme.colors.secondary};
    transform: scale(1.05);
    cursor: pointer;
  }

`
