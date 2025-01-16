import styled from "styled-components";

export const CakePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.3fr 1fr; /* Left and right columns smaller, middle column larger */
  height: 110vh; /* Full viewport height */
  padding: 0rem;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: #f0f0f0; /* Light background for left and right columns */
  
`;

export const MiddleColumn = styled(Column)`
  background-color: #fff; /* Different background color for the middle column */
  //padding: 10px;
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
  color: ${({theme}) => theme.colors.primary_dark};
  width: 7.3em;
  height: 4.6em;
  border:  1px solid rgba(217, 217, 217, 0.5);
  border-radius: 15px;
  text-align: center;
  transition: all 0.6s ease;
  font-weight: bold;
  font-size: 1rem;
  font-family: 'Overlock', sans-serif; 
  &:hover {
    
    transform: scale(1.05);
    cursor: pointer;
  }background-color: ${({ theme }) => theme.colors.wight}; 
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

  &:hover {
    //background-color: ${({ theme }) => theme.colors.secondary}; 
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.028) inset;
  }

`
