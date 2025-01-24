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
  font-family: "Overlock";
  font-weight: bold;
  font-size: 1.2rem;
  border:  1px solid rgba(217, 217, 217, 0.5);
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
              0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset,
              0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
 
`

export const ColorLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 800;
  color: ${({theme}) => theme.colors.secondary};
  font-family: "Delius Swash Caps";
`