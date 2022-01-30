import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from "@material-ui/core";
import dev3 from "../../images/dev3Postview.jpg";
import { CardContext3 } from "./context";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const OverviewContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background: url(${dev3}) center;
  background-size: cover;
  
  border-radius: 28px;
  padding-bottom: -2em;
  z-index: 10;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-bottom: 1.8em;
`;


const Title = styled.h1`
  margin: 0;
  color: whitesmoke;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 290px;
`;

const IconContainer = styled.div`
    min-height: 10%;
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
`;

const BackIcon = styled(ArrowBackIcon)`
    color: whitesmoke;
    margin-bottom: 20px;
`;

const LinkIcon = styled(LinkedInIcon)`
    color: #0A66C2;
    
`;

const MailIcon = styled(EmailIcon)`
    color: #BB001B;
`;

const TweetIcon = styled(TwitterIcon)`
    color: #0084b4;
`;


export function Dev3Postview(props){

    const { active, setActive } = useContext(CardContext3);

    const switchToOver3 = () => {
        setActive("overview3");
      };

      let animate = {};
    if (active === "overview3") animate = { x: 300 };
    else if (active === "postview3") animate = { x: -300 };

    return <OverviewContainer animate={animate}>
        <IconButton onClick={switchToOver3}>
        <BackIcon  />
        </IconButton>
        <TitleContainer>
            <Title>
                India 
            </Title>
        </TitleContainer>
        <IconContainer>
            <IconButton>
                <a href="https://www.linkedin.com/in/banerjee-1331" target="_blank">
                    <LinkIcon/>
                </a>
            </IconButton>
            <IconButton>
                <a href="mailto:abhik@abhikbanerjee.com">
                <MailIcon/>
                </a>
            </IconButton>
            <IconButton>
                <a href="https://twitter.com/abhikbanerjee0" target="_blank">
                <TweetIcon/>
                </a>
            </IconButton>
        </IconContainer>
    </OverviewContainer>
}