import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/Sections/InfoSection";
import AnimatedSection from "../components/Sections";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import PartnerSmallCards from "../components/PartnersHome/PartnerSmallCards";
import { HomeNews, HomePartners, HomeTeam, HomeGaming, HomeNFT } from "../components/Sections/Data.js";
import Footer from '../components/Footer';



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
            <AnimatedSection />
            <InfoSection {...HomeNews}/>
            <InfoSection {...HomeTeam}/>
            <InfoSection {...HomeGaming}/>
            <InfoSection {...HomePartners}/>
            <InfoSection {...HomeNFT}/>
            <Footer />
        </motion.div>
    );
}





export default Home;
