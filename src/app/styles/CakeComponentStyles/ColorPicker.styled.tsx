import styled from "styled-components";
export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `
  
export const Heading = styled.h1`
font-size: 2.5rem;
margin: 50px;
/* font-weight: 400;
letter-spacing: -0.025em;
line-height: 1.75rem;
padding-left: 1rem;
padding-right: 1rem; */
`
export const ColorDisplay = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2em solid ${({theme}) => theme.colors.secondary};
  border-radius: 11px;
  margin-bottom: 25px;
  transition: 0.3s ease;

`
export const ColorInput = styled.input`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  margin-bottom: 25px;
  margin-top: 10px;
  border: 0.2em solid ${({theme}) => theme.colors.secondary}; 
  
 
`

export const ColorLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
`