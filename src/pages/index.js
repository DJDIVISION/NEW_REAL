import React, { useState, useEffect } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TeamSection from "../components/Sections/TeamSection";
import NewsSection from "../components/Sections/NewsSection";
import RoadMapSection from "../components/Sections/RoadMapSection";
import GamingSection from "../components/Sections/GamingSection";
import NftSection from "../components/Sections/NftSection";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import PartnersSection from "../components/Sections/PartnersSection";
import Footer from '../components/Footer';
import { SliderData } from "../components/data/SliderData";
import { NewSliderData } from "../components/data/NewSliderData";
import  PartnerSlider  from "../components/Sections/PartnerSlider";
import SocialIcons from "../components/SocialIcons"
//import HeroParticles from '../components/Particles/HeroParticles';




const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

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
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            
            <HeroSection />
            {/* <HeroParticles /> */}
            <NewsSection />
            <TeamSection />
            <PartnersSection slides={SliderData}/>
            <PartnerSlider slides={NewSliderData} />
            <GamingSection />
            
            <NftSection />
            <RoadMapSection />
            <SocialIcons />
            <Footer />
        </motion.div>
    );
}





export default Home;
