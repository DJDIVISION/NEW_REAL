import React, {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Link as LinkR } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, Button } from "@material-ui/core";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import PartnersImage from "../../images/BestPartnersDivider.png";

import FortisBack from "../../images/fortisbackground.jpg";
import FortisLogo from "../../images/fortis_logo.png";
import TelosBack from "../../images/telos_background.jpg";
import TelosLogo from "../../images/telos_logo.png";
import NftfyBack from "../../images/nftfy_background.jpg";
import NftfyLogo from "../../images/nftfy_logo.png";
import WombatBack from "../../images/wombat_background.png";
import WombatLogo from "../../images/wombat_logo.png";
import TstarterBack from "../../images/tstarter_background.png";
import TstarterLogo from "../../images/tstarter_logo.png";
import AnchorBack from "../../images/anchor_background.png";
import AnchorLogo from "../../images/anchor_logo.png";
import AreaXBack from "../../images/areax_background.png";
import AreaXLogo from "../../images/areax_logo.jpg";
import WayneLogo from "../../images/wayne.jpg";
import WayneBack from "../../images/wayne_background.jpg";


const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    padding: 3rem 10rem;
    background: ${props => props.theme.body};
`;

const Carroussel = styled.div`
    width: 50vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 40px;
    
    
    .slick-arrow:before{
        
    }

    .slick-dots button:before{
        color: ${props => props.theme.text};
        font-size: 0.5rem;
        margin-top: 10px;
        transform: scale(1.2);
    }
    

    @media screen and (max-width: 1100px) {
        width: 90vw;
        height: 60vh;
        margin-top: 40px;

        .slick-arrow:before{
            display: none;
        }
    }
         
`;

const MainContainer = styled.section`
    
    width: 70vw;
    height: 60vh;
    background-size: contain;
    display: flex;
    background-repeat: no-repeat;

    @media screen and (max-width: 1100px) {
        width: 90vw;
        height: 60vh; 
        background-size: cover;
        background-position: center;
        
    }
    
`;




const SectionImage = styled.div`
    height: 150px;
    background-color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1000px){
        height: 350px;
        
        img{
            width: 50vw;
        }
    }
`;

const Image = styled.img`
    width: 100vw;
    height: auto;
    display: flex;
`;


const PartnerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return(
        <>
        <SectionImage id="partners">
            <Image src={PartnersImage} alt="" />
            </SectionImage>
        <Section >
            <Carroussel>
                <Slider {...settings}>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${FortisBack})`}}>
                            
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${TelosBack})`}}>
                            
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${NftfyBack})`}}>
                            
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${WombatBack})`}}>
                            
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${TstarterBack})`}}>
                            
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${AnchorBack})`}}>
                        
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${AreaXBack})`}}>
                        
                        </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${WayneBack})`}}>
                            
                    </MainContainer>
                    </div>
                </Slider>
            </Carroussel>
        </Section>
        </>
    )
}

export default PartnerSlider;