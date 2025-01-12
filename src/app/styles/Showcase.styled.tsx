import styled from "styled-components";

// TODO: rm
export const ShowcaseParticleContainer = styled.div`
    position: relative;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: none;
    }
`
export const ShowcaseImageCard = styled.div`
    //border: 1px solid white;
    width: 600px;//left:180px;
    height: 450px;
   // padding-left: 5rem;
    border-radius: 1rem;
    //position: relative;
    //overflow: hidden;
    img {
        width: 100%; /* Ensures the image fits within the container */
        height: auto;
    }

`
