import React from 'react';
import "../index.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components";
import { HeroSection } from "../components/HeroSection";
import { motion } from "framer-motion";


const Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,
        },
    },
};

const CanvasContainer = styled.div`
    width: 100%;
    height: 900px;
    background-color: ${props => props.theme.body};
`;

const Planet = () => {
    return (
        <motion.div variants={Variants} initial="hidden" animate="visible">
        <CanvasContainer >
            <HeroSection />
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
