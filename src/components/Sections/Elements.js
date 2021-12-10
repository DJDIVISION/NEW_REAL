import React from 'react';
import styled, { keyframes } from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01BF71' : '010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary}) => (primary ? '#fff' : '#01BF71')};
    }

    

`;



export const InfoContainer = styled.div`
   color: #fff;
   background: ${({lightBg}) => (lightBg ? "#002F6C" : "black")};
    height: 750px;
    
    
   @media screen and (max-width: 768px) {
       padding: 60px 0;
   }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    justify-content: center;
    
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col2'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;


const move = keyframes`
    0% { transform: scale(1)        }
    50% { transform: scale(0.9)        }
    100% { transform: scale(1)         }
`;

export const TopLine = styled.p`
    //color: gold;
    font-size: 60px;
    line-height: 1.1;
    font-weight: 200;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: "Neonballroom";
    text-shadow: 5px 5px 2px red;
    margin-bottom: 80px;
    animation: ${move} 2.5s ease infinite;
    color: ${({ colorText }) => (colorText ? 'navy' : 'gold')};
`;

export const Heading = styled.h1`
    
    margin-bottom: 24px;
    font-size:  10px;
    line-height: 1.1;
    font-weight: 600;
    

    @media screen and (max-width: 480px) {
        font-size:32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 1.3;
    margin-top: -30px;
    margin-bottom: 50px;
    color: ${({ darkText }) => (darkText ? 'black' : 'whitesmoke')};
    
    @media screen and (max-width: 768px) {
        padding: 2rem;
        margin-top: -80px;
    }

`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 1555px;
    height: 100%;
`;



export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    //animation: ${move} 2.5s ease infinite;

    @media screen and (max-width: 768px) {
        padding: 2rem;
        margin-top: -100px;
    }
`;



/* export const Section = styled.section`
    background: url(${({ image }) => image && image});
    background-color: white;
    background-position: center;
    
    height: 600px;
    background-repeat: no-repeat;
    background-size: 300px 300px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background-attachment: scroll;

    
    




`;

export const Container = styled.div`
    color: black;
    padding: 2rem;
    backdrop-filter: blur(10px);
    background-color: #4a4743;
    opacity: 0.8;
    margin: 3rem;
    border-radius: 10px;
    
    
    @media screen and (max-width: 880px) {
        margin-left: auto;
        margin-right: auto;
        
        h1{
            text-align: center;
        }

        p {
            text-align: center;
        }

        button {
            
        }
        
    }

    h1 {
        font-size: clamp(2rem, 8vw, 4rem);
        color: lightgoldenrodyellow;
        margin-bottom: 15px;

        @media screen and (min-width: 880px) {
            
        }
    }
    
    p {
        font-size: clamp(1rem, 6vw, 2.5rem);
        margin-bottom: 1rem;
        
        color: lightgoldenrodyellow;

        @media screen and (max-width: 880px){
            
            
        }
    }

    button {
        font-size: 16px;
        text-transform: none;
        padding: 5px 20px;
        color: lightgoldenrodyellow;
        background: transparent;
        border-radius: 4px;
        margin-top: 0.6rem;
        border: 1px solid lightgoldenrodyellow;
        cursor: pointer;
        
        
        &:hover{
          background: lightgoldenrodyellow;
          color: black;
          font-weight: bold;  
          border: 1px solid black;
          transition: 0.2s all ease-in-out;
        }
    }
`; */