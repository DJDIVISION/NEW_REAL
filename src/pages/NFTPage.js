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
import Nft5 from "../images/nft5.jpg";
import Nft6 from "../images/nft6.jpg";
import Nft7 from "../images/nft7.jpg";
import Nft8 from "../images/nft8.jpg";
import Nft9 from "../images/nft9.jpg";
import Nft10 from "../images/nft10.jpg";
import Nft11 from "../images/nft11.jpg";
import Nft12 from "../images/nft12.jpg";
import Nft13 from "../images/nft13.jpg";
import Nft14 from "../images/nft14.jpg";
import Nft15 from "../images/nft15.jpg";
import Nft16 from "../images/nft16.jpg";
import Nft17 from "../images/nft17.jpg";
import Nft18 from "../images/nft18.jpg";
import Nft19 from "../images/nft19.jpg";
import Nft20 from "../images/nft20.jpg";
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

const images = [Nft1, Nft2, Nft3, Nft4, Nft5, Nft6, Nft7, Nft8, Nft9, Nft10];
const images2 = [Nft11, Nft12, Nft13, Nft14, Nft15, Nft16, Nft17, Nft18, Nft19, Nft20];
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
            <Section id="genesis">
                <Header>GENESIS COLLECTION</Header>
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
            <Section id="spaceoutart">
                <Header>SPACEOUTART COLLECTION</Header>
            <div className="centermode">
                <Slider {...settings}>
                   {images2.map((img, idx) => (
                      <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                         <img src={img} alt={img} />
                      </div> 
                   ))} 
                </Slider>
            </div>
            </Section>
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