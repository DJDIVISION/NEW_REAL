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

import Genesis from "../components/Sections/Genesis";
import SpaceOutArt from "../components/Sections/SpaceOutArt";

import Nft21 from "../images/nft21.jpeg";
import Nft22 from "../images/nft22.jpeg";
import Nft23 from "../images/nft23.jpeg";
import Nft24 from "../images/nft24.jpeg";
import Nft25 from "../images/nft25.jpeg";
import Nft26 from "../images/nft26.jpeg";
import Nft27 from "../images/nft27.jpeg";
import Nft28 from "../images/nft28.jpeg";
import Nft29 from "../images/nft29.jpeg";
import Nft30 from "../images/nft30.jpeg";



const images3 = [Nft21, Nft22, Nft23, Nft24, Nft25, Nft26, Nft27, Nft28, Nft29, Nft30];


const Section = styled.div`
    background: ${props => props.theme.horizontalGold};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalGold}; 
    }
`;

const ArrowRight = styled(ArrowCircleRightIcon)`
    color: ${props => props.theme.text};
`;
const ArrowLeft = styled(ArrowCircleLeftIcon)`
    color: ${props => props.theme.text};
`; 

const Header = styled.h1`
    font-family: "Alphacentauri";
    font-size: 38px;
    margin-top: 100px;
    display: flex;
    color: ${props => props.theme.text};
    text-shadow: 1px 2px 4px ${props => props.theme.body},
                          1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;

    @media screen and (max-width: 1100px){
        font-size: 24px;
        margin-top: 200px;
        margin-bottom: 50px;
    }
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
            <Section id="frames">
                <Header>FRAMES COLLECTION</Header>
            <div className="centermode">
                <Slider {...settings}>
                   {images3.map((img, idx) => (
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