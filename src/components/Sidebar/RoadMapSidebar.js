import React from 'react';
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from "./Elements";
import "../../index.css";
import { animateScroll as scroll } from "react-scroll";

function scrollToOne () {
    scroll.scrollMore(550);
}

function scrollToTwo () {
    scroll.scrollMore(4130);
}

function scrollToThree () {
    scroll.scrollMore(7720);
}


const RoadMapSidebar = ({ isOpen, toggle }) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                    <SidebarLink onClick={() => [scrollToOne(), toggle()]}  smooth={true} duration={500} spy={true} exact="true">2022, 1Q</SidebarLink>
                    <SidebarLink onClick={() => [scrollToTwo(), toggle()]} smooth={true} duration={500} spy={true} exact="true">2022, 2Q</SidebarLink>
                    <SidebarLink onClick={() => [scrollToThree(), toggle()]} smooth={true} duration={500} spy={true} exact="true">2022, 3Q</SidebarLink>
               </SidebarMenu>
           </SidebarWrapper>
       </SidebarContainer>
    );
}

export default RoadMapSidebar;