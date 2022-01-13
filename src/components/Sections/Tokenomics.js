import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { IconButton } from "@material-ui/core";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Back from "../../images/TokenomicsDivider.png";

const Section = styled.div`
    height: 400px;

    @media screen and (max-width: 860px){
        height: 200px;
        width: 100vw;
    }
    
`;

const BackgroundText = styled.div`
    height: 400px;
    width: 100vw;
    background-image: url(${Back});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: ${props => props.theme.body};

    @media screen and (max-width: 860px){
        height: 200px;
    }
`;






const Tokenomics = () => {

    

    return (
       <Section>
           <BackgroundText />
       </Section> 
    )
}

export default Tokenomics
