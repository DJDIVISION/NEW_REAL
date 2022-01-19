import React, {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Link as LinkR } from "react-router-dom";
import ShareIcon from '@mui/icons-material/Share';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import NewsImage from "../../images/BestNewsDivider.png";
import FortisBack from "../../images/news_background.png";

import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, LinkedinIcon, LinkedinShareButton, EmailIcon, EmailShareButton} from "react-share";
import DWLogo from "../../images/dw_aqua_logo.jpg";

const IconList = styled.ul`
    
    margin-bottom: 10px;
    border-top: 1px solid ${props => props.theme.text};
    width: 80%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    padding-top: 5px;

    @media screen and (min-width: 1100px) {
        width: 40%;
        transform: scale(1.5);
    }

`;


const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    padding: 3rem 10rem;
    background: ${props => props.theme.body};

    
`;

const Carroussel = styled.div`
    width: 50vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    
    
    
    
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
        height: 70vh; 
        background-size: cover;
        background-position: center;
        border-radius: 20px;
    }
    
`;

const Card = styled.div`
    height: 65vh;
    width: 225px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    
    border-radius: 20px;
    backdrop-filter: blur(8px);
    color: ${props => props.theme.body};
    border: 2px solid gold;

    @media screen and (min-width: 1100px){
        width: 600px;
        height: 50vh;
    }
`;


const Title = styled.h1`
    font-family: "Alphacentauri";
    font-size: 20px;
    color: ${props => props.theme.text};
    display: flex;
    margin-bottom: 20px;
    text-align: center;
    @media screen and (min-width: 1100px){
        font-size: 24px; 
        
    }
`;





const Link = styled(LinkR)`
    font-size: 12px;
    border: 1px solid ${props => props.theme.text};
    margin-top: 10px;
    padding: 5px 10px;
    text-decoration: none;
    color: ${props => props.theme.text};
    font-weight: 700;
    @media screen and (min-width: 1100px){
        margin-top: 20px;
        
    }
`;

const TitleList = styled.ul`
    display: flex;
    align-items: center;
    text-justify: center;
    justify-content: center;
    width: 100vw;
    

    @media screen and (min-width: 1100px) {
        align-items: center;
        
        margin-top: 10px;
    }
    
`;

const Logo = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.body};
    margin-left: -10px;
    margin-right: 10px;
    padding: 2px;

    @media screen and (min-width: 1100px) {
        
    }

    
`;

const Writer = styled.h4`
    font-size: 18px;
    color: ${props => props.theme.text};
    font-family: "Comfortaa";
    font-weight: 100;

    @media screen and (max-width: 860px){
        font-size: 12px;
    }
    
`;

const Subtitle = styled.h2`
    color: ${props => props.theme.text};
    font-family: "Comfortaa";
    text-align: center;
    margin-top: 10px;
    font-weight: 400;
    
    font-size: 14px;

    
    @media screen and (min-width: 1100px) {
        font-size: 24px;
        margin-bottom: 20px;
    }
`;

const Description = styled.h2`
    font-size: 14px;
    color: ${props => props.theme.text};
    text-align: center;
    padding-top: 15px;
    font-family: "Comfortaa";
    font-weight: 100;
    @media screen and (min-width: 1100px){
        padding: 0 20px;
        font-size: 18px;
        
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

const SharingButton = styled(ShareIcon)`
    
    border-radius: 50%;
    transform: scale(0.9);
