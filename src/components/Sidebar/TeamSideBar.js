import React from 'react';
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from "./Elements";
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
