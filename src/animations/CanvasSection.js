import React, {useState, useContext} from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { MenuContext } from "./context";
import { motion } from "framer-motion";


const BackIcon = styled(ArrowBackIosIcon)`
    display: none;

    @media screen and (max-width: 860px) {
        color: ${props => props.theme.text};
        transform: scale(1.1);
        margin: 10px;
        
        z-index: 500;
}
`;

const Icon = styled(MenuIcon)`
    display: none;

    @media screen and (max-width: 860px) {
        color: ${props => props.theme.text};
        transform: scale(1.5);
        margin: 10px;
        z-index: 500;
    }
`;

const SectionContainer = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #1756dd21;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    z-index: 99;
    margin-top: 80px;
`;


const SectionContainerTwo = styled(motion.div)`
    position: absolute;
    width: 80vw;
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
    margin-left: 30px;
`;



const Logo = styled.h1`
    margin-top: 40vh;
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
    height: 60px;
    color: ${props => props.theme.text};
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


export function CanvasSectionTwo(props) {

    

    const switchToOne = () => {
        setActive("menuOne");
        console.log("CLICK");
    }

    const { active , setActive } = useContext(MenuContext);

    let animate = {};
    if(active === "menuOne") animate = { opacity: 0 };
    else if (active === "menuTwo") animate = { opacity: 1};

    return(
            <SectionContainerTwo animate={animate} initial={{opacity: 0}}>
                <IconContainer>
                
                
                </IconContainer>
                <MenuOverview >
                    <MenuItem>
                    <IconButton onClick={switchToOne}><BackIcon /></IconButton> 
                    </MenuItem>
                    <MenuItem>
                        NEWS
                    </MenuItem>
                    <MenuItem>
                        PARTNERS
                    </MenuItem>
                    <MenuItem>
                        TEAM
                    </MenuItem>
                    <MenuItem>
                        NFT
                    </MenuItem>
                    <MenuItem>
                        ROADMAP
                    </MenuItem>
                    <MenuItem>
                        BSC
                    </MenuItem>
                    <MenuItem>
                        TELOS
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

