import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";
import {Button, IconButton} from "@material-ui/core";
import "./style.css";

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import FortisLogo from "../../images/fortis_logo.png";
import DWLogo from "../../images/dw_aqua_logo.jpg";
import DWArticleImage from "../../images/dwArticleBack.jpg";

const LinkIcon = styled(LinkedInIcon)`
    color: #0A66C2;
`;

const TwitIcon = styled(TwitterIcon)`
   color: #0084b4; 
`;

const FaceIcon = styled(FacebookIcon)`
    color: #3b5998;
`;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    text-align: center;
    font-size: calc(1.8em + 0.4vw);
    margin-bottom: 10px;
    margin-top: 50px;
    
    
`;

const IconList = styled.ul`
    margin-top: 20px;
    margin-bottom: 10px;
    border-top: 1px solid black;
    width: 60%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;

    @media screen and (min-width: 1100px) {
        width: 40%;
        transform: scale(1.5);
    }

`;

const TitleList = styled.ul`
    display: flex;
    align-items: center;
    
    justify-content: center;
    width: 90vw;
    margin-left: -20px;

    @media screen and (min-width: 1100px) {
        align-items: center;
        justify-content: left;
        margin-top: 10px;
    }
    
`;

const Logo = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.body};
    margin-left: 5vw;
    margin-right: 1vw;
    padding: 2px;

    @media screen and (min-width: 1100px) {
        margin-left: 12vw;
    }

    
`;

const Writer = styled.h4`
    font-size: 18px;
    color: ${props => props.theme.body};
    font-family: "Comfortaa";
    margin-right: 2vw;

    @media screen and (max-width: 860px){
        font-size: 12px;
    }
    
`;

const Time = styled.h4`
   font-size: 16px;
    color: grey;
    font-family: "Comfortaa";
    margin-right: 2vw;

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
    color: ${props => props.theme.body};
    font-family: "Comfortaa";
    text-align: left;
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

    @media screen and (min-width: 1100px) {
        font-size: 20px;
        margin-top: 3vh;
    }
`;

const ArticleButton = styled(Button)`
    &&& {
        border: 1px solid black;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        transform: scale(0.8);
        font-weight: bold;

        @media screen and (min-width: 1100px) {
            transform: scale(1.2);
            margin-top: 30px;
            font-weight: bold;
            margin-bottom: 20px;
    }
    }
`;





const NewsSection = () => {

    

    return(
        <Container>
            <Title>Destiny world launches mining</Title>
            <IconList>
               <IconButton><TwitIcon /></IconButton>
               <IconButton><FaceIcon /></IconButton>
               <IconButton><LinkIcon /></IconButton>
            </IconList>
            <TitleList>
                <Logo src={DWLogo} alt=""/>
                <Writer>David R. Martin</Writer>
                <Time>5 hours ago</Time>
                <ReadTime>6 min read</ReadTime> 
            </TitleList>
            <Subtitle>"Really happy this stage has launched, its a big step in our ecosystem with REES"</Subtitle>
            <ArticleText>The last years we have seen an increasing interest in blockchain technology and cryptocurrencies. The quest for wealth is not longer something that requires a Ph.D or knowledge of how to operate intrigue computer systems. More and more user friendly applications, games and use cases are developed and made available on various platforms. With this comes the greed and with greed comes the scams and malicious behaviour</ArticleText>
            
            <ArticleButton>READ MORE</ArticleButton>
            <IconList />
        </Container>
    )
}


export default NewsSection;