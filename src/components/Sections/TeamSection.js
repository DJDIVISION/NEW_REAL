import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Planet1 from "../../images/planet4.png";
import Astronaut from "../../images/planet6.png";
import Planet3 from "../../images/planet11.png";
import Planet4 from "../../images/planet4.png";
import { Link as LinkR } from "react-router-dom";


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
    height: 880px;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 80vh;
    padding: 2rem calc(100vw - 1300px / 2 );
    
    @media screen and (max-width: 768px) {
        //grid-template-columns: 1fr;
    }
`;


const ColumnLeft = styled.div`
    display: flex;
    color: whitesmoke;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    //padding: 6rem 1rem;
    margin-top: 5rem;
    z-index: 10;
    

    @media screen and (max-width: 768px) {
        align-items: center;
        margin-left: 40px;
    }

    h1 {
      
      font-size: 3rem;  

      @media screen and (max-width: 768px) {
        font-size: 30px;
        text-align: center;
        
    }
    }

    p {
        margin: 0.5rem 0;
        font-size: 5rem;
        width: 600px;

        @media screen and (max-width: 768px) {
        font-size: 48px;
        text-align: center;
        margin-bottom: 60px;
        width: 250px;
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
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 0;
        right: 1px;
    }
    ${Image}:nth-child(2) {
        top: 100px;
        right: 50px;
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



const TeamSection = () => {

    

    return(
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0, x: 300}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3}}
                    >This is <br/> the team</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 300}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{duration: 3}}
                    >that will take you to Outer Space</motion.p>
                    <LinkR to="/TeamPage"><Button 
                    whileHover={{scale:1.05}} 
                    whileTap={{backgroundColor:'gold', border: 'none', color: 'black' }}
                    initial={{ opacity: 0, scale: 0.2}}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 6 }}}
                    >Meet the Team</Button></LinkR>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={Planet3} alt="planet" 
                    whileTap={{scale: 0.6}} 
                    drag={true}
                    initial={{x:-250, y:100, scale: 0, opacity: 0.5}}
                    animate={{x: 500, y:0, scale: 1.9, opacity: 1, transition: { duration: 6, repeat: Infinity}}} />
                    {/* <Image src={StarsBack1} alt="planet" 
                    whileTap={{scale: 1.3}} 
                    drag={true}
                    initial={{x: -100, y:0, scale: 4}}
                    animate={{x: -100, y:0, scale: 4.1, transition: { duration: 2, repeat: Infinity, repeatType: 'reverse'}}}/>  */}
                    <Image src={Planet1} alt="planet" 
                    whileTap={{scale: 0.8}} 
                    drag={true}
                    initial={{x: 10, y:0, scale: 0}}
                    animate={{x: -40, y:0,  scale: 3, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} />
                   {/*  <Image src={Planet4} alt="planet" 
                    whileTap={{scale: 1.3}} 
                    drag={true}
                    initial={{x: 600, y:-380, scale: 2.4}}
                    animate={{x: -600, y:0, scale: 0.4, transition: { duration: 28}}}/> */}
                </ColumnRight>
            </Container>
        </Section>
    )
}


export default TeamSection;