`;


const NewsSlider = () => {

    const shareurl = "http://telos.destinyworld.net/";
    const TwitterTitle = "Destiny World Launches REES Mining ⛏ 🤩.   1 REES is pegged with DECO 10000 / 15. Don't miss it!!! 🥳🤑";
    const Via = "VictorR65153076";
    const Hashtags = ["DestinyWorld", "REES", "Telos"];
    const Related = ["@VictorR65153076"];


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
            <Image src={NewsImage} alt="" />
            </SectionImage>
        <Section >
            <Carroussel>
                <Slider {...settings}>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${FortisBack})`}}>
                       <Card>
                            <Title>DESTINY WORLD LAUNCHES MINING</Title>
                            <IconList>
                                <ShareIcon />
                            <TwitterShareButton url={shareurl} title={TwitterTitle} via={Via} hashtags={Hashtags} related={Related}>
                                <TwitterIcon size={25} borderRadius={50}/>
                            </TwitterShareButton>
                            <FacebookShareButton url={shareurl} quote={TwitterTitle}>
                                <FacebookIcon size={25} borderRadius={50}/>
                            </FacebookShareButton>
                            <LinkedinShareButton url={shareurl} >
                                <LinkedinIcon size={25} borderRadius={50}/>
                            </LinkedinShareButton>
                            <EmailShareButton url={shareurl} >
                                <EmailIcon size={25} borderRadius={50}/>
                            </EmailShareButton>
                            </IconList>
                            <TitleList>
                                <Logo src={DWLogo} alt=""/>
                                <Writer>David R. Martin</Writer>
                            </TitleList>
                            <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
                            <Description>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems.</Description>
                            <Link to="PartnersPage">READ MORE</Link>
                        </Card> 
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${FortisBack})`}}>
                       <Card>
                            <Title>DESTINY WORLD LAUNCHES MINING</Title>
                            <IconList>
                                <ShareIcon />
                            <TwitterShareButton url={shareurl} title={TwitterTitle} via={Via} hashtags={Hashtags} related={Related}>
                                <TwitterIcon size={25} borderRadius={50}/>
                            </TwitterShareButton>
                            <FacebookShareButton url={shareurl} quote={TwitterTitle}>
                                <FacebookIcon size={25} borderRadius={50}/>
                            </FacebookShareButton>
                            <LinkedinShareButton url={shareurl} >
                                <LinkedinIcon size={25} borderRadius={50}/>
                            </LinkedinShareButton>
                            <EmailShareButton url={shareurl} >
                                <EmailIcon size={25} borderRadius={50}/>
                            </EmailShareButton>
                            </IconList>
                            <TitleList>
                                <Logo src={DWLogo} alt=""/>
                                <Writer>David R. Martin</Writer>
                            </TitleList>
                            <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
                            <Description>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems.</Description>
                            <Link to="PartnersPage">READ MORE</Link>
                        </Card> 
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${FortisBack})`}}>
                       <Card>
                            <Title>DESTINY WORLD LAUNCHES MINING</Title>
                            <IconList>
                                <ShareIcon />
                            <TwitterShareButton url={shareurl} title={TwitterTitle} via={Via} hashtags={Hashtags} related={Related}>
                                <TwitterIcon size={25} borderRadius={50}/>
                            </TwitterShareButton>
                            <FacebookShareButton url={shareurl} quote={TwitterTitle}>
                                <FacebookIcon size={25} borderRadius={50}/>
                            </FacebookShareButton>
                            <LinkedinShareButton url={shareurl} >
                                <LinkedinIcon size={25} borderRadius={50}/>
                            </LinkedinShareButton>
                            <EmailShareButton url={shareurl} >
                                <EmailIcon size={25} borderRadius={50}/>
                            </EmailShareButton>
                            </IconList>
                            <TitleList>
                                <Logo src={DWLogo} alt=""/>
                                <Writer>David R. Martin</Writer>
                            </TitleList>
                            <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
                            <Description>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems.</Description>
                            <Link to="PartnersPage">READ MORE</Link>
                        </Card> 
                    </MainContainer>
                    </div>
                    <div>
                    <MainContainer style={{backgroundImage: `url(${FortisBack})`}}>
                       <Card>
                            <Title>DESTINY WORLD LAUNCHES MINING</Title>
                            <IconList>
                                <ShareIcon />
                            <TwitterShareButton url={shareurl} title={TwitterTitle} via={Via} hashtags={Hashtags} related={Related}>
                                <TwitterIcon size={25} borderRadius={50}/>
                            </TwitterShareButton>
                            <FacebookShareButton url={shareurl} quote={TwitterTitle}>
                                <FacebookIcon size={25} borderRadius={50}/>
                            </FacebookShareButton>
                            <LinkedinShareButton url={shareurl} >
                                <LinkedinIcon size={25} borderRadius={50}/>
                            </LinkedinShareButton>
                            <EmailShareButton url={shareurl} >
                                <EmailIcon size={25} borderRadius={50}/>
                            </EmailShareButton>
                            </IconList>
                            <TitleList>
                                <Logo src={DWLogo} alt=""/>
                                <Writer>David R. Martin</Writer>
                            </TitleList>
                            <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
                            <Description>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems.</Description>
                            <Link to="PartnersPage">READ MORE</Link>
                        </Card> 
                    </MainContainer>
                    </div>
                    
                </Slider>
            </Carroussel>
        </Section>
        </>
    )
}

export default NewsSlider;