import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { IconButton } from "@material-ui/core";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const LinkList = styled.ul`
    display: inline-flex;
    margin-top: 30px;
`;
const UpIcon = styled(KeyboardDoubleArrowUpIcon)`
    color: ${props => props.theme.text};
    transform: scale(1.2);
`;


const DownIcon = styled(KeyboardDoubleArrowDownIcon)`
    color: ${props => props.theme.text};
    transform: scale(1.2);
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
        font-size: 22px;
    }
`;

const TitleTwo = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.text};
    position: fixed;
    margin-top: 185px;

    @media screen and (max-width:860px){
        margin-top: 200px;
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
    height: 30px;
    
    
`;

const ListItem = styled.li`
    font-size: 16px;
    padding: 0.4rem 0.8rem;
    font-weight: bold;
    
`;

const ListContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items:center;
`;







const Tokenomics = () => {

    const { ref, inView } = useInView({
        threshold: 0.5
    });

    const animation = useAnimation();
    

    useEffect(() => {
        
       
        if(inView){
          animation.start({
              opacity: 1,
              x: 0, 
              transition: {
                type: "spring", duration: 2, bounce: 0.3
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
        <Background ref={ref} id="tokenomics">
            <motion.div animate={ animation } style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Title id="supply">TOTAL SUPPLY: 1,000,000,000,000</Title>
            <TitleTwo id="placer">100%</TitleTwo>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="175" height="175">
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
        <ListItem id="gives" style={{color: "#808080" }} onClick={onHoverGives} onMouseEnter={onHoverGives} onMouseLeave={onLeaveGives}>
            GIVEAWAYS
        </ListItem>
        <ListItem id="liquidity" style={{color: "#ffd700" }} onClick={onHoverLiquidity} onMouseEnter={onHoverLiquidity} onMouseLeave={onLeaveLiquidity}>
            LIQUIDITY
        </ListItem>
    </List>
    <List>
        <ListItem id="cex"style={{color: "#4169e1" }} onClick={onHoverCEX} onMouseEnter={onHoverCEX} onMouseLeave={onLeaveCEX}>
            CEX RESERVE
        </ListItem>
        <ListItem id="sale" style={{color: "#ff8c00" }} onClick={onHoverSale} onMouseEnter={onHoverSale} onMouseLeave={onLeaveSale}>
            SALE 
        </ListItem>
    </List>
    <List>
        <ListItem id="team" style={{color: "#800080" }} onClick={onHoverTeam} onMouseEnter={onHoverTeam} onMouseLeave={onLeaveTeam}>  
            TEAM
        </ListItem>
        <ListItem id="ptearn" style={{color: "#9b7653" }} onClick={onHoverPTearn} onMouseEnter={onHoverPTearn} onMouseLeave={onLeavePtearn}>
            PLAY TO EARN
        </ListItem>
    </List>
    <List>
        <ListItem id="mark" style={{color: "#ff0000" }} onClick={onHoverMark} onMouseEnter={onHoverMark} onMouseLeave={onLeaveMark}>
            MARKETING
        </ListItem>
        <ListItem id="advisors" style={{color: "#32cd32" }} onClick={onHoverAdvisors} onMouseEnter={onHoverAdvisors} onMouseLeave={onLeaveAdvisors}>
            ADVISORS
        </ListItem>
    </List>
    </ListContainer>
    <LinkList>
            <LinkS to="planet" smooth={true} duration={500} spy={true} exact="true"><IconButton><UpIcon /></IconButton></LinkS>
            <LinkS to="tokenomics2" smooth={true} duration={500} spy={true} exact="true"><IconButton><DownIcon /></IconButton></LinkS>
            </LinkList>
    </motion.div>
    </Background>
    )
}

export default Tokenomics
