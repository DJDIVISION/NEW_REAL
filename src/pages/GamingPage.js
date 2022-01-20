import React, { useState } from 'react'

import AnimatedSection from "../components/Sections";
import { motion } from "framer-motion";
import { animationThree } from "../animations";



const GamingPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
            
            
            <AnimatedSection />
        </motion.div>
    )
}

export default GamingPage;