import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem, NavbarLink, MobileIcon, MobileIcon2 } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { animateScroll as scroll } from "react-scroll";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import CasinoIcon from '@mui/icons-material/Casino';
import BrushIcon from '@mui/icons-material/Brush';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RocketIcon from '@mui/icons-material/Rocket';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArticleIcon from '@mui/icons-material/Article';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SmartIcon = styled(MenuIcon)`
     color: gold;
`;

const ScrollIcon = styled(ArrowCircleUpIcon)`
    color: gold;
    

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