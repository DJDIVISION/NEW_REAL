import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import NavBar from "../components/NavBar";
import DonutSection from "../components/Sections/DonutSection";
import BuySellSection from "../components/Sections/BuySellSection";
import { animationThree } from "../animations";




const TokenomicsPage = () => {

    const [theme, setTheme] = useState("dark");

    return (
        <>
        <ThemeProvider theme={themes[theme]}>
            <motion.div >
                <NavBar />
                <DonutSection />
                <BuySellSection />
            </motion.div>
        </ThemeProvider>
        </>
    )
}

export default TokenomicsPage;
