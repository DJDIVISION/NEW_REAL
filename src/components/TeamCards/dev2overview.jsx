import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageDev from "../../images/dev.png";
import { CardButton } from "./common";
import { Button } from "@material-ui/core";
import { CardContext2 } from "./context";




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
  color: ${props => props.theme.text};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 280px;
`;


export function Dev2Overview(props){

    const { active, setActive } = useContext(CardContext2);

    const switchToPost2 = () => {
        setActive("postview2");
      };

      let animate = {};
    if (active === "overview2") animate = { x: 0 };
    else if (active === "postview2") animate = { x: -300 };

    return <OverviewContainer animate={animate}>
        <Button>
        <CardButton onClick={switchToPost2}>Meet Me</CardButton>
        </Button>
        <TitleContainer>
            <Title>
                Bhaskar Dutta
            </Title>
        </TitleContainer>
    </OverviewContainer>
}