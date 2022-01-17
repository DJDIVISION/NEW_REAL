import React from 'react'
import styled from "styled-components"
import Image from "../../images/BestGamingDivider.png"

const Section = styled.div`
    background-image: url(${Image});
    height: 400px;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    
    z-index: 100;
    
    
    background-color: black;
    @media screen and (max-width: 1000px){
        height: 200px;
        background-size: 300px;
        background-position: center;
        background-repeat: no-repeat;
    }

    
    
`;



const TempSectionTwo = () => {
    return (
        <>
        <Section />
        </>
            
        
    )
}

export default TempSectionTwo