
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute, NewsIcon, TeamIcon, GamingIcon, PartnersIcon, NftIcon, SocialIcon, Logo1 } from "./Elements";
import logoTelos from "../../images/telos_logo.png";
import logoBsc from "../../images/bsc_logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";





const MenuVariants = {
    hidden: {
        y: "-400px",
    },
    show: {
        y: "0px",
    },
    transition: {
        duration: 0.8, 
        type: "spring",
        stiffness: 500,
        damping: 20,
    },
};




const Sidebar = ({ showMenu, setShowMenu}) => {
    
    return (
        <>
        <AnimatePresence>
        {showMenu && (
            <motion.div variants={MenuVariants} initial="hidden" animate="show">
            <SidebarContainer >
                <SidebarWrapper>
                    <SidebarMenu>
                         <SidebarLink to="news"  smooth={true} duration={500} spy={true} exact="true">News</SidebarLink>
                         <SidebarLink to="team"  smooth={true} duration={500} spy={true} exact="true">Team</SidebarLink>
                         <SidebarLink to="partners"   duration={500} spy={true} exact="true">Partners</SidebarLink>
                         <SidebarLink to="gaming"  smooth={true} duration={500} spy={true} exact="true">Gaming</SidebarLink>
                         <SidebarLink to="nft"  smooth={true} duration={500} spy={true} exact="true">NFTs</SidebarLink>
                         <SidebarLink to="roadmap"  smooth={true} duration={500} spy={true} exact="true">RoadMap</SidebarLink>
                         <SidebarLink to="telos"  smooth={true} duration={500} spy={true} exact="true">TELOS</SidebarLink>
                         <SidebarLink to="bsc"  smooth={true} duration={500} spy={true} exact="true">BSC</SidebarLink>
                         <SidebarLink to="social"  smooth={true} duration={500} spy={true} exact="true">Social Media</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
            </motion.div>
            
        )}
        </AnimatePresence>
        </>
    );
}

export default Sidebar;
