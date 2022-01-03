import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Donut  from "./Charts/Donut";
import BuySellBars from "./Charts/BuySellBars";
import "./style.css";


const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

`;

const Title = styled.h1`
    font-size: 48px;
    color: black;
    text-align: center;
    margin: 40px;

    @media screen and (max-width:860px){
        font-size: 24px;
    }
`;

const TitleTwo = styled.h1`
    font-size: 48px;
    color: black;
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
    
`;

const ListItem = styled.li`
    font-size: 20px;
    padding: 1.2rem;
    font-weight: bold;
    
`;

const ListContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items:center;
`;







const Tokenomics = () => {

    const onHoverSale = () => {
        document.getElementById("placer").innerHTML = "40%";
        document.getElementById("sale").classList.add("graph-active");
        document.getElementById("salecir").classList.add("circle-active");
        
    }

    const onHoverLiquidity = () => {
        document.getElementById("placer").innerHTML = "20%";
        document.getElementById("liquidity").classList.add("graph-active");
        document.getElementById("liquiditycir").classList.add("circle-active");
    }

    const onHoverAdvisors = () => {
        document.getElementById("placer").innerHTML = "3%";
        document.getElementById("advisors").classList.add("graph-active");
        document.getElementById("advisorscir").classList.add("circle-active");
    }

    const onHoverCEX = () => {
        document.getElementById("placer").innerHTML = "10%";
        document.getElementById("cex").classList.add("graph-active");
        document.getElementById("cexcir").classList.add("circle-active");
    }

    const onHoverTeam = () => {
        document.getElementById("placer").innerHTML = "10%";
        document.getElementById("team").classList.add("graph-active");
        document.getElementById("teamcir").classList.add("circle-active");
    }

    const onHoverGives = () => {
        document.getElementById("placer").innerHTML = "3%";
        document.getElementById("gives").classList.add("graph-active");
        document.getElementById("givescir").classList.add("circle-active");
    }

    const onHoverPTearn = () => {
        document.getElementById("placer").innerHTML = "10%";
        document.getElementById("ptearn").classList.add("graph-active");
        document.getElementById("ptearncir").classList.add("circle-active");
    }

    const onHoverMark = () => {
        document.getElementById("placer").innerHTML = "4%";
        document.getElementById("mark").classList.add("graph-active");
        document.getElementById("markcir").classList.add("circle-active");
    }


    const onLeaveSale = () => {
        document.getElementById("placer").innerHTML = "";
        document.getElementById("sale").classList.remove("graph-active");
        document.getElementById("salecir").classList.remove("circle-active");
    }

    const onLeaveLiquidity = () => {
        document.getElementById("placer").innerHTML = "";
        document.getElementById("liquidity").classList.remove("graph-active");
        document.getElementById("liquiditycir").classList.remove("circle-active");
    }

    const onLeaveAdvisors = () => {
        document.getElementById("placer").innerHTML = "";
        document.getElementById("advisors").classList.remove("graph-active");
        document.getElementById("advisorscir").classList.remove("circle-active");
    }

    const onLeaveCEX = () => {
        document.getElementById("placer").innerHTML = "";
        document.getElementById("cex").classList.remove("graph-active");
        document.getElementById("cexcir").classList.remove("circle-active");
    }

    const onLeaveTeam = () => {
        document.getElementById("placer").innerHTML = "";
        document.getElementById("team").classList.remove("graph-active");
        document.getElementById("teamcir").classList.remove("circle-active");
    }

    const onLeaveGives = () => {
        document.getElementById("placer").innerHTML = "";
        document.getElementById("gives").classList.remove("graph-active");
        document.getElementById("givescir").classList.remove("circle-active");
    }

    const onLeavePtearn = () => {
        document.getElementById("placer").innerHTML = "";
        document.getElementById("ptearn").classList.remove("graph-active");
        document.getElementById("ptearncir").classList.remove("circle-active");
    }

    const onLeaveMark = () => {
        document.getElementById("placer").innerHTML = "";
        document.getElementById("mark").classList.remove("graph-active");
        document.getElementById("markcir").classList.remove("circle-active");
    }

    return (
        <Background>
            <Title>SUPPLY: 1,000,000,000,000</Title>
            <TitleTwo id="placer"></TitleTwo>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="250" height="250">
        <circle r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="lightblue"   
        stroke-width="15px"
        stroke-dasharray="calc(100 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle id="markcir" onMouseEnter={onHoverMark} onClick={onHoverMark} onMouseLeave={onLeaveMark} r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="red"   
        stroke-width="15px"
        stroke-dasharray="calc(99 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="white"   
        stroke-width="15px"
        stroke-dasharray="calc(95 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle id="ptearncir" onMouseEnter={onHoverPTearn} onClick={onHoverPTearn} onMouseLeave={onLeavePtearn} r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="#808080"   
        stroke-width="15px"
        stroke-dasharray="calc(94.50 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="white"   
        stroke-width="15px"
        stroke-dasharray="calc(83 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle id="givescir" onMouseEnter={onHoverGives} onClick={onHoverGives} onMouseLeave={onLeaveGives} r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="#9b7653"   
        stroke-width="15px"
        stroke-dasharray="calc(82.5 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="white"   
        stroke-width="15px"
        stroke-dasharray="calc(79.50 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle id="teamcir" onMouseEnter={onHoverTeam} onClick={onHoverTeam} onMouseLeave={onLeaveTeam} r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="#800080"   
        stroke-width="15px"
        stroke-dasharray="calc(79 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="white"   
        stroke-width="15px"
        stroke-dasharray="calc(70 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle id= "cexcir" onMouseEnter={onHoverCEX} onClick={onHoverCEX} onMouseLeave={onLeaveCEX} r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="#4169e1"   
        stroke-width="15px"
        stroke-dasharray="calc(69.50 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="white"   
        stroke-width="15px"
        stroke-dasharray="calc(60.5 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle id="advisorscir" onMouseEnter={onHoverAdvisors} onClick={onHoverAdvisors} onMouseLeave={onLeaveAdvisors} r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="#32cd32"   
        stroke-width="15px"
        stroke-dasharray="calc(60 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="white"   
        stroke-width="15px"
        stroke-dasharray="calc(57 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle id="liquiditycir" onMouseEnter={onHoverLiquidity} onClick={onHoverLiquidity} onMouseLeave={onLeaveLiquidity} r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="#ffd700"   
        stroke-width="15px"
        stroke-dasharray="calc(56.50 *(3.1416 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="white"   
        stroke-width="15px"
        stroke-dasharray="calc(38 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle id="salecir" onMouseEnter={onHoverSale} onClick={onHoverSale} onMouseLeave={onLeaveSale} r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="#ff8c00"   
        stroke-width="15px"
        stroke-dasharray="calc(37.5 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
        <circle  r="42.5" cx="50" cy="50" 
        fill="transparent" 
        stroke="white"   
        stroke-width="15px"
        stroke-dasharray="calc(0.5 *(3.14152917 * 86)/100) calc(3.1416 * 86)"
        transform="rotate(-90) translate(-100)"/>
    </svg>
    <ListContainer>
    <List>
        <ListItem id="sale" style={{color: "#ff8c00" }} onClick={onHoverSale} onMouseEnter={onHoverSale} onMouseLeave={onLeaveSale}>
            SALE 
        </ListItem>
        <ListItem id="liquidity" style={{color: "#ffd700" }} onClick={onHoverLiquidity} onMouseEnter={onHoverLiquidity} onMouseLeave={onLeaveLiquidity}>
            LIQUIDITY
        </ListItem>
        <ListItem id="advisors" style={{color: "#32cd32" }} onClick={onHoverAdvisors} onMouseEnter={onHoverAdvisors} onMouseLeave={onLeaveAdvisors}>
            ADVISORS
        </ListItem>
    </List>
    <List>
        <ListItem id="cex"style={{color: "#4169e1" }} onClick={onHoverCEX} onMouseEnter={onHoverCEX} onMouseLeave={onLeaveCEX}>
            CEX RESERVE
        </ListItem>
        <ListItem id="ptearn" style={{color: "#9b7653" }} onClick={onHoverPTearn} onMouseEnter={onHoverPTearn} onMouseLeave={onLeavePtearn}>
            PLAY TO EARN
        </ListItem>
    </List>
    <List>
        <ListItem id="team" style={{color: "#800080" }} onClick={onHoverTeam} onMouseEnter={onHoverTeam} onMouseLeave={onLeaveTeam}>  
            TEAM
        </ListItem>
        <ListItem id="gives" style={{color: "#808080" }} onClick={onHoverGives} onMouseEnter={onHoverGives} onMouseLeave={onLeaveGives}>
            GIVEAWAYS
        </ListItem>
        <ListItem id="mark" style={{color: "#ff0000" }} onClick={onHoverMark} onMouseEnter={onHoverMark} onMouseLeave={onLeaveMark}>
            MARKETING
        </ListItem>
    </List>
    </ListContainer>
    </Background>
    )
}

export default Tokenomics
