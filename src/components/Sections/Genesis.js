import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Nft1 from "../../images/nft1.jpg";
import Nft2 from "../../images/nft2.jpg";
import Nft3 from "../../images/nft3.jpg";
import Nft4 from "../../images/nft4.jpg";
import Nft5 from "../../images/nft5.jpg";
import Nft6 from "../../images/nft6.jpg";
import Nft7 from "../../images/nft7.jpg";
import Nft8 from "../../images/nft8.jpg";
import Nft9 from "../../images/nft9.jpg";
import Nft10 from "../../images/nft10.jpg";

const images = [Nft1, Nft2, Nft3, Nft4, Nft5, Nft6, Nft7, Nft8, Nft9, Nft10];

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
    )
}

export default Genesis;