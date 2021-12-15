import React, { useState } from 'react'
import GamingSidebar from "../components/Sidebar/GamingSidebar";
import GamingNavBar from "../components/NavBar/GamingNavBar";
import AnimatedSection from "../components/Sections";
import  GamingCards  from "../components/GamingCard";
import InfoSection from "../components/Sections";
import Picture1 from "../images/teamSvg.svg";
import { motion } from "framer-motion";
import { animationThree } from "../animations";



const GamingPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
            <GamingSidebar isOpen={isOpen} toggle={toggle}/>
            <GamingNavBar toggle={toggle}/> 
            <AnimatedSection />
            <GamingCards />
        </motion.div>
    )
}

export default GamingPage;