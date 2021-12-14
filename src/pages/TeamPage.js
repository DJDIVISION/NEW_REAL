import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import AnimatedSection from "../components/Sections";
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
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 
            <AnimatedSection />
            <TeamCards/>
        </motion.div>
    )
}

export default TeamPage;