import React, { useState, useContext } from 'react'
import styled from "styled-components";
import TeamNavBar from "../components/NavBar/TeamNavBar";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import { Link as LinkS } from "react-scroll";
import { TeamCards } from "../components/TeamCard";
import { motion } from "framer-motion";
import { animationThree } from "../animations";
import { MenuContext } from "./context";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
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
    height: 750px;
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
    height: 750px;
    @media screen and (max-width: 900px){
        width: 100%;
        margin-top: -300px;
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

    @media screen and (min-width: 1100px){
        &&&{
            display: none;
        }
    }
    
`;

const MenuContainer = styled(motion.div)`
    position: absolute;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    margin-top: -75vh;
    z-index: 200;
    left: 37.5%;
    
    

    @media screen and (max-width: 860px){
        margin-top: -82.5vh;
        width: 85vw;
        height: 70vh;
        left: 12.5%;
    }
`;

const MenuOverview = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    text-align: center;
    padding-top: 30px;
    backdrop-filter: blur(7.5px);
    width: 90%;
    
    
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    box-shadow: 0 2px 15px 1px ${props => props.theme.text};
    
`;



const MenuItem = styled.li`
    height: 60px;
    color: ${props => props.theme.text};
    font-size: 24px;
    font-weight: bold;
    
`;

const BackIcon = styled(HighlightOffIcon)`
    color: ${props => props.theme.text};
    transform: scale(1.3);
    margin-bottom: 15px;
    
    z-index: 500;
`;

const DropDownMenu = () => {

    const { active , setActive } = useContext(MenuContext);

    const switchToOne = () => {
        setActive("menuTwo");
        console.log("CLICK");
    }

    let animate = {};
    if(active === "menuTwo") animate = { opacity: 0, y: 30, scale: 0.9, display: "none"};
    else if (active === "menuOne") animate = { opacity: 1, y: -20, scale: 1.1, };

    return(
        <>
        <MenuContainer animate={animate} initial={{opacity: 0}}>
            <MenuOverview >
                    <MenuItem>
                    <IconButton onClick={switchToOne}><BackIcon /></IconButton> 
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="ceo" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}>DAVID</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="cio" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}>FILIP</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="dev1" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}>VICTOR</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="dev2" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}>BASHKAR</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="dev3" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}>ABHIK</LinkS>
                    </MenuItem>
                </MenuOverview>
        </MenuContainer>
        
        </>
    )
}


export function TeamSection(props) {

    const { active, setActive } = useContext(MenuContext);

    let animate = {};
    if(active === "menuOne") animate = { opacity: 0.2 };
    else if (active === "menuTwo") animate = { opacity: 1};
    

    const swicthToTwo = () => {
        setActive("menuOne");
        console.log("CLICK");
    }

    
    return(
        <Container>
            <ColumnLeft>
                
            </ColumnLeft>
            <ColumnRight >
                <TextWrapper>
                    <IconContainer>
                <IconButton onClick={swicthToTwo}><Burguer /></IconButton>
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



const TeamPage = (props) => {

    const [theme, setTheme] = useState("dark");

    const [active, setActive] = useState("menuTwo");
    const contextValue = { active, setActive };
    

    return (
        <ThemeProvider theme={themes[theme]}>
            <MenuContext.Provider value={contextValue}>
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
            <TeamNavBar theme={theme} setTheme={setTheme}/>
            <TeamSection />
            <DropDownMenu />
            <TeamCards/>
        </motion.div>
        </MenuContext.Provider>
        </ThemeProvider>
    )
}

export default TeamPage;