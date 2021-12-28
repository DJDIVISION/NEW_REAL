import React from "react";
import styled from "styled-components";
import { HeroContainer, HeroBack, VideoBack, HeroContent, HeroH1, HeroP } from "./Elements";
//import video from "../../videos/video3.mp4";


/* const HeroSection = () => {
    return (
        <HeroContainer>
             <HeroBack>
                <VideoBack autoPlay loop muted src={video} type="video.mp4" />
            </HeroBack> 
            <HeroContent>
                <HeroH1>Connecting Technology & People</HeroH1>
                <HeroP>
                    Destiny Airlines is an ecosystem connecting dApps and Communities across blockchains to onboard new projects, build awareness and synergy 
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
}; */

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 980px;
    top: 0;
    left: 0;
    background-color: #1756dd21;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 99;
`;

const Logo = styled.div`
    margin: 0;
    color: ${props => props.theme.text};
    font-weight: 700;
    font-size: 55px;
    font-family: "Alphacentauri";
    margin-bottom: 20px;

    @media screen and (max-width: 860px){
        padding: 0 20px;
        text-align: center;
    }
    
`;

const Slogan = styled.h4`
    margin: 0;
    color: ${props => props.theme.text};
    font-weight: 700;
    font-size: 35px;
    text-align: center;
    
`;

export function HeroSection () {
    return (
        <Container>
            <Logo>DESTINY AIRLINES</Logo>
            <Slogan>We take you <br></br>to outer space</Slogan>
        </Container>
    )
}