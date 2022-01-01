import React from "react";
import styled, { keyframes } from "styled-components";
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

const Text = styled.div`
    color: aqua;
    font-size: 24px;
    position: absolute;
    top:80px;
    left:0;
    bottom:0;
    right:0;
    margin: auto;
    text-align: center;
    
    
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
                <text fill="aqua" x="75" y="75" text-anchor="middle" alignment-baseline="middle" fontSize="32px">50%</text>
            </svg>
        </Circle>
        <ProgressBar>
            <Progress>
                <Text>LOADING</Text>
            </Progress>
        </ProgressBar>
        </div>
    )
}