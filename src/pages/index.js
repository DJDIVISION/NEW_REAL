import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/Sections/InfoSection";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import PartnerSmallCards from "../components/PartnersHome/PartnerSmallCards";
import { HomeNews, HomePartners, HomeTeam, HomeGaming, HomeNFT } from "../components/Sections/Data.js";



const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...HomeNews}/>
            <InfoSection {...HomeTeam}/>
            <InfoSection {...HomeGaming}/>
            <InfoSection {...HomePartners}/>
            <InfoSection {...HomeNFT}/>
            <PartnerSmallCards />
        </motion.div>
    );
}

function Menu(props) {
    return (
        <nav className="menu">
            <ul className="menu-nav"> { props.children } </ul>
        </nav>
    )
}



export default Home;
