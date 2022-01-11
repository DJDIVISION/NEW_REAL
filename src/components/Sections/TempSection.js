import React from 'react'
import styled from "styled-components"
import Moon from "../../images/MoonDivider.png"

const Section = styled.div`
    background-image: url(${Moon});
    height: 200px;
    width: 100%;
    
    z-index: 100;
    
    background-size: cover;
    background-color: black;
    @media screen and (max-width: 1000px){
        height: 90px;
    }
    
`;
const TitleSection = styled.div`
    height: 100px;
    width: 100%;
    background: white;
    @media screen and (max-width: 1000px){
        height: 60px;
    }
`;




const TempSection = (props) => {
    return (
        <>
        <Section />
        <TitleSection />
        </>
            
        
    )
}

export default TempSection
