import {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes"
import NavBar from "../components/NavBar";
import TeamSection from "../components/Sections/TeamSection";
import Footer from "../components/Footer";

const Home = (props) => {

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeProvider theme={themes[theme]}>
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <NavBar theme={theme} setTheme={setTheme}/>
            <TeamSection />
            <TeamSection />
            <TeamSection />
            <Footer />
            </motion.div>
        </ThemeProvider>
    );
}

export default Home;