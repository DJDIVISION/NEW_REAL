import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Planet1 from "../../images/planet4.png";
import Astronaut from "../../images/astronaut3.png";
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



const NewsSection = () => {

    

    return(
        <Section id="news">
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0, x: 300}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3}}
                    >Get the <br/> latest news</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 300}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{duration: 3}}
                    >from Destiny Airlines and his parters</motion.p>
                    <LinkR to="/NewsPage"><Button 
                    whileHover={{scale:1.05}} 
                    whileTap={{backgroundColor:'gold', border: 'none', color: 'black' }}
                    initial={{ opacity: 0, scale: 0.2}}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 6 }}}
                    >Read the news</Button></LinkR>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={Planet1} alt="planet" 
                    whileTap={{scale: 0.8}} 
                    drag={true}
                    initial={{x: -250, y:0, scale: 0.1}}
                    animate={{x: -150, y:50,  scale: 1.9, transition: { duration: 9, repeat: Infinity, repeatType: 'reverse'}}} />
                </ColumnRight>
            </Container>
        </Section>
    )
}


export default NewsSection;