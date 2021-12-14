import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Planet1 from "../../images/planet1.png";
import Planet2 from "../../images/planet6.png";
import Planet3 from "../../images/planet3.png";
import Planet4 from "../../images/planet4.png";
import { Link as LinkR } from "react-router-dom";


const Button = styled(motion.button)`
    padding: 0.75rem 2rem;
    font-size: 1rem;
    border: 2px solid whitesmoke;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: whitesmoke;
`;




const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
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
    padding: 6rem 0.5rem;
    z-index: 10;
    

    @media screen and (max-width: 768px) {
        align-items: center;
        margin-left: 100px;
    }

    h1 {
      margin-bottom: 0.5rem;
      font-size: 2rem;  

      @media screen and (max-width: 768px) {
        font-size: 26px;
        text-align: center;
        margin-bottom: 20px;
    }
    }

    p {
        margin: 1.5rem 0;
        font-size: 4rem;
        width: 600px;

        @media screen and (max-width: 768px) {
        font-size: 48px;
        text-align: center;
        margin-bottom: 60px;
        width: 200px;
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
        top: 100px;
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



const AnimatedSection = () => {

    const FadeLeft = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    return(
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2}}
                    >Meet <br/> the team</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{duration: 2}}
                    >That will take you to Outer Space</motion.p>
                    {/* <LinkR to="/TeamPage"><Button 
                    whileHover={{scale:1.05}} 
                    whileTap={{backgroundColor:'gold', border: 'none', color: 'black' }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1, transition: { duration: 2.5 }}}
                    >Learn more</Button></LinkR> */}
                </ColumnLeft>
                <ColumnRight>
                    {/* <Image src={Planet1} alt="planet" 
                    whileTap={{scale: 1.3}} 
                    drag={true}
                    initial={{x: -700, y:275, scale: 0.7}}
                    animate={{x: 300, y:-50, scale: 1.9, transition: { duration: 20}}}/> */}
                    {/* <Image src={Planet2} alt="planet" 
                    whileTap={{scale: 1.3}} 
                    drag={true}
                    initial={{x: 550, y:395, scale: 0.6}}
                    animate={{x: -500, y:25, scale: 2.3, transition: { duration: 24}}}/> */}
                    <Image src={Planet3} alt="planet" 
                    whileTap={{scale: 0.8}} 
                    drag={true}
                    initial={{x: 0, y:0, scale: 0.2}}
                    animate={{x: 0, y:0,  scale: 2, transition: { duration: 13, repeat: Infinity, repeatType: 'reverse'}}} />
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


export default AnimatedSection;
