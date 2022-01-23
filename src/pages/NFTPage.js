import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { Link as LinkR } from "react-router-dom";
import { animationThree } from "../animations";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import NFTNavBar from "../components/NavBar/NFTNavBar";
import TelegramIcon from '@mui/icons-material/Telegram';
import {IconButton} from "@material-ui/core";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Nft1 from "../images/nft1.jpg";
import Nft2 from "../images/nft2.jpg";
import Nft3 from "../images/nft3.jpg";
import Nft4 from "../images/nft4.jpg";

const images = [Nft1, Nft2, Nft3, Nft4];


const Section = styled.div`
    background: ${props => props.theme.body};
    height: 100vh;
    width: 100vw;
`;

const ArrowRight = styled(ArrowCircleRightIcon)`
    color: ${props => props.theme.text};
`;
const ArrowLeft = styled(ArrowCircleLeftIcon)`
    color: ${props => props.theme.text};
`;


const GamingPage = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <ArrowRight />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <ArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        className: "centermode",
        infinite: true,
        lazyLoad: true,
        speed: 300, 
        slidesToShow: 3, 
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };

    const [theme, setTheme] = useState("dark");

    return (
        <ThemeProvider theme={themes[theme]}>
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
            <NFTNavBar theme={theme} setTheme={setTheme}/>
            <Section>
            <div className="centermode">
                <Slider {...settings}>
                   {images.map((img, idx) => (
                      <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                         <img src={img} alt={img} />
                      </div> 
                   ))} 
                </Slider>
            </div>
            </Section>
        </motion.div>
        </ThemeProvider>
    )
}

export default GamingPage;