import React from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute, NewsIcon, TeamIcon, GamingIcon, PartnersIcon, NftIcon, SocialIcon, Logo1 } from "./Elements";
import logoTelos from "../../images/telos_logo.png";
import logoBsc from "../../images/bsc_logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import "../../index.css";


const MenuVariants = {
    hidden: {
        y: "-50",
    },
    show: {
        y: "0",
    },
    transition: {
        duration: 0.8, 
        type: "spring",
        stiffness: 300,
        damping: 20,
    },
};

const Sidebar = ({ showMenu, setShowMenu, toggle, isOpen }) => {
    return (
        <>
        <AnimatePresence>
        {showMenu && (
            <motion.div variants={MenuVariants} initial="hidden" animate="show">
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <SidebarWrapper>
                    <SidebarMenu>
                         <SidebarLink to="news" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">News</SidebarLink>
                         <SidebarLink to="team" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">Team</SidebarLink>
                         <SidebarLink to="partners" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">Partners</SidebarLink>
                         <SidebarLink to="gaming" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">Gaming</SidebarLink>
                         <SidebarLink to="nft" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">NFTs</SidebarLink>
                         <SidebarLink to="roadmap" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">RoadMap</SidebarLink>
                         <SidebarLink to="telos" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">TELOS</SidebarLink>
                         <SidebarLink to="bsc" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">BSC</SidebarLink>
                         <SidebarLink to="social" onClick={toggle} smooth={true} duration={500} spy={true} exact="true">Social Media</SidebarLink>
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
