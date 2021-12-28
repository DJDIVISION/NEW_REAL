import React from 'react';
import "../index.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components";
import { HeroSection } from "../components/HeroSection";


const CanvasContainer = styled.div`
    width: 100%;
    height: 900px;
    background-color: ${props => props.theme.body};
`;

const Planet = () => {
    return (
        <CanvasContainer >
            <HeroSection />
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    )
}

export default Planet;
