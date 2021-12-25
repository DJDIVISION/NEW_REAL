import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem, NavbarLink, MobileIcon, MobileIcon2 } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { animateScroll as scroll } from "react-scroll";
import Sidebar from "../Sidebar";

const SmartIcon = styled(MenuIcon)`
     color: gold;
`;

const ScrollIcon = styled(ArrowCircleUpIcon)`
    color: gold;
    transition: 0.8s all ease;
    

    top: 600px;
`;


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const [scrollNavDown, setScrollNavDown] = useState(false);

    const changeNavDown = () => {
        if(window.scrollY >= 240) {
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
            <AnimatePresence>
            <Nav scrollNavDown={scrollNavDown}>
                <NavBarContainer >
                    <NavLogo to="/" >Destiny Airlines</NavLogo>
                    <MobileIcon onClick={() => setShowMenu(!showMenu)}>
                        <SmartIcon />
                    </MobileIcon>
                    <MobileIcon2 scrollNavDown={scrollNavDown}>
                        <IconButton onClick={toggleHome}>
                            <ScrollIcon />
                        </IconButton>
                    </MobileIcon2> 
                    <NavMenu>
                        <NavItem>
                            <NavbarLink to="news" smooth={true} duration={500} spy={true} exact="true" >News</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="team" smooth={true} duration={500} spy={true} exact="true" >Team</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="gaming" smooth={true} duration={500} spy={true} exact="true" >Gaming</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="partners" smooth={true} duration={500} spy={true} exact="true" >Partners</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="nft" smooth={true} duration={500} spy={true} exact="true" >NFTs</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="roadmap" smooth={true} duration={500} spy={true} exact="true" >RoadMap</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="telos" smooth={true} duration={500} spy={true} exact="true" >Telos</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="bsc" smooth={true} duration={500} spy={true} exact="true" >BSC</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="social" smooth={true} duration={500} spy={true} exact="true">Social Media</NavbarLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
            <Sidebar showMenu={showMenu}/>
            </AnimatePresence>
        </>
    );
};


/* function DropDownMenu() {

    const [activeMenu, setActiveMenu] = useState("main");
    

    function DropDownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
       <div className="dropdown">
           <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames="menu-primary">
               <div className="menu">
                    <DropDownItem leftIcon={<NewspaperIcon />} rightIcon={<NavigateNextIcon />} goToMenu="news"><LinkS to="news">News</LinkS></DropDownItem>
                    <DropDownItem leftIcon={<PeopleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="team">Team</DropDownItem>
                    <DropDownItem leftIcon={<CasinoIcon />} rightIcon={<NavigateNextIcon />} goToMenu="gaming">Gaming</DropDownItem>
                    <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon /> }goToMenu="partners">Partners</DropDownItem>
                    <DropDownItem leftIcon={<BrushIcon />} rightIcon={<NavigateNextIcon />} goToMenu="nft">NFTs</DropDownItem>
                    <DropDownItem leftIcon={<TwitterIcon />} rightIcon={<NavigateNextIcon />} goToMenu="social">Social Media</DropDownItem>
                    <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="telos">TELOS</DropDownItem>
                    <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="bsc">BSC</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "news"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <DropDownItem leftIcon={<FiberNewIcon />}>Destiny World News</DropDownItem>
                    <DropDownItem leftIcon={<SupervisedUserCircleIcon />}>Partners News</DropDownItem>
                    <DropDownItem leftIcon={<CandlestickChartIcon />}>Crypto News</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "team"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <LinkR to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>CEO</DropDownItem></LinkR>
                    <LinkR to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>CIO</DropDownItem></LinkR>
                    <LinkR to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>DEVs</DropDownItem></LinkR>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "gaming"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <DropDownItem leftIcon={<TelegramIcon />}>TELEGRAM BOT</DropDownItem>
                    <DropDownItem leftIcon={<LanguageIcon />}>WEBSITE</DropDownItem>
                    <DropDownItem leftIcon={<ViewInArIcon />}>METAVERSE</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "partners"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<MonetizationOnIcon />}>FORTIS</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<ViewModuleIcon />}>TELOS</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<BrushIcon />}>NFTFY</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<AccountBalanceWalletIcon />}>WOMBAT</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<AccountBalanceWalletIcon />}>ANCHOR</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<RocketIcon />}>T-STARTER</DropDownItem></LinkR>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "nft"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <DropDownItem leftIcon={<BrushIcon />}>NFTFY</DropDownItem>
                    <DropDownItem leftIcon={<BrushIcon />}>AREAX NFT</DropDownItem>
                    <DropDownItem leftIcon={<BrushIcon />}>MARKETPLACE</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "social"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <DropDownItem leftIcon={<TelegramIcon />}>TELEGRAM</DropDownItem>
                    <DropDownItem leftIcon={<TwitterIcon />}>TWITTER</DropDownItem>
                    <DropDownItem leftIcon={<FacebookIcon />}>FACEBOOK</DropDownItem>
                    <DropDownItem leftIcon={<ArticleIcon />}>MEDIUM</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "telos"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "bsc"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                </div>
           </CSSTransition>


       </div>
    );
}



function NavItemMenu(props){

    const [open, setOpen] = useState(false);

    return(
       <li className="nav-item">
           <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
           </a>

           {open && props.children}
       </li> 
    )
} */

export default Navbar;
