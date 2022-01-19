import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageDev from "../../images/dev.png";
import { CardButton } from "./common";
import { Button } from "@material-ui/core";
import { CardContext } from "./context";




const OverviewContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background: url(${ImageDev}) center;
  background-size: cover;
  
  border-radius: 28px;
  padding-bottom: -2em;
  z-index: 5;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-bottom: 1.8em;
`;


const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.text};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 280px;
`;


export function Dev1Overview(props){

    const { active, setActive } = useContext(CardContext);

    const switchToPost = () => {
        setActive("postview");
      };

      let animate = {};
    if (active === "overview") animate = { x: 0 };
    else if (active === "postview") animate = { x: -300 };

    return <OverviewContainer animate={animate}>
        <Button>
        <CardButton onClick={switchToPost}>Meet Me</CardButton>
        </Button>
        <TitleContainer>
            <Title>
                Victor Ramirez
            </Title>
        </TitleContainer>
    </OverviewContainer>
}