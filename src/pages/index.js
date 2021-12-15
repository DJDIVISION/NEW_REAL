import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TeamSection from "../components/Sections/TeamSection";
import NewsSection from "../components/Sections/NewsSection";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import PartnerSmallCards from "../components/PartnersHome/PartnerSmallCards";
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
            <NewsSection />
            <TeamSection />
            <Footer />
        </motion.div>
    );
}





export default Home;
