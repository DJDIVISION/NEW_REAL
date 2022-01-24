
import React, {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";
import ChartComponent from "../components/Sections/ChartComponent";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import TokenomicsNavBar from "../components/NavBar/TokenomicsNavBar";
import BuySellSection from "../components/Sections/BuySellSection";
import { animationThree } from "../animations";
import { Link as LinkR } from "react-router-dom";


const scale = keyframes`
    0% { transform: scale(1)}
    50% { transform: scale(1.5)}
    100% { transform: scale(1)}
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
    }
    &:hover{
        transform: scale(1.2);
    }
`;
const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    justify-content: center;
    background: ${props => props.theme.horizontalGreen};
    overflow: hidden;
    

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalGreen};
        height: 100vh;
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
        width: 300px;
        height: 280px;
        
        margin-left: 20px;
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
    font-size: 26px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-top: 15px;
    

    
`;

const Heading = styled.h1`
    margin-top: 20px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: ${props => props.theme.text};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

const List = styled.ul`
    max-width: 540px;
    height: 30px;
    
`;

const ListItems = styled.li`
    color: ${props => props.theme.text};
    display: inline-flex;
    align-items: center;
    margin-top: -50px;
    
    
    
`;

const Type = styled.h4`
    font-size: 18px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 860px){
        font-size: 16px;
    }

`;

const Orange = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: orange;
    margin-right: 5px;
    animation: ${scale} 0.5s linear;
    animation-delay: 1s;
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
    animation: ${scale} 0.5s linear;
    animation-delay: 1s;
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
    animation: ${scale} 0.5s linear;
    animation-delay: 1s;
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
    animation: ${scale} 0.5s linear;
    animation-delay: 1.5s;
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
    animation: ${scale} 0.5s linear;
    animation-delay: 1.5s;
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
    animation: ${scale} 0.5s linear;
    animation-delay: 1.5s;
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
    animation: ${scale} 0.5s linear;
    animation-delay: 2s;
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
    animation: ${scale} 0.5s linear;
    animation-delay: 2s;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;





const TokenomicsPage = () => {

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

  const [theme, setTheme] = useState("dark"); 

    return (
        <>
            <ThemeProvider theme={themes[theme]}>
            <motion.div >
                <TokenomicsNavBar theme={theme} setTheme={setTheme}/>
                <InfoWrapper id="chart">
                <InfoRow>
                    <Column1>
                    <ChartComponent data={data} />=
                    </Column1>
                    <Column2>
                        <List>
                            <ListItems onMouseEnter={SalesFunctionIn} onMouseLeave={SalesFunctionOut}>
                                <Orange />
                                <Type>SALES</Type>
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
                            <TopLine id="title-supply">TOTAL SUPPLY: </TopLine>
                            <Heading id="supply">1,000,000,000,000</Heading>
                        </TextWrapper>
                        <StyledButton to="/HomeNoLoader">GO HOME</StyledButton>
                    </Column2>
                </InfoRow>    
            </InfoWrapper>
                <BuySellSection/>
            </motion.div>
        </ThemeProvider>
        
        </>
    )
}

export default TokenomicsPage;
