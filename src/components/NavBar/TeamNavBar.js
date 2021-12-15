import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem, NavbarLink, MobileIcon, MobileIcon2 } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { animateScroll as scroll } from "react-scroll";

const SmartIcon = styled(MenuIcon)`
     color: gold;
`;

const ScrollIcon = styled(ArrowCircleUpIcon)`
    color: gold;
    z-index: 999;

    top: 600px;
`;


const TeamNavBar = ({ toggle }) => {

    const [scrollNavDown, setScrollNavDown] = useState(false);

    const changeNavDown = () => {
        if(window.scrollY >= 120) {
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
                <NavBarContainer >
                    <NavLogo to="/" >Destiny Airlines</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <SmartIcon />
                    </MobileIcon>
                    <MobileIcon2 scrollNavDown={scrollNavDown}>
                        <IconButton onClick={toggleHome}>
                            <ScrollIcon />
                        </IconButton>
                    </MobileIcon2> 
                    <NavMenu>
                        <NavItem>
                            <NavbarLink to="ceo" smooth={true} duration={500} spy={true} offset={-30} exact="true" >DAVID</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="cio" smooth={true} duration={500} spy={true} offset={-30} exact="true" >FILIP</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="dev1" smooth={true} duration={500} spy={true} offset={-30} exact="true" >VICTOR</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="dev2" smooth={true} duration={500} spy={true} offset={-30} exact="true" >BHASKAR</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="dev3" smooth={true} duration={500} spy={true} offset={-30} exact="true" >ABHIK</NavbarLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
};


export default TeamNavBar;