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


const PartnersNavBar = ({ toggle }) => {

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
                            <NavbarLink to="fortis" smooth={true} duration={500} spy={true} offset={-30} exact="true" >FORTIS</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="telos" smooth={true} duration={500} spy={true} offset={-30} exact="true" >TELOS</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="nftfy" smooth={true} duration={500} spy={true} offset={-30} exact="true" >NFTFY</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="anchor" smooth={true} duration={500} spy={true} offset={-30} exact="true" >ANCHOR</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="tstarter" smooth={true} duration={500} spy={true} offset={-30} exact="true" >T-STARTER</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="wombat" smooth={true} duration={500} spy={true} offset={-30} exact="true" >WOMBAT</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="areax" smooth={true} duration={500} spy={true} offset={-30} exact="true" >AREA-X NFT</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="wayne" smooth={true} duration={500} spy={true} offset={-30} exact="true" >WAYNE SHEPPARD</NavbarLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
};


export default PartnersNavBar;