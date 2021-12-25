import React, { useState, useEffect } from 'react'
import NavBar from "../components/NavBar"
import Sidebar from "../components/Sidebar";
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
import SocialIcons from "../components/SocialIcons";



const Home = () => {

    const [showMenu, setShowMenu] = useState(true);

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
            {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
            <NavBar showMenu={showMenu} toggle={toggle}/>
            <Footer /> 
        </motion.div>
    );
}





export default Home;
