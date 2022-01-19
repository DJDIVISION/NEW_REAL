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
        width: 75vw;
        height: 60vh;
        margin-top: 20px;
        border-radius: 20px;
        .slick-arrow:before{
            
        }
    }
         
`;

const MainContainer = styled.section`
    
    width: 100%;
    height: 60vh;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-repeat: no-repeat;
    


    @media screen and (max-width: 1100px) {
        width: 75vw;
        height: 60vh; 
        background-size: cover;
        background-position: center;
        border-radius: 20px;
    }
    
`;

const Card = styled.div`
    height: 45vh;
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
        width: 225px;
    }
`;

const Logo = styled.div`
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: 3px solid gold;
    transform: translate(0%, -240%);
    z-index: 100;
    position: absolute;

    @media screen and (max-width: 1100px){
        
        height: 60px;
        width: 60px;
    }
`;

const Title = styled.h1`
    font-family: "Alphacentauri";
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    @media screen and (min-width: 1100px){
        font-size: 24px; 
        margin-top: 90px;
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
    
    
`;

const Description = styled.h2`
    font-size: 14px;
    color: ${props => props.theme.text};
    text-align: center;
    padding-top: 15px;
    

    @media screen and (min-width: 1100px){
        padding: 0 20px;
        font-size: 16px;
        
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
        margin-top: 20px;
        
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
                       <Card>
                            <Logo style={{backgroundImage: `url(${FortisLogo})`, backgroundSize: "cover"}} />   
                            <Title>FORTIS</Title>
                            <Type>PARTNER</Type> 
                            <Description>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want</Description>
                            <Link to="PartnersPage">MEET ME</Link>
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
                            <Link to="PartnersPage">MEET ME</Link>
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
                            <Link to="PartnersPage">MEET ME</Link>
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
                            <Link to="PartnersPage">MEET ME</Link>
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
                            <Link to="PartnersPage">MEET ME</Link>
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
                            <Link to="PartnersPage">MEET ME</Link>
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
                            <Link to="PartnersPage">MEET ME</Link>
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
                            <Link to="PartnersPage">MEET ME</Link>
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