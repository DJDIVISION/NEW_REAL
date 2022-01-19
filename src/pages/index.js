import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes"
import NavBar from "../components/NavBar";
import { Loader } from "../animations/CanvasSection"
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import Footer from '../components/Footer';
import PartnerSlider from "../components/Sections/PartnerSlider";
import DonutSection from "../components/Sections/DonutSection";
import SectionMenu from "../components/Sections/TopSection";
import TeamSection from "../components/Sections/TeamSection";
import GamingSection from "../components/Sections/GamingSection";
import NftSection from "../components/Sections/NftSection";
import RoadMapSection from "../components/Sections/RoadMapSection";
import NewsSlider from "../components/Sections/NewsSlider";




 


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
            
            <SectionMenu />
            <NewsSlider />
            <DonutSection />
            <TeamSection />
            <GamingSection />
            <NftSection />
            <RoadMapSection />
            <PartnerSlider />
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
