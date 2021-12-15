import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Gaming1 from "../../images/gaming1.png";
import Gaming2 from "../../images/gaming2.png";
import Gaming3 from "../../images/gaming3.png";
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
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
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
    width: 200px;
    height: auto;
    max-width: 1000px;
    max-height: 1300px;
    position: absolute;
    z-index: 5;
    margin-left: 40px;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 30px;
        
        
    }
    ${Image}:nth-child(2) {
        top: 60px;
        left: 5px;
    }
    ${Image}:nth-child(3) {
        top: 60px;
        right: 5px;
        
        
    }
    ${Image}:nth-child(4) {
        top: 30px;
    }

    ${Image}:nth-child(4) {
        top: 60px;
        left: 5px;
    }

    ${Image}:nth-child(4) {
        top: 60px;
        left: 5px;
    }

    

`;



const GamingCards = () => {

    

    return(
        <Section>
            <Container>
                <ColumnRight>
                    {/* <Image src={Planet1} alt="planet" 
                    whileTap={{scale: 1.3}} 
                    drag={true}
                    initial={{x: -700, y:275, scale: 0.7}}
                    animate={{x: 300, y:-50, scale: 1.9, transition: { duration: 20}}}/> */}
                    {/* <Image src={StarsBack1} alt="planet" 
                    whileTap={{scale: 1.3}} 
                    drag={true}
                    initial={{x: -100, y:0, scale: 4}}
                    animate={{x: -100, y:0, scale: 4.1, transition: { duration: 2, repeat: Infinity, repeatType: 'reverse'}}}/>  */}
                    <Image src={Gaming1} alt="planet" 
                    
                    drag={true}
                    initial={{x: 10, y:0, scale: 1}}
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />
                    <Image src={Gaming2} alt="planet" 
                     
                    drag={true}
                    initial={{x: 10, y:0, z: 20, scale: 1}}
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />
                    <Image src={Gaming3} alt="planet" 
                     
                    drag={true}
                    initial={{x: 10, y:0, scale: 1}} 

                    
                    
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />

                    <Image src={Gaming1} alt="planet" 
                    
                    drag={true}
                    initial={{x: 10, y:0, scale: 1}}
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />
                    <Image src={Gaming2} alt="planet" 
                     
                    drag={true}
                    initial={{x: 10, y:0, scale: 1}}
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />
                    <Image src={Gaming3} alt="planet" 
                     
                    drag={true}
                    initial={{x: 10, y:0, scale: 1}} 

                    
                    
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />

                    <Image src={Gaming1} alt="planet" 
                    
                    drag={true}
                    initial={{x: 10, y:0, scale: 1}}
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />
                    <Image src={Gaming2} alt="planet" 
                     
                    drag={true}
                    initial={{x: 10, y:0, scale: 1}}
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />
                    <Image src={Gaming3} alt="planet" 
                     
                    drag={true}
                    initial={{x: 10, y:0, scale: 1}} 

                    
                    
                    /* animate={{x: -40, y:0,  scale: 2, transition: { duration: 6, repeat: Infinity, repeatType: 'reverse'}}} */ />
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


export default GamingCards;
