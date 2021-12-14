import React from 'react';
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Section, Container } from "./Elements";
import { Link as LinkR } from "react-router-dom";

import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, alt} from "./Elements";

const StyledButton = styled(Button)`
    &&&{
      border: 1px solid gold;
      color: gold;
      margin-left: 120px;
      

      @media screen and (max-width: 768px) {
        
        margin-top: -20px;
        display: block;
        margin-left: auto;
        margin-right:auto;  
      }

      &:hover{
          background-color: gold;
          color: red;
          font-weight: bold;
          transform: scale(0.95);
          transition: 0.3s ease-in-out;
      }
    }
`;


const InfoSection = ({ lightBg, imgStart, topLine, lightText, darkText, buttonLabel, img, alt, id, headline, description, colortext, pagelink }) => {
    return (
       <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine colorText={colortext}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <LinkR to="/TeamPage"><StyledButton>{buttonLabel}</StyledButton></LinkR>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
       </>
           
    );
}

export default InfoSection;
