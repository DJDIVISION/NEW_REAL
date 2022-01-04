import React, {useEffect} from 'react';
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconButton } from "@material-ui/core";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll"; 
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const UpIcon = styled(KeyboardDoubleArrowUpIcon)`
    color: ${props => props.theme.text};
    transform: scale(1.2);
`;

const DownIcon = styled(KeyboardDoubleArrowDownIcon)`
    color: ${props => props.theme.text};
    transform: scale(1.2);
`;

const LinkList = styled.ul`
    display: inline-flex;
    margin-top: 30px;
`;

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
    height: 110vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
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
        display: flex-end:
        text-align: center;
        margin-left: 60px;
        margin-top: 7rem;
    }

    h1 {
        
      text-align: right;
      font-size: 3rem;
      text-shadow: -1px 1px 0 whitesmoke,
                          4px 6px 0 black,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;  
        
      @media screen and (max-width: 768px) {
        font-size: 26px;
        text-align: right;
        
    }
    }

    p {
        margin: 0.5rem 0;
        font-size: 3rem;
        width: 600px;
        text-align: right;
        margin-left: 200px;
        @media screen and (max-width: 860px) {
        margin-left: 0px;
        font-size: 40px;
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
        transform: scale(8);
        top: 20px;
        right: 340px;
    }
    ${Image}:nth-child(2) {
        
    }
    ${Image}:nth-child(3) {
        
        
    }
    ${Image}:nth-child(4) {
        
    }

    @media screen and (max-width: 880px) {
        ${Image}:nth-child(1) {
            transform: scale(5); 
            top: 150px;
            right: 150px;
        }
        ${Image}:nth-child(2) {
            transform: scale(1.5);
            top: 80px;
            right: 200px;
            
        }
        ${Image}:nth-child(3) {
          
        }
        ${Image}:nth-child(4) {
            
        }
    }

`;



const NewsSection = () => {

    const { ref, inView } = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const opacity = useAnimation();

    useEffect(() => {
        
       console.log("use effect hook, inView = ", inView); 
        if(inView){
          animation.start({
              x: 0, opacity: 1, 
              transition: {
                  type: "spring", duration: 3, bounce: 0.3
              }
          })
          opacity.start({
              opacity: 1, 
              transition: {
                  duration: 2.5
              }
          })  
        }
        if (!inView){
          animation.start({
              x: "-100vw",
          })  
          opacity.start({
              opacity: 0
          })
        }
    }, [inView]); 

    return(
        <Section id="roadmap">
            <Container ref={ref}>
                <ColumnLeft>
                    <motion.h1
                        animate={ animation }
                    >Follow <br/>the RoadMap</motion.h1>
                    <motion.p
                        animate={ animation }
                    >that will take us beyond the moon</motion.p>
                    <LinkR to="/RoadMap"><Button 
                    
                    animate={ opacity}
                    >Go to RoadMap</Button></LinkR>
                </ColumnLeft>
                <ColumnRight>
                    {/* <Image src={StarsBack} alt="planet" 
                    
                    whileTap={{scale: 0.8}} 
                    drag={true}
                    initial={{x: -0, y:0, scale: 0.5}}
                    animate={{x: 120, y:50,  scale: 2.4, transition: { duration: 6}}} />
                    <Image src={Planet3} alt="" /> */}
                </ColumnRight>
            </Container>
            <LinkList>
            <LinkS to="tokenomics2" smooth={true} duration={500} spy={true} exact="true"><IconButton><UpIcon /></IconButton></LinkS>
            <LinkS to="social" smooth={true} duration={500} spy={true} exact="true"><IconButton><DownIcon /></IconButton></LinkS>
            </LinkList>
        </Section>
    )
}


export default NewsSection;