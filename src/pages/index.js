import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes"
import NavBar from "../components/NavBar";
import { Loader } from "../animations/CanvasSection"
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import Footer from '../components/Footer';
import CanvasContainer from "../animations/Planet"
import PartnerSlider from "../components/Sections/PartnerSlider";


import NewsSection from "../components/Sections/NewsSection";
import BuySellSection from "../components/Sections/BuySellSection";
import GamingSection from "../components/Sections/GamingSection";

const donutData = [
    {name: "<5", value: 19},
    {name: "5-9", value: 20},
    {name: "10-14", value: 19},
    {name: "15-19", value: 24},
    {name: "20-24", value: 22},
    {name: "25-29", value: 29},
    {name: "30-34", value: 22},
    {name: "35-39", value: 18},
    {name: "40-44", value: 23},
    {name: "45-49", value: 19},
    {name: "50-54", value: 16},
    {name: "55-59", value: 19},
    {name: "60-64", value: 28},
    {name: "65-69", value: 17},
    {name: "70-74", value: 20},
    {name: "75-79", value: 17},
    {name: "80-84", value: 18},
    {name: "≥85", value: 21}
   ]




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
            {/* <CanvasContainer /> */}
            <NewsSection />
            <GamingSection data={donutData}/>
            <BuySellSection />
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
