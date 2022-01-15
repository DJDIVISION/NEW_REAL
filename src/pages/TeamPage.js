import React, { useState } from 'react'
import styled from "styled-components";
import TeamNavBar from "../components/NavBar/TeamNavBar";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";

import { TeamCards } from "../components/TeamCard";
import { motion } from "framer-motion";
import { animationThree } from "../animations";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
    background: ${props => props.theme.body};

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;

const ColumnLeft = styled.div`
    flex-shrink: 0;
    flex-basis: 50%;
    background: ${props => props.theme.body};
    width: 50%;
    height: 700px;
    @media screen and (min-width: 1100px){
        padding-left: 100px;
    }

    @media screen and (max-width: 1100px){
        width: 100%;
        transform: scale(0.85);
        margin-left: 15px;
        
    }
`;
const ColumnRight = styled.div`
    background: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;
    padding-right: 150px;
    
    width: 50%;
    height: 700px;
    @media screen and (max-width: 900px){
        width: 100%;
        margin-top: -500px;
        padding-right: 0;
    }

`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 860px){
       text-align: center; 
    } 
`;

const IconContainer = styled.div`
    height: 50px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3vh;
    @media screen and (max-width: 860px){
        margin-bottom: 250px;
    }
`;

const Title = styled.h1`
    font-size: 74px;
    color: ${props => props.theme.text};
    text-align: right;
    font-family:  "Alphacentauri";
    z-index: 100;
    padding-bottom: 10px;
    
    @media screen and (max-width: 860px){
        font-size: 52px;
        text-align: center;
    }

    
`;

const TopLine = styled.h1`
    font-size: 42px;
    color: ${props => props.theme.text};
    text-align: right;
    padding-bottom: 10px;
    
    z-index: 100;
    @media screen and (max-width: 860px){
        text-align: center;
        font-size: 26px;
        
    }
`;
const Subtitle = styled.h3`
    font-size: 50px;
    color: ${props => props.theme.text};
    text-align: right;
    z-index: 50;
    @media screen and (max-width: 860px){
        text-align: center;
        
        font-size: 34px;
    }
`;

const Burguer = styled(MenuIcon)`
    color: ${props => props.theme.text};
    
    transform: scale(1.4);
    

    @media screen and (max-width: 860px){
        
    }
    
`;



export function TeamSection(props) {
    return(
        <Container>
            <ColumnLeft>
                
            </ColumnLeft>
            <ColumnRight >
                <TextWrapper>
                    <IconContainer>
                <IconButton ><Burguer /></IconButton>
                </IconContainer>
                    <Title>MEET</Title>
                    <Title>THE TEAM</Title>
                    <TopLine>THAT TAKES YOU</TopLine>
                    <Subtitle>TO OUTER SPACE</Subtitle>
                </TextWrapper>
            </ColumnRight>
        </Container>
    )
}



const TeamPage = () => {

    

    return (
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
            <TeamNavBar/>
            <TeamSection />
            
            <TeamCards/>
        </motion.div>
    )
}

export default TeamPage;