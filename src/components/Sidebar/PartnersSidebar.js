import React from 'react';
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute, NewsIcon, TeamIcon, GamingIcon, PartnersIcon, NftIcon, SocialIcon, Logo1 } from "./Elements";
import logoTelos from "../../images/telos_logo.png";
import logoBsc from "../../images/bsc_logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import "../../index.css";




const PartnersSidebar = ({ isOpen, toggle }) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                    <SidebarLink to="fortis" smooth={true} duration={500} spy={true} offset={-30} exact="true" >FORTIS</SidebarLink>
                    <SidebarLink to="telos" smooth={true} duration={500} spy={true} offset={-30} exact="true" >TELOS</SidebarLink>
                    <SidebarLink to="nftfy" smooth={true} duration={500} spy={true} offset={-30} exact="true" >NFTFY</SidebarLink>
                    <SidebarLink to="anchor" smooth={true} duration={500} spy={true} offset={-30} exact="true" >ANCHOR</SidebarLink>
                    <SidebarLink to="tstarter" smooth={true} duration={500} spy={true} offset={-30} exact="true" >T-STARTER</SidebarLink>
                    <SidebarLink to="wombat" smooth={true} duration={500} spy={true} offset={-30} exact="true" >WOMBAT</SidebarLink>
                    <SidebarLink to="areax" smooth={true} duration={500} spy={true} offset={-30} exact="true" >AREA-X NFT</SidebarLink>
                    <SidebarLink to="wayne" smooth={true} duration={500} spy={true} offset={-30} exact="true" >WAYNE SHEPPARD</SidebarLink>
               </SidebarMenu>
           </SidebarWrapper>
       </SidebarContainer>
    );
}

export default PartnersSidebar;
