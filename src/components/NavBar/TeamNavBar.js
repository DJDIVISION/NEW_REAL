import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem, NavbarLink, HiddenNav, MobileIcon2 } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { animateScroll as scroll } from "react-scroll";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import MapIcon from '@mui/icons-material/Map';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';





const ScrollIcon = styled(ArrowCircleUpIcon)`
    color: gold;
    transition: 0.8s all ease;
    top: 600px;
`;

const SwitchIcon = styled.div`
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
       transform: scale(1.2);
       transition: 0.4s all ease;
   }
`;

const StyledMenuIcon = styled(MenuIcon)`
    &&&{
        color: gold;
        @media screen and (min-width: 1100px){
            display: none;
        }
    }
`;





const TeamNavbar = (props) => {

    const [theme, setTheme] = useState("dark");

    function changeTheme() {
        if(props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    const icon = props.theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> 

    

    const [scrollNavDown, setScrollNavDown] = useState(false);

    const changeNavDown = () => {
        if(window.scrollY >= 500) {
            setScrollNavDown(true)
        } 
        else {
            setScrollNavDown(false)
        }
    }

    useEffect(() => {
       window.addEventListener('scroll', changeNavDown) 
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    

    return (
        <>
            
            <Nav scrollNavDown={scrollNavDown}>
                    
                    <NavLogo to="/" >Destiny World</NavLogo>
                   
                    <IconButton onClick={changeTheme}><SwitchIcon >
                        {icon}
                    </SwitchIcon></IconButton>
              
                    <MobileIcon2 scrollNavDown={scrollNavDown}>
                        <IconButton onClick={toggleHome}>
                            <ScrollIcon />
                        </IconButton>
                    </MobileIcon2> 
                    <NavMenu>
                        <NavItem>
                            <NavbarLink to="ceo" smooth={true} duration={500} spy={true} exact="true" >DAVID</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="cio" smooth={true} duration={500} spy={true} exact="true" >FILIP</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="dev1" smooth={true} duration={500} spy={true} exact="true" >VICTOR</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="dev2" smooth={true} duration={2000} spy={true} exact="true" >BASHKAR</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="dev3" smooth={true} duration={500} spy={true} exact="true" >ABHIK</NavbarLink>
                        </NavItem>
                    </NavMenu>
                
            </Nav>
            
            
        </>
    );
};

export default TeamNavbar;
