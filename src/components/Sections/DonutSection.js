
import React, {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";
import ChartComponent from "./ChartComponent";
import { Button } from "@material-ui/core";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Rocket from "../../images/BestTokenomicsDivider.png";
import { motion, useAnimation } from "framer-motion";
import { IconButton } from "@material-ui/core";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useInView} from "react-intersection-observer";

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
    background: ${props => props.theme.horizontalRed};
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1100px){
        
    }

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalRed};
        width: 100vw;
        padding-bottom: 100px;
        
        
        
    }
`;
const ColumnRight = styled.div`
    background: ${props => props.theme.horizontalRed};
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
        padding: 0px 0px;
        background: ${props => props.theme.verticalRed};
        padding-bottom: 200px;
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



const StyledButton = styled(LinkR)`
    &&& {
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
        height: 40px;
        width: 150px;
        
        text-decoration: none;
        font-size: 18px;
        border-radius: 10px;
        padding: 10px 10px;
        margin-bottom: 50px;
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
    
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 5px;
    margin-top: 5px;

    @media screen and (max-width: 1100px){
        font-size: 16px;
        
    }
`;

const Heading = styled.h1`
    
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: ${props => props.theme.text};

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
    @media screen and (max-width: 1100px){
        font-size: 18px;
        
    }
`;

const List = styled.ul`
    max-width: 540px;
    height: 50px;
`;

const ListItems = styled.li`
    color: ${props => props.theme.text};
    display: inline-flex;
    align-items: center;
    margin-top: -50px;
    cursor: pointer;
    
`;

const Type = styled.h4`
    font-size: 18px;
    margin-right: 10px;
    @media screen and (max-width: 860px){
        font-size: 14px;
    }

`;

const Header = styled.div`
    width: 50px;
    height: 150px;
    background: ${props => props.theme.verticalRed};
    border: 2px solid ${props => props.theme.verticalRed};
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5vw;
    margin-top: 50%;
    
    border-radius: 20px;
    border: 1px solid grey;
    
`;

const Orange = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: orange;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Blue = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2070C4;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Yellow = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: yellow;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Green = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: green;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Purple = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: purple;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Red = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Pink = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #EB80F1;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Grey = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: grey;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;




