import React from 'react';
import styled from "styled-components";
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute, NewsIcon, TeamIcon, GamingIcon, PartnersIcon, NftIcon, SocialIcon, Logo1 } from "./Elements";
import logoTelos from "../../images/telos_logo.png";
import logoBsc from "../../images/bsc_logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import "../../index.css";




const GamingSidebar = ({ isOpen, toggle }) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                    <SidebarLink to="telegram" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">TELEGRAM</SidebarLink>
                    <SidebarLink to="website" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">WEBSITE</SidebarLink>
                    <SidebarLink to="metaverse" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">METAVERSE</SidebarLink>
               </SidebarMenu>
           </SidebarWrapper>
       </SidebarContainer>
    );
}

export default GamingSidebar;
