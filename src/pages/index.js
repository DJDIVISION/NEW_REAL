import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, themes } from "../components/Themes"
import NavBar from "../components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { animationOne, transition } from "../animations";
import PartnersSection from "../components/Sections/PartnersSection";
import Footer from '../components/Footer';
import SimpleSlider from "../components/Sections/Partners";
import CanvasContainer from "../animations/Planet"




const Home = () => {

    const [theme, setTheme] = useState("dark");

    const [showMenu, setShowMenu] = useState(false);



    
    const [scrollNavDown, setScrollNavDown] = useState(false);

    const changeNavDown = () => {
        if(window.scrollY >= 360) {
            setScrollNavDown(true)
        } 
        else {
            setScrollNavDown(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavDown) 
     }, []);

    return (
        <ThemeProvider theme={themes[theme]}>
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <NavBar showMenu={showMenu} theme={theme} setTheme={setTheme} setShowMenu={setShowMenu}/>
            <CanvasContainer />
            <Footer /> 
            <Footer /> 
            <SimpleSlider />
            <Footer /> 
        </motion.div>
        </ThemeProvider>
    );
}





export default Home;
