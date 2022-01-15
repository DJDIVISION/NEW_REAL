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



const MainContainer = styled.section`
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 500px;
    width: 300px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 ${props => props.theme.body};
    border-radius: 20px;
    backdrop-filter: blur(5px);
    color: ${props => props.theme.body};
    border: 2px solid gold;
    margin-top: 30px;
    

    @media screen and (max-width: 860px) {
        width: 280px;
        margin-right: 50px;
        height: 550px;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 120px;
    border-radius: 50%;
`;

const TextContainer = styled.h1`
    color: ${props => props.theme.text};
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PartnerName = styled.h1`
    font-family: "Alphacentauri";
    font-size: 38px;
    margin-bottom: 30px;
    color: ${props => props.theme.body};
`;

const PartnerType = styled.h1`
    font-size: 24px;
    color: ${props => props.theme.text};
    border: 2px solid gold;
    padding: 8px 20px;
    border-radius: 20px;
    font-family: "Comfortaa";
`;

const PartnerDesc = styled.p`
    font-size: 18px;
    text-align: center;
    font-family: "Comfortaa";
    padding: 10px 20px;
    margin-top: 20px;
    line-height: 1.3;
    color: ${props => props.theme.text};
`;



const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3rem 0;
    background: ${props => props.theme.body};
    

`;

const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;
    text-align: center;
    color: ${props => props.theme.text};
    
    

    &::before {
        content: "";
        
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid ${props => props.theme.body};
        transform: translate(-50%);
        
    }
`;

const Carroussel = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    
    .slick-arrow:before{
        display: none;
    }

    .slick-dots button:before{
        color: ${props => props.theme.text};
        font-size: 0.5rem;
        margin-top: 10px;
    }
    

    @media screen and (max-width: 860px) {
        width: 85%;
    }
         
`;

const PartnerButton = styled(Button)`
    &&& {
        color: ${props => props.theme.body};
        font-size: 18px;
        font-weight: bold;
        border: 1px solid gold;
        padding: 8px 20px;
        border-radius: 20px;
        font-family: "Alphacentauri";
        margin-top: 10px;
        background: ${props => props.theme.text};
        
        position: relative;
        
    }
`;

const Image = styled.img`
    width: 100vw;
    height: auto;
    display: flex;
`;

const SectionImage = styled.div`
    height: 150px;
    background-color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1000px){
        height: 500px;
        
        img{
            width: 70vw;
        }
    }
`;

const PartnerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>
        <SectionImage id="news">
            <Image src={PartnersImage} alt="" />
            </SectionImage>
        <Section>
            <Carroussel>
            <Slider {...settings}>
      <div id="partners">
      <MainContainer style={{backgroundImage: `url(${FortisBack})`}}>
            <Container>
                <LogoContainer>
                    <img src={FortisLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>FORTIS</PartnerName>
                    <PartnerType>PARTNER</PartnerType>
                    <PartnerDesc>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want  </PartnerDesc>
                </TextContainer>
                <LinkR to="/PartnersPage"><PartnerButton>MEET ME</PartnerButton></LinkR>
            </Container>
        </MainContainer>
      </div>
      <div>
      <MainContainer style={{backgroundImage: `url(${TelosBack})`}}>
            <Container>
                <LogoContainer>
                    <img src={TelosLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>TELOS</PartnerName>
                    <PartnerType>BLOCKCHAIN</PartnerType>
                    <PartnerDesc>Telos is the ideal network for real world use across multiple industries .Telos based Tokens NFT’s and Smart Contracts are already used for DeFi </PartnerDesc>
                </TextContainer>
                <LinkR to="/PartnersPage" ><PartnerButton>MEET ME</PartnerButton></LinkR>
            </Container>
        </MainContainer>
      </div>
      <div>
      <MainContainer style={{backgroundImage: `url(${NftfyBack})`}}>
            <Container>
                <LogoContainer>
                    <img src={NftfyLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%', background: 'black'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>NFTFY</PartnerName>
                    <PartnerType>PARTNER</PartnerType>
                    <PartnerDesc>Nftfy is a permissionless Decentralized Application (DApp) that fractionalizes Non-Fungible Tokens, generating ERC20-compliant fractions fully backed by the NFTs.  </PartnerDesc>
                </TextContainer>
                <LinkR to="/PartnersPage"><PartnerButton>MEET ME</PartnerButton></LinkR>
            </Container>
        </MainContainer>
      </div>
      <div>
      <MainContainer style={{backgroundImage: `url(${WombatBack})`}}>
            <Container>
                <LogoContainer>
                    <img src={WombatLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%', background: 'black'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>WOMBAT</PartnerName>
                    <PartnerType>WALLET</PartnerType>
                    <PartnerDesc>With Wombat, you can send, receive, and earn various tokens without any technical knowledge. With only a couple of taps, you can operate over 50 assets across multiple networks.   </PartnerDesc>
                </TextContainer>
                <LinkR to="/PartnersPage"><PartnerButton>MEET ME</PartnerButton></LinkR>
            </Container>
        </MainContainer>
      </div>
      <div>
      <MainContainer style={{backgroundImage: `url(${TstarterBack})`}}>
            <Container>
                <LogoContainer>
                    <img src={TstarterLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>T-STARTER</PartnerName>
                    <PartnerType>LAUNCHPAD</PartnerType>
                    <PartnerDesc>At T-Starter we have made it our mission not to allow scam projects on the platform. This vetting process can however add friction to the listing process . </PartnerDesc>
                </TextContainer>
                <LinkR to="/PartnersPage"><PartnerButton>MEET ME</PartnerButton></LinkR>
            </Container>
        </MainContainer>
      </div>
      <div>
      <MainContainer style={{backgroundImage: `url(${AnchorBack})`}}>
            <Container>
                <LogoContainer>
                    <img src={AnchorLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>ANCHOR</PartnerName>
                    <PartnerType>WALLET</PartnerType>
                    <PartnerDesc>Anchor is a security and privacy focused open-source digital wallet for all EOSIO-based networks. Anchor uses modern approaches to ensure the security of your accounts. </PartnerDesc>
                </TextContainer>
                <LinkR to="/PartnersPage"><PartnerButton>MEET ME</PartnerButton></LinkR>
            </Container>
        </MainContainer>
      </div>
      <div>
      <MainContainer style={{backgroundImage: `url(${AreaXBack})`}}>
            <Container>
                <LogoContainer>
                    <img src={AreaXLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>AREA X</PartnerName>
                    <PartnerType>PARTNER</PartnerType>
                    <PartnerDesc>Anchor is a security and privacy focused open-source digital wallet for all EOSIO-based networks. Anchor uses modern approaches to ensure the security of your accounts.  </PartnerDesc>
                </TextContainer>
                <LinkR to="/PartnersPage"><PartnerButton>MEET ME</PartnerButton></LinkR>
            </Container>
        </MainContainer>
      </div>
      <div>
      <MainContainer style={{backgroundImage: `url(${WayneBack})`}}>
            <Container>
                <LogoContainer>
                    <img src={WayneLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>W. SHEPPARD</PartnerName>
                    <PartnerType>PARTNER</PartnerType>
                    <PartnerDesc>Anchor is a security and privacy focused open-source digital wallet for all EOSIO-based networks. Anchor uses modern approaches to ensure the security of your accounts.  </PartnerDesc>
                </TextContainer>
                <LinkR to="/PartnersPage"><PartnerButton>MEET ME</PartnerButton></LinkR>
            </Container>
        </MainContainer>
      </div>
    </Slider>
            </Carroussel>
        </Section>
        </>
    )
}

export default PartnerSlider;