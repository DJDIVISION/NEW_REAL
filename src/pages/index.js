import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes"
import NavBar from "../components/NavBar";
import { Loader } from "../animations/CanvasSection"
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import Footer from '../components/Footer';
import CanvasContainer from "../animations/Planet"
import RoadMapSection from "../components/Sections/RoadMapSection";
import PartnerSlider from "../components/Sections/PartnerSlider";
import Tokenomics from "../components/Sections/Tokenomics";




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
            <PartnerSlider /> 
            <Tokenomics /> 
            <RoadMapSection />
            <Footer /> 
        </motion.div>
        </ThemeProvider>
    );
}

function HomeLoader () {
    
    return (
        <div>
            <Loader/>
            <Home/>
        </div>
    )
}





export default HomeLoader;
