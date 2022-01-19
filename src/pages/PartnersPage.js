import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes"
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import PartCards from "../components/PartnersCards/PartnerCards";
import { motion } from "framer-motion";
import { animationThree } from "../animations";


const PartnersPage = () => {


    const [theme, setTheme] = useState("dark");
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <ThemeProvider theme={themes[theme]}>
            <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <NavBar toggle={toggle}/> 
                <PartCards />
            </motion.div>
        </ThemeProvider>
    );
};

export default PartnersPage;

