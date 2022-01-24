import React, {useState, useContext} from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Nft11 from "../../images/nft11.jpg";
import Nft12 from "../../images/nft12.jpg";
import Nft13 from "../../images/nft13.jpg";
import Nft14 from "../../images/nft14.jpg";
import Nft15 from "../../images/nft15.jpg";
import Nft16 from "../../images/nft16.jpg";
import Nft17 from "../../images/nft17.jpg";
import Nft18 from "../../images/nft18.jpg";
import Nft19 from "../../images/nft19.jpg";
import Nft20 from "../../images/nft20.jpg";

const images2 = [Nft11, Nft12, Nft13, Nft14, Nft15, Nft16, Nft17, Nft18, Nft19, Nft20];

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

const SpaceOutArt = () => {

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
    )
}

export default SpaceOutArt;