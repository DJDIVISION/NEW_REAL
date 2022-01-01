
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarContainer, Icon, SidebarWrapper, SidebarLink, SidebarMenu } from "./Elements";
import logoTelos from "../../images/telos_logo.png";
import logoBsc from "../../images/bsc_logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import CasinoIcon from '@mui/icons-material/Casino';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MapIcon from '@mui/icons-material/Map';

const RoadMapIcon = styled(MapIcon)`
   color: ${props => props.theme.text};
    margin-right: 10px;
`;

const NftIcon = styled(ColorLensIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;

const GamingIcon = styled(CasinoIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;

const TeamIcon = styled(GroupsIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;

const PartnersIcon = styled(SupervisedUserCircleIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;
const NewsSidebarIcon = styled(NewspaperIcon)`
    color: ${props => props.theme.text};
    margin-right: 10px;
`;


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




const Sidebar = ({ showMenu, setShowMenu, props}) => {
    
    return (
        <>
        
        {showMenu && (
            <motion.div variants={MenuVariants} initial="hidden" animate="show">
            <SidebarContainer >
                <SidebarWrapper>
                    <SidebarMenu >
                         <SidebarLink to="news" onClick={() => setShowMenu(!showMenu)} smooth={true} duration={500} spy={true} exact="true"><NewsSidebarIcon />News</SidebarLink>
                         <SidebarLink to="team"  smooth={true} duration={500} spy={true} exact="true"><TeamIcon />Team</SidebarLink>
                         <SidebarLink to="partners"   duration={500} spy={true} exact="true"><PartnersIcon />Partners</SidebarLink>
                         <SidebarLink to="gaming"  smooth={true} duration={500} spy={true} exact="true"><GamingIcon />Gaming</SidebarLink>
                         <SidebarLink to="nft"  smooth={true} duration={500} spy={true} exact="true"><NftIcon />NFTs</SidebarLink>
                         <SidebarLink to="roadmap"  smooth={true} duration={500} spy={true} exact="true"><RoadMapIcon />RoadMap</SidebarLink>
                         <SidebarLink to="telos"  smooth={true} duration={500} spy={true} exact="true">TELOS</SidebarLink>
                         <SidebarLink to="bsc"  smooth={true} duration={500} spy={true} exact="true">BSC</SidebarLink>
                         <SidebarLink to="social"  smooth={true} duration={500} spy={true} exact="true">Social Media</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
            </motion.div>
            
        )}
        
        </>
    );
}

export default Sidebar;
