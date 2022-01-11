import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem, NavbarLink, HiddenNav, MobileIcon2 } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { animateScroll as scroll } from "react-scroll";
import Sidebar from "../Sidebar";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import MapIcon from '@mui/icons-material/Map';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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

const MenuContainer = styled(motion.div)`
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

const MenuItem = styled.li`
    height: 55px;
    color: white;
    font-size: 24px;
    
    
`;

const DropDownMenu = () => {
    return(
        <MenuContainer>
            <MenuOverview >
                    <MenuItem>
                    <IconButton ><BackIcon /></IconButton> 
                    </MenuItem>
                    <MenuItem>
                        <LinkS to="#"><NewsIcon/>NEWS</LinkS>
                    </MenuItem>
                    <MenuItem>
                        <TeamIcon/>TEAM
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
        </MenuContainer>
    )
}




const Navbar = (props, show) => {

    function changeTheme() {
        if(props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    const icon = props.theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> 

    const [showMenu, setShowMenu] = useState(false);

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
                    
                    <NavLogo to="/" >Destiny Airlines</NavLogo>
                   
                    <IconButton onClick={changeTheme}><SwitchIcon >
                        {icon}
                    </SwitchIcon></IconButton>
                    <IconButton><StyledMenuIcon /></IconButton>
              
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
                
            </Nav>
            
            
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
