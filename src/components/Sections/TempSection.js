import React from "react";
import styled, {keyframes} from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
    background: ${props => props.theme.horizontalBlue};
    margin-top: -100px;
    @media screen and (max-width: 1100px){
        flex-direction: column;
        height: 85vh;
    }
`;

const ColumnLeft = styled.div`
    flex-shrink: 0;
    flex-basis: 50%;
    background: ${props => props.theme.horizontalBlue};
    width: 50%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1100px){
        
    }

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalBlue};
        width: 100vw;
        height: 42.5vh;
        
        
    }
`;
const ColumnRight = styled.div`
    background: ${props => props.theme.horizontalBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 90vh;
    padding: 10px 100px;
    text-align: center;
    @media screen and (max-width: 1100px){
        height: 42.5vh;
        width: 100vw;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        background: ${props => props.theme.verticalBlue};
        
    }

`;

const pathAnim = keyframes`
    0% {
        d: path("M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500");
    }
    25% {
        d: path("M0,100 C220,100,440,292,660,292 C880,292,1100,100,1320,100 L1320 500 L0 500");
    }
    50% {
        d: path("M0,192 C220,290,440,290,660,192 C880,100,1100,100,1320,192 L1320 500 L0 500");
    }
    75% {
        d: path("M0,292 C220,292,440,100,660,100 C880,100,1100,292,1320,292 L1320 500 L0 500");
    }
    100% {
        d: path("M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500");
    }
`;

const WrapperTop = styled.div`
    height: 100px;
    background: transparent;
    width: 100%;
    transform: rotate(180deg);
    

    @media screen and (max-width: 768px){
        
    }

    @media screen and (max-width: 600px){
       
    }

    svg path{
        animation: ${pathAnim} linear 7s infinite; 
        transform: scaleY(0.2);    
        @media screen and (max-width: 1100px){
            transform: scaleY(0.8);   
    } 
    }

    svg path:nth-child(2){
        animation-delay: 1s;
    }
    svg path:nth-child(3){
        animation-delay: 3s;
    }
    svg path:nth-child(4){
        animation-play-state: paused;
    }
`;

const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    background: transparent;
    margin-top: -100px;
    @media screen and (max-width: 768px){
        
    }

    @media screen and (max-width: 600px){
        
    }

    svg path{
        animation: ${pathAnim} linear 7s infinite; 
        transform: scaleY(0.2);    
        @media screen and (max-width: 1100px){
            transform: scaleY(1.2);   
    } 
    }

    svg path:nth-child(2){
        animation-delay: 1s;
    }
    svg path:nth-child(3){
        animation-delay: 3s;
    }
    svg path:nth-child(4){
        animation-play-state: paused;
    }
`;

const TempSection = () => {
    return(
        <>
        <WrapperTop>
            <svg viewBox="0 0 1320 500">
                <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#0014a8" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#3f00ff" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#545aa7" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#041690" />
            </svg>
            </WrapperTop>
            
        <Container>
            <ColumnLeft>
            
            </ColumnLeft>
            <ColumnRight>
            
            </ColumnRight>
            
        </Container>
        <Wrapper>
            <svg viewBox="0 0 1320 500">
                <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#0014a8" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#3f00ff" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#545aa7" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#041690" />
            </svg>
            </Wrapper>
        
        </>
    )
}



export default TempSection;