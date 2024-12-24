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
    width: 650px;
    left:140px;
    bottom: 15px;
    padding-top: 2rem ;
    padding-left: 5rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    img {
        width: 100%; /* Ensures the image fits within the container */
        height: auto;
    }

`
export const Particle = styled.img <{top?: string , left?: string ,right?: string ,bottom?:string ,rotate?: string}>`
    position: absolute;
    top: ${({top}) => top};
    left: ${({left}) => left};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};
    transform: rotate(${({rotate}) => rotate});
`