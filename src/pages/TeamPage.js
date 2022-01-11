import React, { useState } from 'react'
import TeamSidebar from "../components/Sidebar/TeamSideBar";

import TeamSection from "../components/Sections/TeamSection";
import { TeamCards } from "../components/TeamCard";
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
            
            <TeamSection />
            <TeamCards/>
        </motion.div>
    )
}

export default TeamPage;