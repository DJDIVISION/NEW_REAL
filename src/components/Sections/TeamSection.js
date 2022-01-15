
import React, {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";
import ChartComponent from "./ChartComponent";
import { Button } from "@material-ui/core";
import { Link as LinkR } from "react-router-dom";
import Rocket from "../../images/BestTeamDivider.png";

const StyledButton = styled(Button)`
    &&& {
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
        margin-bottom: 30px;
    }
`;
const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 90vh;
    width: 100%;
    justify-content: center;
    background: ${props => props.theme.body};
    overflow: hidden;
    

    @media screen and (max-width: 860px){
        height: 60vh;
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
   width: 400px;
   height: 500px; 
   @media screen and (max-width: 860px){
        width: 250px;
        height: 250px;
        margin-left: 30px;
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
    padding-bottom: 20px;
`;

const TopLine = styled.p`
    color: ${props => props.theme.text};
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    margin-top: 30px;
`;

const Heading = styled.h1`
    
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${props => props.theme.text};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

const Image = styled.img`
    width: 100vw;
    height: auto;
    display: flex;
`;

const SectionImage = styled.div`
    height: 150px;
    background-color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1000px){
        height: 300px;
        img{
            width: 70vw;
        }
    }
`;


const TeamSection = () => {

    


    return(
        <>
            <SectionImage id="team">
            <Image src={Rocket} alt="" />
            </SectionImage>
            <InfoWrapper>
                <InfoRow>
                    <Column2>
                    <TextWrapper>
                            <TopLine>CEO, CIO</TopLine>
                            <Heading>& DEVS</Heading>
                        </TextWrapper>
                        <LinkR to="TeamPage"><StyledButton>MEET THE TEAM</StyledButton></LinkR>
                    </Column2>
                </InfoRow>    
            </InfoWrapper>      
       
        </>
        
    )
}


export default TeamSection;