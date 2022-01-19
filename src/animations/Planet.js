import React from 'react';
import "../index.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components";
import { CanvasSection, CanvasSectionTwo, Both } from "./CanvasSection";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { ProgressCircle } from "./components/Progress";






const CanvasContainer = styled.div`
    width: 100%;
    height: 600px;
    background-color: ${props => props.theme.body};

    @media screen and (max-width: 860px){
        height: 70vh;
    }
`;

const Planet = () => {
    return (
        <motion.div>
        <CanvasContainer id="planet">
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
        </motion.div>
    )
}

export default Planet;
