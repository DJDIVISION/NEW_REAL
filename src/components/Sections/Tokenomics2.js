import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { IconButton } from "@material-ui/core";
import Donut  from "./Charts/Donut";
import BuySellBars from "./Charts/BuySellBars";
import "./style.css";


const DownIcon = styled(KeyboardDoubleArrowDownIcon)`
    color: ${props => props.theme.text};
    margin-top: 20px;
    transform: scale(2);
`;

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

`;

const Title = styled.h1`
    font-size: 32px;
    color: ${props => props.theme.text};
    text-align: center;
    margin: 40px;

    @media screen and (max-width:860px){
        font-size: 24px;
    }
`;

const TitleTwo = styled.h1`
    font-size: 44px;
    color: ${props => props.theme.text};
    position: fixed;
    margin-top: 235px;

    @media screen and (max-width:860px){
        margin-top: 210px;
    }
`;


const Section = styled.section`
    height: 90vh;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    justify-content: center;
    background: whitesmoke;
    border: 1px solid black;
    border-radius: 20px;
    
    
`;

const List = styled.ul`
    display: flex;
    height: 40px;
    padding: 0 10px 0 10px;
    
`;

const ListItem = styled.li`
    font-size: 20px;
    padding: 1rem;
    font-weight: bold;
    
`;

const ListContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items:center;
`;







const Tokenomics2 = () => {

    const { ref, inView } = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    

    useEffect(() => {
        
       console.log("use effect hook, inView = ", inView); 
        if(inView){
          animation.start({
              opacity: 1,
              x: 0, 
              transition: {
                type: "spring", duration: 2, bounce: 0.5
              }
          })
        }
        if (!inView){
          animation.start({
            opacity: 0,
            x: "-100vw",
          })  
        }
    }, [inView]); 

    const onHoverSale = () => {
        document.getElementById("placer").innerHTML = "40%";
        document.getElementById("sale").classList.add("graph-active");
        document.getElementById("salecir").classList.add("circle-active");
        document.getElementById("supply").innerHTML = "SALE SUPPLY: 400,000,000,000";
        
    }

    const onHoverLiquidity = () => {
        document.getElementById("placer").innerHTML = "20%";
        document.getElementById("liquidity").classList.add("graph-active");
        document.getElementById("liquiditycir").classList.add("circle-active");
        document.getElementById("supply").innerHTML = "LIQUIDITY SUPPLY: 200,000,000,000";
    }

    const onHoverAdvisors = () => {
        document.getElementById("placer").innerHTML = "3%";
        document.getElementById("advisors").classList.add("graph-active");
        document.getElementById("advisorscir").classList.add("circle-active");
        document.getElementById("supply").innerHTML = "ADVISORS SUPPLY: 30,000,000,000";
    }

    const onHoverCEX = () => {
        document.getElementById("placer").innerHTML = "10%";
        document.getElementById("cex").classList.add("graph-active");
        document.getElementById("cexcir").classList.add("circle-active");
        document.getElementById("supply").innerHTML = "CEX RESERVE SUPPLY: 100,000,000,000";
    }

    const onHoverTeam = () => {
        document.getElementById("placer").innerHTML = "10%";
        document.getElementById("team").classList.add("graph-active");
        document.getElementById("teamcir").classList.add("circle-active");
        document.getElementById("supply").innerHTML = "TEAM SUPPLY: 100,000,000,000";
    }

    const onHoverGives = () => {
        document.getElementById("placer").innerHTML = "3%";
        document.getElementById("gives").classList.add("graph-active");
        document.getElementById("givescir").classList.add("circle-active");
        document.getElementById("supply").innerHTML = "GIVEAWAYS SUPPLY: 30,000,000,000";
    }

    const onHoverPTearn = () => {
        document.getElementById("placer").innerHTML = "10%";
        document.getElementById("ptearn").classList.add("graph-active");
        document.getElementById("ptearncir").classList.add("circle-active");
        document.getElementById("supply").innerHTML = "PLAY TO EARN SUPPLY: 100,000,000,000";
    }

    const onHoverMark = () => {
        document.getElementById("placer").innerHTML = "4%";
        document.getElementById("mark").classList.add("graph-active");
        document.getElementById("markcir").classList.add("circle-active");
        document.getElementById("supply").innerHTML = "MARKETING SUPPLY: 40,000,000,000";
    }


    const onLeaveSale = () => {
        document.getElementById("placer").innerHTML = "100%";
        document.getElementById("sale").classList.remove("graph-active");
        document.getElementById("salecir").classList.remove("circle-active");
        document.getElementById("supply").innerHTML = "TOTAL SUPPLY: 1,000,000,000,000";
    }

    const onLeaveLiquidity = () => {
        document.getElementById("placer").innerHTML = "100%";
        document.getElementById("liquidity").classList.remove("graph-active");
        document.getElementById("liquiditycir").classList.remove("circle-active");
        document.getElementById("supply").innerHTML = "TOTAL SUPPLY: 1,000,000,000,000";
    }

    const onLeaveAdvisors = () => {
        document.getElementById("placer").innerHTML = "100%";
        document.getElementById("advisors").classList.remove("graph-active");
        document.getElementById("advisorscir").classList.remove("circle-active");
        document.getElementById("supply").innerHTML = "TOTAL SUPPLY: 1,000,000,000,000";
    }

    const onLeaveCEX = () => {
        document.getElementById("placer").innerHTML = "100%";
        document.getElementById("cex").classList.remove("graph-active");
        document.getElementById("cexcir").classList.remove("circle-active");
        document.getElementById("supply").innerHTML = "TOTAL SUPPLY: 1,000,000,000,000";
    }

    const onLeaveTeam = () => {
        document.getElementById("placer").innerHTML = "100%";
        document.getElementById("team").classList.remove("graph-active");
        document.getElementById("teamcir").classList.remove("circle-active");
        document.getElementById("supply").innerHTML = "TOTAL SUPPLY: 1,000,000,000,000";
    }

    const onLeaveGives = () => {
        document.getElementById("placer").innerHTML = "100%";
        document.getElementById("gives").classList.remove("graph-active");
        document.getElementById("givescir").classList.remove("circle-active");
        document.getElementById("supply").innerHTML = "TOTAL SUPPLY: 1,000,000,000,000";
    }

    const onLeavePtearn = () => {
        document.getElementById("placer").innerHTML = "100%";
        document.getElementById("ptearn").classList.remove("graph-active");
        document.getElementById("ptearncir").classList.remove("circle-active");
        document.getElementById("supply").innerHTML = "TOTAL SUPPLY: 1,000,000,000,000";
    }

    const onLeaveMark = () => {
        document.getElementById("placer").innerHTML = "100%";
        document.getElementById("mark").classList.remove("graph-active");
        document.getElementById("markcir").classList.remove("circle-active");
        document.getElementById("supply").innerHTML = "TOTAL SUPPLY: 1,000,000,000,000";
    }

    return (
        <Background ref={ref} id="tokenomics2">
            <motion.div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Title id="supply">BUY AND SELL TAXES (%)</Title>
    <IconButton><DownIcon /></IconButton>
    </motion.div>
    </Background>
    )
}

export default Tokenomics2;
