import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
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
    background: ${props => props.theme.horizontalBlue};
`;

const Carroussel = styled.div`
    width: 50vw;
    height: 600px;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    
    
    
    
    .slick-arrow:before{
        
    }

    .slick-dots button:before{
        color: ${props => props.theme.text};
        font-size: 0.5rem;
        
    }
    
    

    @media screen and (max-width: 1100px) {
        width: 75vw;
        height: 70vh;
        margin-top: -10px;
        
        border-radius: 20px;
        .slick-arrow:before{
            
        }
    }
         
`;

const MainContainer = styled.section`
    
    width: 100%;
    height: 400px;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    padding-top: 100px;
    border-radius: 20px;


    @media screen and (max-width: 1100px) {
        width: 75vw;
        height: 60vh; 
        background-size: cover;
        background-position: center;
        
        padding-top: 40px;
        
    }
    
`;

const Card = styled.div`
    height: 300px;
    width: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 ${props => props.theme.text};
    border-radius: 20px;
    backdrop-filter: blur(8px);
    color: ${props => props.theme.body};
    border: 2px solid gold;

    @media screen and (min-width: 1100px){
        width: 200px;
        height: 325px;
        margin-top: -100px;
        
    }
`;

const Logo = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 3px solid gold;
    transform: translate(0%, -240%);
    z-index: 100;
    position: absolute;

    @media screen and (min-width: 1100px){
        transform: translate(0%, -210%);
        height: 75px;
        width: 75px;
    }
`;

const Title = styled.h1`
    font-family: "Alphacentauri";
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    @media screen and (min-width: 1100px){
        font-size: 28px; 
        margin-top: 40px;
    }
`;

const Type = styled.div`
    height: 25px;
    width: 100px;
    border: 2px solid gold;
    border-radius: 20px;
    text-align: center;
    color: ${props => props.theme.text};
    font-size: 12px;
    padding-top: 5px;

    @media screen and (min-width: 1100px){
        margin-bottom: 5px;
    }
    
    
`;

const Description = styled.h2`
    font-size: 14px;
    color: ${props => props.theme.text};
    text-align: center;
    padding-top: 15px;
    

    @media screen and (min-width: 1100px){
        padding: 20px;
        font-size: 14px;
        
        
    }

`;

const Link = styled(LinkR)`
    font-size: 12px;
    border: 1px solid ${props => props.theme.text};
    margin-top: 10px;
    padding: 5px 10px;
    text-decoration: none;
    color: ${props => props.theme.text};
    font-weight: bold;
    @media screen and (min-width: 1100px){
        
        
    }
`;




const SectionImage = styled.div`
    height: 150px;
    background-color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100vw;
    }

    @media screen and (min-width: 1000px){
        height: 150px;
        
        img{
            width: 40vw;
        }
    }
`;

const Image = styled.img`
    width: 100vw;
    height: auto;
    display: flex;
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
    height: 200px;
    width: 100%;
    position: absolute;
   transform: rotate(180deg);
   margin-top: -100px;

    @media screen and (max-width: 768px){
        
    }

    @media screen and (max-width: 600px){
       margin-top: -120px; 
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
    height: 200px;
    width: 100%;
    position: absolute;
    margin-top: 580px;

    @media screen and (max-width: 768px){
        margin-top: 730px;
    }

    @media screen and (max-width: 600px){
        margin-top: 550px;
    }

    svg path{
        animation: ${pathAnim} linear 7s infinite; 
        transform: scaleY(0.3);    
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


const PartnerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <SectionImage id="partners">
            <Image src={PartnersImage} alt="" />
            </SectionImage>
        <Section >
            <Carroussel>
                <Slider {...settings}>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${FortisBack})`}}>
                       <Card>
                            <Logo style={{backgroundImage: `url(${FortisLogo})`, backgroundSize: "cover"}} />   
                            <Title>FORTIS</Title>
                            <Type>PARTNER</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="/PartnersPage">MEET ME</Link>
                        </Card> 
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${TelosBack})`}}>
                        <Card>
                            <Logo style={{backgroundImage: `url(${TelosLogo})`, backgroundSize: "cover"}} />   
                            <Title>TELOS</Title>
                            <Type>BLOCKCHAIN</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="/PartnersPage">MEET ME</Link>
                        </Card>      
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${NftfyBack})`}}>
                        <Card>
                            <Logo style={{backgroundImage: `url(${NftfyLogo})`, backgroundSize: "cover"}} />   
                            <Title>NFTFY</Title>
                            <Type>PARTNER</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="/PartnersPage">MEET ME</Link>
                        </Card>    
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${WombatBack})`}}>
                        <Card>
                            <Logo style={{backgroundImage: `url(${WombatLogo})`, backgroundSize: "cover"}} />   
                            <Title>WOMBAT</Title>
                            <Type>WALLET</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="/PartnersPage">MEET ME</Link>
                        </Card>    
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${TstarterBack})`}}>
                        <Card>
                            <Logo style={{backgroundImage: `url(${TstarterLogo})`, backgroundSize: "cover"}} />   
                            <Title >T-STARTER</Title>
                            <Type>LAUNCHPAD</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="/PartnersPage">MEET ME</Link>
                        </Card>    
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${AnchorBack})`}}>
                        <Card>
                            <Logo style={{backgroundImage: `url(${AnchorLogo})`, backgroundSize: "cover"}} />   
                            <Title>ANCHOR</Title>
                            <Type>WALLET</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="/PartnersPage">MEET ME</Link>
                        </Card>
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${AreaXBack})`}}>
                        <Card>
                            <Logo style={{backgroundImage: `url(${AreaXLogo})`, backgroundSize: "cover"}} />   
                            <Title>AREA X</Title>
                            <Type>PARTNER</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="/PartnersPage">MEET ME</Link>
                        </Card>    
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${WayneBack})`}}>
                        <Card>
                            <Logo style={{backgroundImage: `url(${WayneLogo})`, backgroundSize: "cover"}} />   
                            <Title>WAYNE SHEPPARD</Title>
                            <Type>PARTNER</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="/PartnersPage">MEET ME</Link>
                        </Card>   
                    </MainContainer>
                    </div>
                </Slider>
            </Carroussel>
        </Section>
        </>
    )
}

export default PartnerSlider;