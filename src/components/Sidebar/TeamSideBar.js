import React from 'react';
import styled from "styled-components";
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute, NewsIcon, TeamIcon, GamingIcon, PartnersIcon, NftIcon, SocialIcon, Logo1 } from "./Elements";
import logoTelos from "../../images/telos_logo.png";
import logoBsc from "../../images/bsc_logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import "../../index.css";




const TeamSidebar = ({ isOpen, toggle }) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                    <SidebarLink to="ceo" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">DAVID</SidebarLink>
                    <SidebarLink to="cio" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">FILIP</SidebarLink>
                    <SidebarLink to="dev1" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">VICTOR</SidebarLink>
                    <SidebarLink to="dev2" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">BHASKAR</SidebarLink>
                    <SidebarLink to="dev3" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">ABHIK</SidebarLink>
               </SidebarMenu>
           </SidebarWrapper>
       </SidebarContainer>
    );
}

export default TeamSidebar;
