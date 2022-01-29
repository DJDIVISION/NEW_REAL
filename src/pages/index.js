import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes"
import NavBar from "../components/NavBar";
import { Loader } from "../animations/CanvasSection"
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import Footer from '../components/Footer';
import PartnersSection from "../components/Sections/PartnersSection";
import Genesis from "../components/Sections/Genesis";
import SectionMenu from "../components/Sections/TopSection";
import GamingSection from "../components/Sections/GamingSection";
import NftSection from "../components/Sections/NftSection";
import TeamSection from "../components/Sections/TeamSection";
import DAppSection from "../components/Sections/DAppSection";
import RoadMapSection from "../components/Sections/RoadMapSection";
import TokenomicsSection from "../components/Sections/TeamSection";




 


const Home = (props) => {

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
            <TeamSection />
            <DAppSection />
            <PartnersSection />
            
            
            {/*  <TokenomicsSection />
            <GamingSection />
            <TeamSection />
            
            
            <BSCSection /> */}
            
            <Footer />
        </motion.div>
        </ThemeProvider>
    );
}

export default Home;
