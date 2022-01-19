import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { IconButton } from "@material-ui/core";
import { Link as LinkS } from "react-scroll";
import { MenuContext } from "./context";

import Moon from "../../images/BestTokenomicsDivider.png";
import Moon2 from "../../images/TokenomicsDivider3.png";


import CanvasContainer from "../../animations/Planet";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import MapIcon from '@mui/icons-material/Map';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PaletteIcon from '@mui/icons-material/Palette';

const BackIcon = styled(HighlightOffIcon)`
    color: ${props => props.theme.text};
    transform: scale(1.3);
    margin-bottom: 15px;
    
    z-index: 500;
`;

const NftIcon = styled(PaletteIcon)`
   color: ${props => props.theme.text};
    margin-right: 10px;
`;

const GamingIcon = styled(SportsEsportsIcon)`
   color: ${props => props.theme.text};
    margin-right: 10px;
`;


const RoadMapIcon = styled(MapIcon)`
   color: ${props => props.theme.text};
    margin-right: 10px;
`;

const TokenIcon = styled(PriceCheckIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;



const TeamIcon = styled(GroupsIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;

const PartnersIcon = styled(SupervisedUserCircleIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;
const NewsIcon = styled(NewspaperIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;




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
    backdrop-filter: blur(5px);
    width: 90%;
    
    
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    box-shadow: 0 2px 15px 1px ${props => props.theme.text};
    
`;



const MenuItem = styled.li`
    height: 45px;
    color: ${props => props.theme.text};
    font-size: 24px;
    font-weight: bold;
`;

const Burguer = styled(MenuIcon)`
    color: ${props => props.theme.text};
    
    transform: scale(1.4);
    

    @media screen and (max-width: 860px){
        
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



const DropDownMenu = () => {

    const { active , setActive } = useContext(MenuContext);

    const switchToOne = () => {
        setActive("menuOne");
        console.log("CLICK");
    }

    let animate = {};
    if(active === "menuOne") animate = { opacity: 0, y: 30, scale: 0.9, display: "none"};
    else if (active === "menuTwo") animate = { opacity: 1, y: -20, scale: 1.1, };

    return(
        <>
        <MenuContainer animate={animate} initial={{opacity: 0}}>
            <MenuOverview >
                    <MenuItem>
                    <IconButton onClick={switchToOne}><BackIcon /></IconButton> 
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="news" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}><NewsIcon />NEWS</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="tokenomics" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}><TokenIcon />TOKENOMICS</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="team" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}><TeamIcon />TEAM</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="gaming" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}><GamingIcon />GAMING</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="nft" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}><NftIcon />NFTS</LinkS>
                    </MenuItem>
                    <MenuItem>
                        <LinkS to="roadmap" smooth={true} duration={1500} spy={true} exact="true" onClick={switchToOne}><RoadMapIcon/>ROADMAP</LinkS>
                    </MenuItem>
                    <MenuItem>
                        <LinkS to="partners" smooth={true} duration={2000} spy={true} exact="true" onClick={switchToOne}><PartnersIcon />PARTNERS</LinkS>
                    </MenuItem>
                    <MenuItem>
                        TELOS
                    </MenuItem>
                    <MenuItem>
                        BSC
                    </MenuItem>
                </MenuOverview>
        </MenuContainer>
        
        </>
    )
}




const TopSection = () => {

    const { active, setActive } = useContext(MenuContext);

    let animate = {};
    if(active === "menuOne") animate = { opacity: 0.2 };
    else if (active === "menuTwo") animate = { opacity: 1};
    

    const swicthToTwo = () => {
        setActive("menuTwo");
        console.log("CLICK");
    }
    
    return (
         
        <Container>
            <ColumnLeft>
                <CanvasContainer /> 
            </ColumnLeft>
            <ColumnRight animate={animate} initial={{opacity: 0}}>
                <TextWrapper>
                    <IconContainer>
                <IconButton onClick={swicthToTwo}><Burguer /></IconButton>
                </IconContainer>
                    <Title>DESTINY</Title>
                    <Title>AIRLINES</Title>
                    <TopLine>WE TAKE YOU</TopLine>
                    <Subtitle>TO OUTER SPACE</Subtitle>
                </TextWrapper>
            </ColumnRight>
        </Container>
        
    )
}

const SectionMenu = () => {

    const [active, setActive] = useState("menuOne");

    const contextValue = { active, setActive };

    return(
        <MenuContext.Provider value={contextValue}>
            <TopSection />
            <DropDownMenu />
        </MenuContext.Provider>
    )
}

export default SectionMenu;
