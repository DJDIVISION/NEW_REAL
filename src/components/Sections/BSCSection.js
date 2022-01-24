import React, {useState, useContext} from 'react';
import styled, {keyframes} from "styled-components";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";


import BSCImage from "../../images/bsc_logo.png";


const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.body};

    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`;

const ColumnLeft = styled.div`
    flex-shrink: 0;
    flex-basis: 50%;
    background: ${props => props.theme.horizontalYellow};
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1100px){
        padding-top: 75px;
    }

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalYellow};
        width: 100vw;
        padding-top: 50px;
        
    }
`;
const ColumnRight = styled.div`
    background: ${props => props.theme.horizontalYellow};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;
    padding: 10px 100px;
    text-align: center;
    @media screen and (max-width: 1100px){
        height: 50vh;
        width: 100vw;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        background: ${props => props.theme.verticalYellow};
        padding-bottom: 130px;
        
    }

`;

const Image = styled.img`
    display: flex;
`;

const SectionImage = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 150px;
    }
    @media screen and (min-width: 1000px){

        img{
           width: 250px;
           margin-bottom: 100px;
        }
    }
`;



const TopLine = styled.p`
    color: ${props => props.theme.text};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
    @media screen and (max-width: 768px){
        font-size: 18px;
        margin-bottom: 20px;

    }

    
`;

const Heading = styled.h1`
    font-size: 48px;
    font-weight: 600;
    color: ${props => props.theme.text};
    margin-bottom: 30px;

    @media screen and (max-width: 480px){
        font-size: 32px;
        margin-bottom: 20px;
    }
`;

const StyledButton = styled(LinkR)`
    &&& {
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
        height: 40px;
        width: 150px;
        margin-bottom: 30px;
        text-decoration: none;
        font-size: 18px;
        border-radius: 10px;
        padding: 10px 10px;
    }
    &:hover{
        transform: scale(1.2);
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
    height: 200px;
    width: 100%;
    position: absolute;
   transform: rotate(180deg);
   margin-top: -50px;

    @media screen and (max-width: 768px){
        
    }

    @media screen and (max-width: 600px){
       margin-top: -70px; 
    }

    svg path{
        animation: ${pathAnim} linear 7s infinite; 
        transform: scaleY(0.3);    
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

const Wrapper = styled.div`
    height: 200px;
    width: 100%;
    position: absolute;
    margin-top: 500px;

    @media screen and (max-width: 768px){
        margin-top: 730px;
    }

    @media screen and (max-width: 600px){
        margin-top: 550px;
    }

    svg path{
        animation: ${pathAnim} linear 7s infinite; 
        transform: scaleY(0.3);    
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

const GamingSection = () => {
    return (
         
        <Container id="bsc">
            <WrapperTop>
            <svg viewBox="0 0 1320 500">
                <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#000000" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#ffd700" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#fefe22" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="black" />
            </svg>
            </WrapperTop>
            <Wrapper>
            <svg viewBox="0 0 1320 500">
                <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#000000" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#ffd700" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#fefe22" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="black" />
            </svg>
            </Wrapper>
            <ColumnLeft>
                <SectionImage >
                <Image src={BSCImage} alt="" />
                </SectionImage>
            </ColumnLeft>
            <ColumnRight>
            
                <TopLine>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</TopLine>
                <Heading>DAIR ON BSC</Heading>
           
            <StyledButton to="/GamingPage">LEARN MORE</StyledButton>
            </ColumnRight>
        </Container>
        
    )
}

export default GamingSection;