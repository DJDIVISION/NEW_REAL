
import React, {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";
import ChartComponent from "./ChartComponent";
import { Button } from "@material-ui/core";
import Tokenomics from "./Tokenomics";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as LinkR } from "react-router-dom";

const move = keyframes`
        0% {width: 0}
        80% {width: 100%}
        100%{width: 0, delay:1}
    `;

const Title = styled.h3`
    font-size: 32px;
    color: ${props => props.theme.text};
    text-align: center;
    margin: 25px;

    @media screen and (max-width:860px){
        font-size: 20px;
    }
`;





const Container = styled.div`
    color: black;
    background: white;

    
`;

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    background: black;

    @media screen and (max-width: 860px){
        height: 1100px;
    }
`;

const InfoRow = styled.div`
    display: grid;
    grid-auto-columns:minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

const Column1 = styled.div`
   grid-area: col1; 
   @media screen and (min-width: 860px){
        margin-right: 150px;
    }
    
    
`;

const Column2 = styled.div`
    
    grid-area: col2;
    @media screen and (min-width: 860px){
        margin-left: 100px;
    }
    
`;

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

const TopLine = styled.p`
    color: white;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: white;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: white;
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

`;

const TitleOne = styled.h1`
    font-size: 32px;
    color: ${props => props.theme.text};
    text-align: center;
    margin: 40px;

    @media screen and (max-width:860px){
        font-size: 22px;
    }
`;

const TitleTwo = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.text};
    position: fixed;
    margin-top: 185px;

    @media screen and (max-width:860px){
        margin-top: 200px;
    }
`;

const ButtonStytled = styled(Button)`
    &&& {
        color: ${props => props.theme.text};
    }
`;

const BuySellSection = () => {

    const data = [
        { value: 40, name: "SALE" },
        { value: 20, name: "LIQUIDITY" },
        { value: 3, name: "ADVISORS" },
        { value: 10, name: "CEX RESERVE" },
        { value: 10, name: "TEAM" },
        { value: 3, name: "GIVEAWAYS" },
        { value: 10, name: "PTEARN" },
        { value: 4, name: "MARKETING" }
      ];



    return(
        <>
          <Container >
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <ChartComponent data={data} />
                        
                    </Column1>
                    <Column2>
                    <TextWrapper>
                            <TopLine>DAIR</TopLine>
                            <Heading>TOKENOMICS</Heading>
                            <Subtitle>VICTOR RULES!!!</Subtitle>
                            <LinkR to="/TokenomicsPage"><ButtonStytled>READ MORE</ButtonStytled></LinkR>
                        </TextWrapper>
                    </Column2>
                </InfoRow>    
            </InfoWrapper>      
        </Container>  
        </>
        
    )
}


export default BuySellSection;