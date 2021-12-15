import React, { useState } from 'react'
import TeamSidebar from "../components/Sidebar/TeamSideBar";
import TeamNavBar from "../components/NavBar/TeamNavBar";
import TeamSection from "../components/Sections/TeamSection";
import { TeamCards } from "../components/TeamCard";
import InfoSection from "../components/Sections";
import Picture1 from "../images/teamSvg.svg";
import { motion } from "framer-motion";
import { animationThree } from "../animations";



const TeamPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
            <TeamSidebar isOpen={isOpen} toggle={toggle}/>
            <TeamNavBar toggle={toggle}/> 
            <TeamSection />
            <TeamCards/>
        </motion.div>
    )
}

export default TeamPage;