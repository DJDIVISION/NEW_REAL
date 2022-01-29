import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Nft21 from "../../images/ceo.jpg";
import Nft22 from "../../images/cio.jpg";
import Nft23 from "../../images/dev.jpg";



const images = [Nft21, Nft22, Nft23, Nft21, Nft22, Nft23];

const Section = styled.div`
    background: ${props => props.theme.horizontalRed};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalRed}; 
        height: 50vh;
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
    
    display: flex;
    color: ${props => props.theme.text};
    text-shadow: 1px 2px 4px ${props => props.theme.body},
                          1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;

    @media screen and (max-width: 1100px){
        font-size: 32px;
        
        
    }
`;



const Genesis = () => {

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

    return(
        <Section id="genesis">
                <Header>MEET THE TEAM</Header>
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
    )
}

export default Genesis;