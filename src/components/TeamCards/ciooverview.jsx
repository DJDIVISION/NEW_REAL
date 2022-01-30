import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageCio from "../../images/cio.jpg";
import { CardButton } from "./common";
import { Button } from "@material-ui/core";
import { CardContext4 } from "./context";




const OverviewContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background: url(${ImageCio}) center;
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
  color: whitesmoke;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 290px;
`;


export function CioOverview(props){

    const { active, setActive } = useContext(CardContext4);

    const switchToPost4 = () => {
        setActive("postview4");
      };

      let animate = {};
    if (active === "overview4") animate = { x: 0 };
    else if (active === "postview4") animate = { x: -300 };

    return <OverviewContainer animate={animate}>
        <Button>
        <CardButton onClick={switchToPost4}>Meet Me</CardButton>
        </Button>
        <TitleContainer>
            <Title>
                Filip Poverud
            </Title>
        </TitleContainer>
    </OverviewContainer>
}