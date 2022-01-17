import React from 'react'
import styled from "styled-components"
import Image from "../../images/BestTeamDivider.png"

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
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        img {
            width: 80%;
        }
    }

    
    
`;



const TempSectionThree = () => {
    return (
        <>
        <Section />
        </>
            
        
    )
}

export default TempSectionThree