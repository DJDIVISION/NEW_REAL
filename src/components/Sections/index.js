import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
//import { Button } from "@material-ui/core";
import Planet1 from "../../images/planet1.png";
import Planet2 from "../../images/planet6.png";
import Planet3 from "../../images/planet3.png";
import Planet4 from "../../images/planet4.png";


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
    padding: 3rem calc(100vw - 1300px / 2 );
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


const ColumnLeft = styled.div`
    display: flex;
    color: whitesmoke;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 6rem 2rem;
    z-index: 10;

    @media screen and (max-width: 768px) {
        align-items: center;
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
        margin: 2rem 0;
        font-size: 4rem;

        @media screen and (max-width: 768px) {
        font-size: 60px;
        text-align: center;
        margin-bottom: 60px;
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
        top: 10px;
        left: 10px;
    }
    ${Image}:nth-child(2) {
        top: 10px;
        right: 10px;
    }
    ${Image}:nth-child(3) {
        bottom: 10px;
        left: 10px;
    }
    ${Image}:nth-child(4) {
        bottom: 10px;
        right: 10px;
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
                    >Welcome to <br/> Destiny Airlines</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{duration: 2}}
                    >A Journey to Outer Space</motion.p>
                    <Button 
                    whileHover={{scale:1.05}} 
                    whileTap={{scale:0.95, backgroundColor:'gold', border: 'none', color: 'black' }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1, transition: { duration: 2.5 }}}
                    >Learn more</Button>
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
                    whileTap={{scale: 1.3}} 
                    drag={true}
                    initial={{x: -50, y:-350, scale: 0.2}}
                    animate={{x: 150, y:-550,  scale: 2, transition: { duration: 26}}}/>
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
