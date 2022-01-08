import React from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";


const ProgressBar = styled.div`
    width: 250px;
    height: 5px;
    background-color: black;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin: auto;
    border-radius: 30px;

`;

const move = keyframes`
    0% { width: 0% }
    
    100% { width: 100% }
`;

const Progress = styled.div`
    width: 1%;
    height: 100%;
    background-color: aqua;
    border-radius: 30px;
    animation: ${move} 10s linear;   
`;



const texts = keyframes`
    0% { content: "Loading"}
    50% { content: "Starting Engines"}
    100% { content: "Ready for Launchment"}
`;



const Circle = styled.div`
    width: 150px;
    height: 150px;
    margin-top: -300px;
`;

const SVGVariants = {
    hidden: {
        strokeDashoffset: 0
    }
}






export function ProgressCircle() {
    return(
        <div>
        <Circle>
            <svg width="150" height="150">
                <circle className="progress-circle" cx="75" cy="75" r="70" fill="transparent" stroke="aqua" strokeWidth="4px"/>
                <motion.text initial={{opacity: 0}} animate={{opacity:1 }} transition={{ delay: 9.5}} fill="aqua" x="45" y="85" text-anchor="middle" alignment-baseline="middle" fontSize="32px">GO!</motion.text>
            </svg>
        </Circle> 
        <ProgressBar>
            <Progress>
                <AnimatePresence>
                <motion.h1 
                className="text"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 2.5}} 
                >Starting Engines...</motion.h1>
                </AnimatePresence>
                {/* <motion.h1 className="text">Starting Engines...</motion.h1>
                <motion.h1 className="text">Fasten your seatbelts...</motion.h1>
                <motion.h1 className="text">LAUNCH!!!</motion.h1> */}
            </Progress>
        </ProgressBar>
        </div>
    )
}