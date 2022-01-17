import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";
import {Button, IconButton} from "@material-ui/core";
import ShareIcon from '@mui/icons-material/Share';
import "./style.css";
import NewsImage from "../../images/BestNewsDivider.png";


import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, LinkedinIcon, LinkedinShareButton, EmailIcon, EmailShareButton} from "react-share";

/* import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; */

import FortisLogo from "../../images/fortis_logo.png";
import DWLogo from "../../images/dw_aqua_logo.jpg";


const Carroussel = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    background-size: contain;
    
    
    
    .slick-arrow:before{
        display: none;
    }

    .slick-dots button:before{
        color: ${props => props.theme.body};
        font-size: 0.8rem;
        margin-top: 10px;
        color: grey;
        transform: scale(1.4);
    }
    
    

    @media screen and (max-width: 860px) {
        width: 85%;
    }
         
`;

/* const LinkIcon = styled(LinkedInIcon)`
    color: #0A66C2;
`;

const TwitIcon = styled(TwitterIcon)`
   color: #0084b4; 
`;

const FaceIcon = styled(FacebookIcon)`
    color: #3b5998;
`; */

const Container = styled.div`
    height: 80vh;
    width: 90vw;
    background: ${props => props.theme.horizontalGrey};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    border-radius: 20px;
    
    
    
    
`;

const Title = styled.h1`
    display: flex;
    text-align: center;
    font-size: 92px;
    padding: 0 20px;
    margin-bottom: 10px;
    
    
    
    color: ${props => props.theme.text};

    @media screen and (max-width: 1000px){
        font-size: 24px;
        margin-top: 15px;
    }
    
`;

const IconList = styled.ul`
    margin-top: 20px;
    margin-bottom: 10px;
    border-top: 1px solid ${props => props.theme.text};
    width: 60%;
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
    height: 50px;
    width: 50px;
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
    

    @media screen and (max-width: 860px){
        font-size: 12px;
    }
    
`;

const Time = styled.h4`
   font-size: 16px;
    color: grey;
    font-family: "Comfortaa";
    

    @media screen and (max-width: 860px){
        font-size: 10px;
    }
    
`;

const ReadTime = styled.h4`
   font-size: 16px;
    color: grey;
    font-family: "Comfortaa"; 

    @media screen and (max-width: 860px){
        font-size: 10px;
    }
`;

const Subtitle = styled.h2`
    color: ${props => props.theme.text};
    font-family: "Comfortaa";
    text-align: center;
    margin-left: 2vw;
    padding: 2vh 10vw;
    font-size: 14px;

    
    @media screen and (min-width: 1100px) {
        font-size: 24px;
        margin-top: 3vh;
    }
`;

const ArticleText = styled.h2`
    font-size: 14px;
    font-family: "Comfortaa";
    padding: 0 15%;
    text-align: justify;
    color: ${props => props.theme.text};

    @media screen and (min-width: 1100px) {
        font-size: 20px;
        margin-top: 3vh;
    }
`;

const ArticleButton = styled(Button)`
    &&& {
        border: 1px solid ${props => props.theme.text};
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        transform: scale(0.8);
        font-weight: bold;
        color: ${props => props.theme.text};

        @media screen and (min-width: 1100px) {
            transform: scale(1.2);
            margin-top: 30px;
            font-weight: bold;
            margin-bottom: 20px;
    }
    }
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

const SharingButton = styled(ShareIcon)`
    
    border-radius: 50%;
    transform: scale(0.9);
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
        height: 350px;
        
        img{
            width: 50vw;
        }
    }
`;



const NewsSection = () => {

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
        slidesToScroll: 1
      };

    return(
        <>
        <SectionImage id="news">
            <Image src={NewsImage} alt="" />
            </SectionImage>
        <Section>
        <Carroussel>
            <Slider {...settings}>
                <div>
                <Container>
                    <Title>Destiny world launches mining</Title>
                    <IconList>
                        <SharingButton />
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
                    {/* <IconButton onClick={ShareTwitter}><TwitIcon /></IconButton>
                    <IconButton id="facebook"><FaceIcon /></IconButton>
                    <IconButton id="linkedin"><LinkIcon /></IconButton> */}
                    </IconList>
                    <TitleList>
                        <Logo src={DWLogo} alt=""/>
                        <Writer>David R. Martin</Writer>
                        <Time></Time>
                        <ReadTime></ReadTime> 
                    </TitleList>
                    <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
                    <ArticleText>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems. More and more user friendly applications, games and use cases are developed and made available on various platforms.</ArticleText>
                    
                    <ArticleButton>READ MORE</ArticleButton>
                    <IconList />
                </Container>
                </div>
                <div>
                <Container>
                    <Title>Destiny world launches mining</Title>
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
                    {/* <IconButton onClick={ShareTwitter}><TwitIcon /></IconButton>
                    <IconButton id="facebook"><FaceIcon /></IconButton>
                    <IconButton id="linkedin"><LinkIcon /></IconButton> */}
                    </IconList>
                    <TitleList>
                        <Logo src={DWLogo} alt=""/>
                        <Writer>David R. Martin</Writer>
                        <Time></Time>
                        <ReadTime></ReadTime> 
                    </TitleList>
                    <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
                    <ArticleText>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems. More and more user friendly applications, games and use cases are developed and made available on various platforms.</ArticleText>
                    
                    <ArticleButton>READ MORE</ArticleButton>
                    <IconList />
                </Container>
                </div>
                <div>
                <Container>
                    <Title>Destiny world launches mining</Title>
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
                    {/* <IconButton onClick={ShareTwitter}><TwitIcon /></IconButton>
                    <IconButton id="facebook"><FaceIcon /></IconButton>
                    <IconButton id="linkedin"><LinkIcon /></IconButton> */}
                    </IconList>
                    <TitleList>
                        <Logo src={DWLogo} alt=""/>
                        <Writer>David R. Martin</Writer>
                        <Time></Time>
                        <ReadTime></ReadTime> 
                    </TitleList>
                    <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
                    <ArticleText>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems. More and more user friendly applications, games and use cases are developed and made available on various platforms.</ArticleText>
                    
                    <ArticleButton>READ MORE</ArticleButton>
                    <IconList />
                </Container>
                </div>
                <div>
                <Container>
                    <Title>Destiny world launches mining</Title>
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
                    {/* <IconButton onClick={ShareTwitter}><TwitIcon /></IconButton>
                    <IconButton id="facebook"><FaceIcon /></IconButton>
                    <IconButton id="linkedin"><LinkIcon /></IconButton> */}
                    </IconList>
                    <TitleList>
                        <Logo src={DWLogo} alt=""/>
                        <Writer>David R. Martin</Writer>
                        <Time></Time>
                        <ReadTime></ReadTime> 
                    </TitleList>
                    <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
                    <ArticleText>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems. More and more user friendly applications, games and use cases are developed and made available on various platforms.</ArticleText>
                    
                    <ArticleButton>READ MORE</ArticleButton>
                    <IconList />
                </Container>
                </div>
            </Slider>
        </Carroussel>
        </Section>
        </>
    )
}


export default NewsSection;