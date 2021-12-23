import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from "styled-components";
import { motion} from "framer-motion";
import { IconButton } from "@material-ui/core";
import "../../index.css";
import { Link } from "react-router-dom";
import FortisLogo from "../../images/fortisbackground.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Button = styled(Link)`
    background: ${({ primary}) => (primary ? '#000d1a' : 'CD853F')};
    
    white-space: nowrap;
    outline: none;
    border: 1px solid gold;
    min-width: 100px;
    max-width: 150px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 30px' : '14px 24px')};
    color: ${({primary}) => (primary ? 'whitesmoke' : 'black')};
    font-size: ${({big}) => (big ? '20px' : '14px')};
    border-radius: 10px;

    &:hover{
        transform: scale(1.1) ;
    }

    @media screen and (max-width: 860px) {
        padding: 10px 14px;
        width: 90px;
    }
`;

const Section = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative; 
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius:50px;
    padding: 10px;
    margin-left: 10px;
    user-select: none;
    transition: 0.3s;

    &:hover{
       background: #cd853f;
       transform: scale(1.05);
    }
`;

const PartnerSlide = styled.div`
    z-index:1;
    width: 100%;
    height: 100%;

`;
const PartnerSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%);
    }

`;
const PartnerImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    padding: 100px;
    
    
    @media screen and (max-width: 860px) {
        margin-top: -120px;
    }

`;
const PartnerContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: whitesmoke;
    margin-top: 250px;

    h1 {
        font-size: clamp(2rem, 10vw, 20rem);
        text-shadow: -1px 1px 0 whitesmoke,
                          2px 3px 0 whitesmoke,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
        text-align: left;
        color: gold;
        -webkit-text-stroke: 2px black;

        @media screen and (max-width: 860px) {
            font-size: 60px;
            
        }
    }

    p {
        margin-bottom: 1.2rem;
        font-size: clamp(1.5rem, 7.5vw, 15rem);
        text-shadow: -1px 1px 0 whitesmoke,
                          1px 2px 0 whitesmoke,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
        text-align: left;
        margin-bottom: 0.8rem;
        color: gold;
        -webkit-text-stroke: 2px black;

        @media screen and (max-width:860px){
            font-size: 38px;
        }
    }
`;
const ArrowForward = styled(ArrowForwardIosIcon)`
    color: whitesmoke;
    background-color: grey;
    border-radius:50%;
    transform: scale(1.8);
    padding: 5px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    
`;
const ArrowBack = styled(ArrowBackIosNewIcon)`
    color: whitesmoke;
    background-color: grey;
    border-radius:50%;
    transform: scale(1.8);
    padding: 5px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    
`;



const SliderButtons = styled.div`
   position: absolute;
   bottom: 50px;
   right: 50px;
   display: flex;
   z-index: 10; 
`;

function PartnersSection({slides}) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
           setCurrent(current => (current === length - 1 ? 0 : current + 1)) 
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
           if(timeout.current) {
               clearTimeout(timeout.current)
           } 
        };
    }, 
    [current, length])

    const nextSlide = () => {

        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);

    }

    const prevSlide = () => {

        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current -1);

    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <Section id="partners">
           <Wrapper>
            {slides.map((slide, index) => {
                return (
                   <PartnerSlide key={index}>
                       { index === current && (
                        <PartnerSlider>
                        <PartnerImage src={slide.image} alt={slide.alt} />
                            <PartnerContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.type}</p>
                                <Button to={slide.path} primary='true' css={`max-width:160px;`}>{slide.label}
                                </Button>
                            </PartnerContent>
                        </PartnerSlider>
                       )}
                       
                   </PartnerSlide> 
                )
            })}
            <SliderButtons>
               <IconButton><ArrowBack onClick={prevSlide}/></IconButton>
               <IconButton ><ArrowForward onClick={nextSlide}/></IconButton>
            </SliderButtons>
           </Wrapper>
        </Section>
    )
}

export default PartnersSection
