import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";


import RoadMapImage from "../../images/BestRoadMapDivider.png";


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
    background: ${props => props.theme.horizontalBlue};
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1100px){
        
    }

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalBlue};
        width: 100vw;
        
        
    }
`;
const ColumnRight = styled.div`
    background: ${props => props.theme.horizontalBlue};
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
        background: ${props => props.theme.verticalBlue};
    }

`;

const Image = styled.img`
    display: flex;
`;

const SectionImage = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 300px;
    }
    @media screen and (min-width: 1000px){
        img{
           width: 50vw;
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
`;

const RoadMapSection = () => {
    return (
         
        <Container id="roadmap">
            <ColumnLeft>
                <SectionImage >
                <Image src={RoadMapImage} alt="" />
                </SectionImage>
            </ColumnLeft>
            <ColumnRight>
            
                <TopLine>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</TopLine>
                <Heading>FOLLOW THE ROADMAP</Heading>
           
            <StyledButton to="/RoadMap">LEARN MORE</StyledButton>
            </ColumnRight>
        </Container>
        
    )
}

export default RoadMapSection;