import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link as LinkS} from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { IconButton } from "@material-ui/core";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useInView} from "react-intersection-observer";


import TeamImage from "../../images/BestTeamDivider.png";

const Header = styled.div`
    width: 150px;
    height: 50px;
    background: ${props => props.theme.horizontalGrey};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5vw;
    margin-top: 30px;
    border-radius: 20px;
    border: 1px solid grey;
    margin-left: 100px;
`;


const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.text};


    @media screen and (max-width: 1100px){
        flex-direction: column;
        
    }
`;

const ColumnLeft = styled.div`
    flex-shrink: 0;
    flex-basis: 50%;
    background: ${props => props.theme.horizontalGrey};
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media screen and (max-width: 1100px){
        width: 100vw;
        background: ${props => props.theme.verticalGrey};
        
        
        
    }
`;
const ColumnRight = styled.div`
    background: ${props => props.theme.horizontalGrey};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;
    padding: 10px 150px;
    text-align: center;
    @media screen and (max-width: 1100px){
        height: 50vh;
        width: 100vw;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        background: ${props => props.theme.verticalGrey};
        
    }
    

`;

const Image = styled.img`
    display: flex;
`;

const SectionImage = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 100%;
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


const TeamSection = () => {

    const {ref, inView} = useInView();
    const animation = useAnimation();
      
    useEffect(() => {
        console.log("use effect hook, inView = ", inView);
        if(inView){
            animation.start({
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
        }
        if(!inView){
            animation.start({
                scale: 0.5,
                opacity: 0.5,
            })
        }
    }, [inView]);


    return(
        <> 
            <div ref={ref}>
            <motion.div
            animate={animation}>
                    <Header>
                        <LinkS to="tokenomics" smooth={true} duration={500} spy={true} exact="true"><IconButton><ArrowUpwardIcon /></IconButton></LinkS>
                        <LinkS to="gaming" smooth={true} duration={500} spy={true} exact="true"><IconButton><ArrowDownwardIcon /></IconButton></LinkS>
                        <LinkR to="/TeamPage"><IconButton><ArrowForwardIcon /></IconButton></LinkR>
                    </Header>
                </motion.div>
            </div>
            <Container id="team">
            <ColumnLeft>
                <SectionImage >
                <Image src={TeamImage} alt="" />
                </SectionImage>
            </ColumnLeft>
            <ColumnRight>
            
                <TopLine>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</TopLine>
                <Heading>MEET THE TEAM</Heading>
           
            <StyledButton to="/TeamPage">GO!!!</StyledButton>
            </ColumnRight>
        </Container> 
       
        </>
        
    )
}


export default TeamSection;