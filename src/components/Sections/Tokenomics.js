import React, { useCallback, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { motion } from "framer-motion";
import Donut  from "./Charts/Donut";

const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background: whitesmoke;
    height: 780px;
    overflow: hidden;
    
    
`;






const Tokenomics = () => {

    

    return (
        <Section>
            <Donut />
        </Section>
       
    )
}

export default Tokenomics
