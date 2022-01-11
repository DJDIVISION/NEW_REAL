import React from 'react'
import styled from "styled-components"
import Moon from "../../images/MoonDivider.png"

const Section = styled.div`
    background-image: url(${Moon});
    height: 400px;
    width: 100%;
    
    z-index: 100;
    
    background-size: cover;
    background-color: black;
    @media screen and (max-width: 1000px){
        height: 90px;
    }

    
    
`;
const TitleSection = styled.div`
    height: 200px;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1000px){
        height: 60px;
    }
`;

const Text = styled.h2`
    font-size: 140px;
    color: black;
    display: flex;
    font-family: "Alphacentauri";
    @media screen and (max-width: 1100px){
        font-size: 48px;
    }
    
`;




const TempSection = (props) => {
    return (
        <>
        <Section />
        <TitleSection>
        <Text>DAIR</Text>
        </TitleSection>
        </>
            
        
    )
}

export default TempSection
