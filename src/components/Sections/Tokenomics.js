import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { IconButton } from "@material-ui/core";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Back from "../../images/dair_back.jpg";

const Section = styled.div`
    height: 200px;
    
`;

const BackgroundText = styled.div`
    height: 200px;
    background-image: url(${Back});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: ${props => props.theme.body};
`;






const Tokenomics = () => {

    

    return (
       <Section>
           <BackgroundText />
       </Section> 
    )
}

export default Tokenomics
