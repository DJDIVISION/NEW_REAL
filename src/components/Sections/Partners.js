import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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




const MainContainer = styled.section`
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

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
    color: ${props => props.theme.body};
`;



const Partners = () => {
    return (
        <MainContainer >
            <Container>
                <LogoContainer>
                    <img src={FortisLogo} style={{width: 150, height:150, border: '5px solid gold', borderRadius: '50%'}}/>
                </LogoContainer>
                <TextContainer>
                    <PartnerName>FORTIS</PartnerName>
                    <PartnerType>PARTNER</PartnerType>
                    <PartnerDesc>Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want, without having to worry about arbitrary limitations like borders or censorship’s.  </PartnerDesc>
                </TextContainer>
            </Container>
        </MainContainer>
    )
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
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
                    <PartnerDesc>At T-Starter we have made it our mission not to allow scam projects on the platform. This vetting process can however add friction to the listing process and discourage projects from using our platform. </PartnerDesc>
                </TextContainer>
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
                    <PartnerDesc>Anchor is a security and privacy focused open-source digital wallet for all EOSIO-based networks. Anchor uses modern approaches to ensure the security of your accounts. The use of strong encryption1 helps keep your private keys as safe as possible. </PartnerDesc>
                </TextContainer>
            </Container>
        </MainContainer>
      </div>
    </Slider>
  );
}






