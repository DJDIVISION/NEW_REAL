import React, { useState } from "react";
import styled from "styled-components";
import { Dev1Overview } from "./dev1overview.jsx";
import { Dev1Postview } from "./dev1postview.jsx";
import { Dev2Overview } from "./dev2overview.jsx";
import { Dev2Postview } from "./dev2postview.jsx";
import { Dev3Overview } from "./dev3overview.jsx";
import { Dev3Postview } from "./dev3postview.jsx";
import { CioPostview } from "./ciopostview.jsx";
import { CioOverview } from "./ciooverview.jsx";
import { CeoPostview } from "./ceopostview.jsx";
import { CeoOverview } from "./ceooverview.jsx";
import { CardContext, CardContext2, CardContext3, CardContext4, CardContext5 } from "./context";

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100%;
    height: 100vh;
    padding-top: 200px;

    @media screen and (max-width: 1100px){
        padding-top: 80px;
    }
    
`;

const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  border-radius: 28px;
  box-shadow: 0 0 12px 1px ${props => props.theme.text};
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  
  

  
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 28px;

  
`;

export function TeamCards(props) {

    const [active, setActive] = useState("overview4");

    const contextValue = { active, setActive };

    return (
        <div>
        <MainContainer id="ceo">
        <CardContext5.Provider value={contextValue}>
            <CardContainer >
                <CardWrapper>
                    <CeoOverview/>
                    <CeoPostview/>
                </CardWrapper>
            </CardContainer>
        </CardContext5.Provider>
        </MainContainer>
        <MainContainer id="cio">
        <CardContext4.Provider value={contextValue}>
            <CardContainer>
                <CardWrapper>
                    <CioOverview/>
                    <CioPostview/>
                </CardWrapper>
            </CardContainer>
        </CardContext4.Provider>
        </MainContainer>
        <MainContainer id="dev1">
        <CardContext.Provider value={contextValue}>
            <CardContainer>
                <CardWrapper>
                    <Dev1Overview/>
                    <Dev1Postview/>
                </CardWrapper>
            </CardContainer>
        </CardContext.Provider>
        </MainContainer>
        <MainContainer id="dev2">
        <CardContext2.Provider value={contextValue}>
            <CardContainer>
                <CardWrapper>
                    <Dev2Overview/>
                    <Dev2Postview/>
                </CardWrapper>
            </CardContainer>
        </CardContext2.Provider>
        </MainContainer>
        <MainContainer id="dev3">
        <CardContext3.Provider value={contextValue}>
            <CardContainer>
                <CardWrapper>
                    <Dev3Overview/>
                    <Dev3Postview/>
                </CardWrapper>
            </CardContainer>
        </CardContext3.Provider>
        </MainContainer>
        </div>
        
    )
}