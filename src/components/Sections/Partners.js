import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

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


const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem 0;
    background: red;
`;

const Carroussel = styled.div`
    width: 60vw; 
    display: flex;

    .slick-arrow:before{
        
    }

    .slick-dots button:before{
        color: white;
        font-size: 0.5rem;
        margin-top: 10px;
    }
     
`;

const Card = styled.div`
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
`;





const Partners = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Section>
            <Carroussel>
                <Slider {...settings}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Slider>
            </Carroussel>
        </Section>
    )
}

export default Partners;








