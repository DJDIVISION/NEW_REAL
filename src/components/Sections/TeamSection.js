import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import {Link as LinkR} from "react-router-dom";
 
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Nft21 from "../../images/ceo.jpg";
import Nft22 from "../../images/cio.jpg";
import Nft23 from "../../images/dev.jpg";

const images = [Nft21, Nft22, Nft23, Nft21, Nft22, Nft23];

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
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    text-shadow: 1px 2px 4px ${props => props.theme.body},
                          1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;

    @media screen and (max-width: 1100px){
        font-size: 32px;
        margin-top: 140px;
        
        
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.horizontalBlue};
    margin-top: -100px;
    @media screen and (max-width: 1100px){
        flex-direction: column;
        height: 95vh;
    }
`;



const pathAnim = keyframes`
    0% {
        d: path("M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500");
    }
    25% {
        d: path("M0,100 C220,100,440,292,660,292 C880,292,1100,100,1320,100 L1320 500 L0 500");
    }
    50% {
        d: path("M0,192 C220,290,440,290,660,192 C880,100,1100,100,1320,192 L1320 500 L0 500");
    }
    75% {
        d: path("M0,292 C220,292,440,100,660,100 C880,100,1100,292,1320,292 L1320 500 L0 500");
    }
    100% {
        d: path("M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500");
    }
`;

const WrapperTop = styled.div`
    height: 100px;
    background: transparent;
    width: 100%;
    transform: rotate(180deg);
    

    @media screen and (max-width: 768px){
        
    }

    @media screen and (max-width: 600px){
       
    }

    svg path{
        animation: ${pathAnim} linear 7s infinite; 
        transform: scaleY(0.2);    
        @media screen and (max-width: 1100px){
            transform: scaleY(0.8);   
    } 
    }

    svg path:nth-child(2){
        animation-delay: 1s;
    }
    svg path:nth-child(3){
        animation-delay: 3s;
    }
    svg path:nth-child(4){
        animation-play-state: paused;
    }
`;

const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    background: transparent;
    margin-top: -100px;
    @media screen and (max-width: 768px){
        
    }

    @media screen and (max-width: 600px){
        
    }

    svg path{
        animation: ${pathAnim} linear 7s infinite; 
        transform: scaleY(0.2);    
        @media screen and (max-width: 1100px){
            transform: scaleY(1.2);   
    } 
    }

    svg path:nth-child(2){
        animation-delay: 1s;
    }
    svg path:nth-child(3){
        animation-delay: 3s;
    }
    svg path:nth-child(4){
        animation-play-state: paused;
    }
`;

const TeamSection = () => {

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
        <>
        <WrapperTop>
            <svg viewBox="0 0 1320 500">
                <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#0014a8" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#3f00ff" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#545aa7" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#041690" />
            </svg>
            </WrapperTop>
            
        <Container id="team">
            <Header>MEET THE TEAM</Header>
            <div className="centermode">
                <Slider {...settings}>
                   {images.map((img, idx) => (
                      <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                         <LinkR to="/TeamPage"> <img src={img} alt={img} /></LinkR>
                      </div> 
                   ))} 
                </Slider>
            </div>
        </Container>
        <Wrapper>
            <svg viewBox="0 0 1320 500">
                <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#0014a8" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#3f00ff" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#545aa7" />
                 <path fill-opacity="0.5" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#041690" />
            </svg>
            </Wrapper>
        
        </>
    )
}



export default TeamSection;