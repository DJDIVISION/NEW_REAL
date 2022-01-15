import React, {useState, useContext} from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { MenuContext } from "./context";
import { motion } from "framer-motion";
import { ProgressCircle } from "./components/Progress";
import { Link as LinkS} from "react-scroll";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import MapIcon from '@mui/icons-material/Map';

const RoadMapIcon = styled(MapIcon)`
   color: white;
    margin-right: 10px;
`;

const TokenIcon = styled(PriceCheckIcon)`
    color: white;
    margin-right: 10px;
`;



const TeamIcon = styled(GroupsIcon)`
    color: white;
    margin-right: 10px;
`;

const PartnersIcon = styled(SupervisedUserCircleIcon)`
    color: white;
    margin-right: 10px;
`;
const NewsIcon = styled(NewspaperIcon)`
    color: white;
    margin-right: 10px;
`;


const BackIcon = styled(HighlightOffIcon)`
    display: none;

    @media screen and (max-width: 860px) {
        color: ${props => props.theme.text};
        transform: scale(1.3);
        margin-bottom: 15px;
        
        z-index: 500;
}
`;

const Icon = styled(MenuIcon)`
    display: none;

    @media screen and (max-width: 860px) {
        color: ${props => props.theme.text};
        transform: scale(1.5);
        margin-bottom: 15px;
        z-index: 500;
    }
`;

const SectionContainer = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 800px;
    top: 0;
    left: 0;
    background-color: #1756dd21;
    display: flex;
    flex-direction: column
    z-index: 99;
    margin-top: 80px;

    
`;


const SectionContainerTwo = styled(motion.div)`
    position: absolute;
    width: 90vw;
    height: 400px;
    border-radius: 20px;
    background-color: #1756dd21;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    z-index: 99;
    margin-top: 80px;
    margin-left: 15px;
`;

const SectionContainerThree = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 800px;
    border-radius: 20px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    z-index: 599;
    
   
`;



const Logo = styled.h1`
    
    color: ${props => props.theme.text};
    font-weight: 700;
    font-family: "Alphacentauri";
    font-size: 60px;
    text-align: center;
`;

const Slogan = styled.h4`
    color: ${props => props.theme.text};
    margin: 0;
    margin-top: 1em;
    font-size: 38px;
    text-align: center;
`;

const MenuItem = styled.li`
    height: 55px;
    color: white;
    font-size: 24px;
    
    
`;

const MenuOverview = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: 120px;
    backdrop-filter: blur(5px);
    width: 90%;
    padding-top: 30px;
    border: 1px solid ${props => props.theme.text};
    border-radius: 20px;
    box-shadow: 0 2px 15px 1px ${props => props.theme.text};
    
`;

const IconContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;


`;

const LoaderText = styled(motion.h2)`
    color: ${props => props.theme.body};
    font-size: 24px;
`;


export function CanvasSectionTwo(props) { 
    

    const switchToOne = () => {
        setActive("menuOne");
        console.log("CLICK");
    }

    const { active , setActive } = useContext(MenuContext);

    let animate = {};
    if(active === "menuOne") animate = { opacity: 0, y: 0, scale: 1, display: "none"};
    else if (active === "menuTwo") animate = { opacity: 1, y: -80, scale: 1.1, };

    return(
            <SectionContainerTwo animate={animate} initial={{opacity: 0}}>
                <IconContainer>
                
                
                </IconContainer>
                <MenuOverview >
                    <MenuItem>
                    <IconButton onClick={switchToOne}><BackIcon /></IconButton> 
                    </MenuItem>
                    <MenuItem>
                        <LinkS to="#"><NewsIcon/>NEWS</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="team" smooth={true} duration={500} spy={true} exact="true"><TeamIcon />TEAM</LinkS>
                    </MenuItem>
                    <MenuItem>
                    <LinkS to="tokenomics" smooth={true} duration={500} spy={true} exact="true"><TokenIcon />TOKENOMICS</LinkS>
                    </MenuItem>
                    <MenuItem>
                        <LinkS to="roadmap" smooth={true} duration={500} spy={true} exact="true"><RoadMapIcon/>ROADMAP</LinkS>
                    </MenuItem>
                    <MenuItem>
                        <LinkS to="partners" smooth={true} duration={500} spy={true} exact="true"><PartnersIcon/>PARTNERS</LinkS>
                    </MenuItem>
                    <MenuItem>
                        TELOS
                    </MenuItem>
                    <MenuItem>
                        BSC
                    </MenuItem>
                </MenuOverview>
            </SectionContainerTwo>
    );
} 




export function CanvasSection(props) {

    const { active, setActive } = useContext(MenuContext);

    let animate = {};
    if(active === "menuOne") animate = { opacity: 1 };
    else if (active === "menuTwo") animate = { opacity: 0};
    

    const swicthToTwo = () => {
        setActive("menuTwo");
        console.log("CLICK");
    }

    return(
        <SectionContainer animate={animate} initial={{opacity: 0}}>
            <IconContainer>
            <IconButton onClick={ swicthToTwo }><Icon /></IconButton>
            
            </IconContainer>
            <Logo>DESTINY AIRLINES</Logo>
            <Slogan>We take you to Outer Space</Slogan>
        </SectionContainer>
        
    );
}


const LoaderVariants = {
    hidden: {
        y: 0,
        
    },
    visible: {
        y: -1000,
        
        transition: {
            delay: 10.5,
            type: "spring",
            stiffness: 500,
            damping: 20
        }
    }
}

const PlaneVariants = {
    hidden: {
      scale: 0.8,
      y: 0,
    },
    visible: {
      scale: 1.2,
      y: -50,
    },
    transition: {
      duration: 3,
    }
  }



export function Loader(props) {
    return (
        <SectionContainerThree variants={LoaderVariants} initial="hidden" animate="visible">
            <ProgressCircle />
        </SectionContainerThree>
    );
}




export function Both(props) {

    

    const [active, setActive] = useState("menuOne");

    const contextValue = { active, setActive };

    return(
        <MenuContext.Provider value={contextValue}>
            <CanvasSection />
            <CanvasSectionTwo />
    </MenuContext.Provider>

    );
}