const DonutSection = () => {

    const {ref, inView} = useInView({
        threshold: 1
    });
    const animation = useAnimation();
      
    useEffect(() => {
        console.log("use effect hook, inView = ", inView);
        if(inView){
            animation.start({
                y: -250,
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.5
                }
            });
        }
        if(!inView){
            animation.start({
                
                scale: 0,
                opacity: 0,
            })
        }
    }, [inView]);

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

      const SalesFunctionIn = () => {
          document.getElementById("supply").innerHTML = "400,000,000,000";
          document.getElementById("title-supply").innerHTML = "SALES SUPPLY:";

      }
      const SalesFunctionOut = () => {
        document.getElementById("supply").innerHTML = "1,000,000,000,000";
        document.getElementById("title-supply").innerHTML = "TOTAL SUPPLY:";
      }

      const LiquidityFunctionIn = () => {
        document.getElementById("supply").innerHTML = "200,000,000,000";
        document.getElementById("title-supply").innerHTML = "LIQUIDITY SUPPLY:";

      }
    const LiquidityFunctionOut = () => {
    document.getElementById("supply").innerHTML = "1,000,000,000,000";
    document.getElementById("title-supply").innerHTML = "TOTAL SUPPLY:";
    }
    const AdvisorsFunctionIn = () => {
        document.getElementById("supply").innerHTML = "30,000,000,000";
        document.getElementById("title-supply").innerHTML = "ADVISORS SUPPLY:";

      }
    const AdvisorsFunctionOut = () => {
    document.getElementById("supply").innerHTML = "1,000,000,000,000";
    document.getElementById("title-supply").innerHTML = "TOTAL SUPPLY:";
    }
    const CexFunctionIn = () => {
        document.getElementById("supply").innerHTML = "100,000,000,000";
        document.getElementById("title-supply").innerHTML = "CEX RESERVE SUPPLY:";

      }
    const CexFunctionOut = () => {
    document.getElementById("supply").innerHTML = "1,000,000,000,000";
    document.getElementById("title-supply").innerHTML = "TOTAL SUPPLY:";
    }
    const TeamFunctionIn = () => {
        document.getElementById("supply").innerHTML = "100,000,000,000";
        document.getElementById("title-supply").innerHTML = "TEAM SUPPLY:";

      }
    const TeamFunctionOut = () => {
    document.getElementById("supply").innerHTML = "1,000,000,000,000";
    document.getElementById("title-supply").innerHTML = "TOTAL SUPPLY:";
    }
    const GiveAwaysFunctionIn = () => {
        document.getElementById("supply").innerHTML = "30,000,000,000";
        document.getElementById("title-supply").innerHTML = "GIVEAWAYS SUPPLY:";

      }
    const GiveAwaysFunctionOut = () => {
    document.getElementById("supply").innerHTML = "1,000,000,000,000";
    document.getElementById("title-supply").innerHTML = "TOTAL SUPPLY:";
    }
    const PTEarnFunctionIn = () => {
        document.getElementById("supply").innerHTML = "100,000,000,000";
        document.getElementById("title-supply").innerHTML = "PLAY TO EARN SUPPLY:";

      }
    const PTEarnFunctionOut = () => {
    document.getElementById("supply").innerHTML = "1,000,000,000,000";
    document.getElementById("title-supply").innerHTML = "TOTAL SUPPLY:";
    }
    const MarketingFunctionIn = () => {
        document.getElementById("supply").innerHTML = "40,000,000,000";
        document.getElementById("title-supply").innerHTML = "MARKETING SUPPLY:";

      }
    const MarketingFunctionOut = () => {
    document.getElementById("supply").innerHTML = "1,000,000,000,000";
    document.getElementById("title-supply").innerHTML = "TOTAL SUPPLY:";
    }
    
    return(
        <>
            
            <Container id="tokenomics">
                
                    <ColumnLeft>
                    <SectionImage >
                    <Image src={Rocket} alt="" />
                    </SectionImage>
                    </ColumnLeft>
                    <div ref={ref}>
            <motion.div
            animate={animation}>
                    <Header>
                        <LinkS to="news" smooth={true} duration={500} spy={true} exact="true"><IconButton><ArrowUpwardIcon /></IconButton></LinkS>
                        <LinkS to="team" smooth={true} duration={500} spy={true} exact="true"><IconButton><ArrowDownwardIcon /></IconButton></LinkS>
                        <LinkR to="/TokenomicsPage"><IconButton><ArrowForwardIcon /></IconButton></LinkR>
                    </Header>
                </motion.div>
            </div>
                    <ColumnRight>
                    <ChartComponent data={data} />
                        <List>
                            <ListItems onMouseEnter={SalesFunctionIn} onMouseLeave={SalesFunctionOut}>
                                <Orange />
                                <Type >SALES</Type>
                            </ListItems>
                            <ListItems onMouseEnter={LiquidityFunctionIn} onMouseLeave={LiquidityFunctionOut}>
                                <Blue />
                                <Type>LIQUIDITY</Type>
                            </ListItems>
                            <ListItems onMouseEnter={AdvisorsFunctionIn} onMouseLeave={AdvisorsFunctionOut}>
                                <Yellow />
                                <Type>ADVISORS</Type>
                            </ListItems>
                        </List>
                        <List>
                            <ListItems onMouseEnter={CexFunctionIn} onMouseLeave={CexFunctionOut}>
                                <Green />
                                <Type>CEX RESERVE</Type>
                            </ListItems>
                            <ListItems onMouseEnter={TeamFunctionIn} onMouseLeave={TeamFunctionOut}>
                                <Purple />
                                <Type>TEAM</Type>
                            </ListItems>
                            <ListItems onMouseEnter={GiveAwaysFunctionIn} onMouseLeave={GiveAwaysFunctionOut}>
                                <Red />
                                <Type>GIVEAWAYS</Type>
                            </ListItems>
                        </List>
                        <List>
                            <ListItems onMouseEnter={PTEarnFunctionIn} onMouseLeave={PTEarnFunctionOut}>
                                <Pink />
                                <Type>PLAY TO EARN</Type>
                            </ListItems>
                            <ListItems onMouseEnter={MarketingFunctionIn} onMouseLeave={MarketingFunctionOut}>
                                <Grey />
                                <Type>MARKETING</Type>
                            </ListItems>
                        </List>
                        <TextWrapper>
                            <TopLine>DAIR</TopLine>
                            <TopLine id="title-supply">TOTAL SUPPLY:</TopLine>
                            <Heading id="supply">1,000,000,000,000</Heading>
                        </TextWrapper>
                        
                    </ColumnRight>
                    </Container> 
       
        </>
        
    )
}


export default DonutSection;