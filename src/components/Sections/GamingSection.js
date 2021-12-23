import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Planet1 from "../../images/planet4.png";
import { Link as LinkR } from "react-router-dom";
import "../../index.css";


const Button = styled(motion.button)`
    padding: 0.50rem 1.5rem;
    font-size: 1rem;
    border: 2px solid whitesmoke;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: whitesmoke;
    margin-bottom: 100px;
    


`;
const ButtonSection = styled.section`
    width: 40vh;
    margin-left: 110px;
    margin-top: -50px;
`;



const Section = styled.section`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    height: 780px;
    overflow: hidden;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 80vh;
    padding: 2rem calc(100vw - 1300px / 2 );
    margin-left: 30px;
    @media screen and (max-width: 768px) {
        //grid-template-columns: 1fr;
        
    }
`;


const ColumnLeft = styled.div`
    display: flex;
    color: whitesmoke;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    //padding: 6rem 1rem;
    margin-top: 5rem;
    z-index: 10;
    
    

    @media screen and (max-width: 768px) {
        diaply: flex-end:
        align-text: center;
        margin-left: 60px;
    }

    h1 {
        
      text-align: right;
      font-size: 3rem;
      text-shadow: -1px 1px 0 whitesmoke,
                          4px 6px 0 black,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;  
        
      @media screen and (max-width: 768px) {
        font-size: 30px;
        text-align: right;
        
    }
    }

    p {
        margin: 0.5rem 0;
        font-size: 4rem;
        width: 600px;
        text-align: right;
        @media screen and (max-width: 768px) {
        font-size: 48px;
        text-align: right;
        margin-bottom: 60px;
        width: 250px;
        text-shadow: -1px 1px 0 whitesmoke,
                          4px 6px 0 black,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
    }
    }
`;

const Image = styled(motion.img)`
    width: 150px;
    height: 150px;
    max-width: 250px;
    max-height: 250px;
    position: absolute;
    z-index: 5;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 20px;
        right: 50px;
    }
    ${Image}:nth-child(2) {
        
    }
    ${Image}:nth-child(3) {
        
        
    }
    ${Image}:nth-child(4) {
        
    }

    @media screen and (max-width: 880px) {
        ${Image}:nth-child(1) {
        
        }
        ${Image}:nth-child(2) {
            
        }
        ${Image}:nth-child(3) {
          
        }
        ${Image}:nth-child(4) {
            
        }
    }

`;

const svgVariants = {
    hidden: { rotate: 180 },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 3,
            ease: "easeInOut"
        }
    }
}

const GamingSection = () => {

    

    return(
        <Section id="gaming">
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0, x: 300}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3}}
                    >The only <br/> place where</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 300}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{duration: 3}}
                    >crypto, sports & casino games meet</motion.p>
                    <LinkR to="/NewsPage"><Button 
                    whileHover={{scale:1.05}} 
                    whileTap={{backgroundColor:'gold', border: 'none', color: 'black' }}
                    initial={{ opacity: 0, x: 300}}
                    animate={{ opacity: 1, x: 0, transition: { duration: 3 }}}
                    >Let's have fun</Button></LinkR>
                </ColumnLeft>
                <ColumnRight>
                <motion.svg className="joystick"
                    viewBox="0 0 24 24"
                    fill="gold"
                    height="15em"
                    width="15em"
                    variants={svgVariants}
                    initial= "hidden"
                    animate= "visible"
                    >
                    <motion.path
                        fill="none"
                        d="M19.98 8.72C19.877 7.225 18.567 6 17 6H7a2.977 2.977 0 00-2.991 2.867.98.98 0 01-.018.155L4 16.5c0 .397.159.784.437 1.062.279.279.666.438 1.063.438.5 0 1.038-.638 1.661-1.377.336-.397.717-.849 1.149-1.261.577-.55 1.821-1.099 2.459-1.249.418-.098.951-.113 1.231-.113s.813.015 1.229.112c.64.151 1.884.7 2.461 1.249.433.413.813.864 1.149 1.262C17.462 17.362 18 18 18.5 18a1.51 1.51 0 001.062-.437c.279-.279.438-.666.438-1.063V9c-.013-.063-.01-.096-.01-.16a.427.427 0 01-.01-.12zM8 12a2 2 0 11-.001-3.999A2 2 0 018 12zm8-5a1 1 0 110 2 1 1 0 110-2zm-2 4a1 1 0 110-2 1 1 0 110 2zm2 2a1 1 0 110-2 1 1 0 110 2zm2-2a1 1 0 110-2 1 1 0 110 2z"
                        variants={pathVariants}
                    />
                    <motion.path d="M21.979 8.652A5.005 5.005 0 0017 4H7a4.97 4.97 0 00-4.987 4.737c-.01.079-.013.161-.013.253v7.51c0 .925.373 1.828 1.022 2.476A3.524 3.524 0 005.5 20c1.429 0 2.324-1.061 3.189-2.087.318-.377.646-.767 1-1.103.237-.226 1.102-.647 1.539-.751.252-.059 1.293-.058 1.541-.001.439.104 1.304.526 1.541.751.354.337.682.727 1 1.104C16.176 18.939 17.071 20 18.5 20c.925 0 1.828-.373 2.476-1.022A3.524 3.524 0 0022 16.5V9c0-.095-.004-.18-.014-.26l-.007-.088zM20 16.5c0 .397-.159.784-.438 1.063A1.51 1.51 0 0118.5 18c-.5 0-1.038-.638-1.661-1.377-.336-.397-.717-.849-1.149-1.262-.577-.549-1.821-1.098-2.461-1.249C12.813 14.015 12.28 14 12 14s-.813.015-1.23.113c-.638.15-1.882.699-2.459 1.249-.433.412-.813.863-1.149 1.261C6.538 17.362 6 18 5.5 18c-.397 0-.784-.159-1.063-.438A1.51 1.51 0 014 16.5l-.009-7.478c.01-.051.016-.103.018-.155A2.977 2.977 0 017 6h10c1.567 0 2.877 1.225 2.98 2.72 0 .06.005.12.01.12 0 .064-.003.097.01.16v7.5z" variants={pathVariants}/>
                    <motion.path d="M17 12 A1 1 0 0 1 16 13 A1 1 0 0 1 15 12 A1 1 0 0 1 17 12 z" variants={pathVariants}/>
                    <motion.path d="M19 10 A1 1 0 0 1 18 11 A1 1 0 0 1 17 10 A1 1 0 0 1 19 10 z" variants={pathVariants}/>
                    <motion.path d="M17 8 A1 1 0 0 1 16 9 A1 1 0 0 1 15 8 A1 1 0 0 1 17 8 z" variants={pathVariants}/>
                    <motion.path d="M15 10 A1 1 0 0 1 14 11 A1 1 0 0 1 13 10 A1 1 0 0 1 15 10 z" variants={pathVariants}/>
                    <motion.path d="M10 10 A2 2 0 0 1 8 12 A2 2 0 0 1 6 10 A2 2 0 0 1 10 10 z" variants={pathVariants}/>
                </motion.svg>
                </ColumnRight>
            </Container>
        </Section>
    )
}


export default GamingSection;