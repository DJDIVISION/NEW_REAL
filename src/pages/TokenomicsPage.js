import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import NavBar from "../components/NavBar";
import GamingSection from "../components/Sections/GamingSection";
import { animationThree } from "../animations";


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

const TokenomicsPage = () => {

    const [theme, setTheme] = useState("dark");

    return (
        <>
        <ThemeProvider theme={themes[theme]}>
            <motion.div >
                <NavBar />
                <GamingSection data={donutData}/>
            </motion.div>
        </ThemeProvider>
        </>
    )
}

export default TokenomicsPage;
