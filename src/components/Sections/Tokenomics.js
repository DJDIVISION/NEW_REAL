import React, { useCallback, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { motion } from "framer-motion";
import Donut  from "./Charts/Donut";
import BuySellBars from "./Charts/BuySellBars";
const Section = styled.section`
    height: 70vh;
    width: 95%;
    display: flex;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    justify-content: center;
    background: whitesmoke;
    overflow: hidden;
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px 10px;
   
    
`;






const Tokenomics = () => {

    

    return (
        <div>
        <Section>
            <Donut />
        </Section>
        <Section>
            <BuySellBars />
        </Section>
        </div>
       
    )
}

export default Tokenomics
