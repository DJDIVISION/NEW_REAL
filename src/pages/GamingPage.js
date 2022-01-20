import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";
import { animationThree } from "../animations";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import GamingNavBar from "../components/NavBar/GamingNavBar";
import TelegramIcon from '@mui/icons-material/Telegram';
import {IconButton} from "@material-ui/core";

import BotPhone1 from "../images/BotPhone1.png";
import BotPhone2 from "../images/BotPhone2.png";
import BotPhone3 from "../images/BotPhone3.png";
import GamingPhone1 from "../images/GroupPhone1.png";
import GamingPhone2 from "../images/GroupPhone2.png";
import GamingPhone3 from "../images/GroupPhone3.png";


const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.body};

    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`;

const Image = styled(motion.img)`
    width: 200px;
    height: auto;
    position: absolute;
    z-index: 5;
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
        padding-left: 100px;
        padding-bottom: 200px;
        padding-top: 50px;
    }

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalRed};
        width: 100vw;
        ${Image}:nth-child(1) {
            width: 160px;
        
        }
        ${Image}:nth-child(2) {
            width: 160px;
            
        }
        ${Image}:nth-child(3) {
            width: 170px;
            
        }
        
        
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
        height: 60vh;
        width: 100vw;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        padding-top: 20px;
        background: ${props => props.theme.verticalRed};
        
    }
    @media screen and (min-width: 1100px){
        padding-right: 200px;
        padding-top: 50px;
        
    }
`;



const SectionImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
    }
    @media screen and (min-width: 1000px){
        img{
           width: 25vw;
        }
    }
`;



const TopLine = styled.p`
    color: ${props => props.theme.bodyBlue};
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 30px;
    font-family: "Comfortaa";
    text-shadow: 1px 2px 4px ${props => props.theme.text},
                          1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
    @media screen and (max-width: 768px){
        font-size: 18px;
        margin-bottom: 20px;
    }

    
`;

const Heading = styled.h1`
    font-size: 48px;
    font-weight: 600;
    color: ${props => props.theme.bodyBlue};
    text-shadow: 1px 2px 4px ${props => props.theme.text},
                          1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;

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

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    transform: scale(1.5);

    @media screen and (max-width: 1100px){
        height: 50px;
        transform: scale(1.2);
    }
`;

const Telegram = styled(TelegramIcon)`
    color: blue;
    
`;




const GamingPage = () => {

    const Alert = () => {
        alert("Want to Visit Our Telegram Group?");
    }

    const [theme, setTheme] = useState("dark");

    const TelegramBotLink = "https://t.me/PredictCryptoBot";
    const TelegramGroupLink = "https://t.me/dwbetsandpredictions";

    return (
        <ThemeProvider theme={themes[theme]}>
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
            <GamingNavBar theme={theme} setTheme={setTheme}/>
            <Container id="bot">
            <ColumnLeft>
                <Image src={BotPhone3} alt="planet" onClick={Alert}
                whileHover={{scale: 1.5, zIndex: 100}}
                whileTap={{scale: 1.5, zIndex: 100}}
                initial={{x: 100, y:40}} /> 
                <Image src={BotPhone2} alt="planet" onClick={Alert}
                whileHover={{scale: 1.5, zIndex: 100}}
                whileTap={{scale: 1.5, zIndex: 100}}
                initial={{x: -100, y:40}} /> 
                <Image src={BotPhone1} alt="planet" onClick={Alert}
                whileHover={{scale: 1.5, zIndex: 100}}
                whileTap={{scale: 1.5, zIndex: 100}}
                initial={{x: 0, y:40, scale:1.2}} /> 
            </ColumnLeft>
            <ColumnRight>
            
                <TopLine>Join our Telegram Bot and put your crypto into play. Sport Bets, Casino and Dice Games, BTC and ETH price predictions, and many more!!!</TopLine>
                <Heading>TELEGRAM BOT</Heading>
                <IconContainer>
                <IconButton onClick={event => window.open(TelegramBotLink, "_blank")}><Telegram /></IconButton>
                </IconContainer>
            </ColumnRight>
        </Container>
        <Container id="group">
            <ColumnLeft>
                <Image src={GamingPhone1} alt="planet" 
                whileHover={{scale: 1.5, zIndex: 100}}
                initial={{x: 100, y:40}} /> 
                <Image src={GamingPhone2} alt="planet" 
                whileHover={{scale: 1.5, zIndex: 100}}
                initial={{x: -100, y:40}} /> 
                <Image src={GamingPhone3} alt="planet" 
                whileHover={{scale: 1.5, zIndex: 100}}
                initial={{x: 0, y:40, scale:1.2}} /> 
            </ColumnLeft>
            <ColumnRight>
            
                <TopLine>Keep track of your bet results in our Telegram Group, or simply discuss about sports. Live Results, Latest News, Videos, and many more!!!</TopLine>
                <Heading>TELEGRAM SPORTS GROUP</Heading>
                <IconContainer>
                <IconButton onClick={event => window.open(TelegramGroupLink, "_blank")}><Telegram /></IconButton>
                </IconContainer>
            
            </ColumnRight>
        </Container>
            
            
        </motion.div>
        </ThemeProvider>
    )
}

export default GamingPage;