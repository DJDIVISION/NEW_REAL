import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageDev from "../../images/dev.png";
import { CardButton } from "./common";
import { Button } from "@material-ui/core";
import { CardContext3 } from "./context";




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
  color: whitesmoke;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 290px;
`;


export function Dev3Overview(props){

    const { active, setActive } = useContext(CardContext3);

    const switchToPost3 = () => {
        setActive("postview3");
      };

      let animate = {};
    if (active === "overview3") animate = { x: 0 };
    else if (active === "postview3") animate = { x: -300 };

    return <OverviewContainer animate={animate}>
        <Button>
        <CardButton onClick={switchToPost3}>Meet Me</CardButton>
        </Button>
        <TitleContainer>
            <Title>
                Abhik Banerjee
            </Title>
        </TitleContainer>
    </OverviewContainer>
}