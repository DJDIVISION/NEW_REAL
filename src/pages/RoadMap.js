import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import { themes } from "../components/Themes";
import styled, { keyframes } from "styled-components";
import RoadMapSidebar from "../components/Sidebar/RoadMapSidebar";
import RoadMapNavBar from "../components/NavBar/RoadMapNavBar";
import RoadMapCards from "../components/RoadMapCards";
import { motion } from "framer-motion";
import { animationThree } from "../animations";
import { NavLink } from "react-router-dom";
import { FacebookIcon, YoutubeIcon, TwitterIcon, GithubIcon, TelegramIcon, DairSVG }  from '../components/AllSvg';
import { RoadData } from "../components/data/RoadMapData" ;
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";





const move = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.8s ease;
    z-index: 10;

    

    @media screen and (max-width: 768px) {
        top: ${props => props.click ? '92%' : '50%'};
        left: ${props => props.click ? '-50%' : '50%'};
        margin-bottom: 10px;
    }

    &>:first-child {
        //animation: ${move} infinite 4s linear;
        margin-top: 90px;
        
    }

    &>:nth-of-type(2){
        margin-bottom: 30px;
        margin-top: 30px;
    }

    

     &>:last-child{
         display: ${props => props.click ? 'none' : 'inline-block'};
         padding-top: 2rem;
         color: whitesmoke;
         font-size: 22px;
     }
`;


const Box = styled.div`
    background-color: black;
    
    height: 1600vh;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 860px){
        height: 1800vh;
    }
`;

const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;
`;



const Main = styled.ul`
    position: fixed;
    top: 10rem;
    left: calc(30rem + 25vw);
    height: 30vh;
    color: whitesmoke;
    display: flex;

    @media screen and (min-width: 1100px){
        left: calc(80rem + 25vw); 
    }

`;

const Text = styled.h1`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    color: grey;
    font-size: calc(5rem + 5vw);
    z-index:0;
`;

const Circle = styled.div`
    width: 100vw;
    height: 60vh;
    
`;

const RoadMap = (props) => {

    const ref = useRef(null);

    const planet = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`

            planet.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)'
        }

        window.addEventListener('scroll', rotate)

        return () => window.removeEventListener('scroll', rotate)


    }, [])


    const [isOpen, setIsOpen] = useState(false);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    function scrollToOne () {
        scroll.scrollMore(535);
    }
    
    function scrollToTwo () {
        scroll.scrollMore(4150);
    }
    
    function scrollToThree () {
        scroll.scrollMore(7730);
    }

    const TextJourney = styled.h2`
        color: aqua;
    `;

    return (
        
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
        
            {/* <RoadMapSidebar isOpen={isOpen} toggle={toggle}/>
            <RoadMapNavBar toggle={toggle}/> */}
               
              <Center click={click}>
              <Circle>
                <svg width="150" height="150" onClick={scrollToOne}>
                    <circle className="progress-infinite" cx="75" cy="75" r="40" fill="transparent" stroke="aqua" strokeWidth="4px"/>
                    <motion.text  initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 4}} fill="aqua" x="55" y="85" text-anchor="middle" alignment-baseline="middle" fontSize="28px">1Q</motion.text>
                </svg>
                <svg width="150" height="150" onClick={scrollToTwo}>
                    <circle className="progress-infinite" cx="75" cy="75" r="40" fill="transparent" stroke="aqua" strokeWidth="4px"/>
                    <motion.text  initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 4}} fill="aqua" x="55" y="85" text-anchor="middle" alignment-baseline="middle" fontSize="28px">2Q</motion.text>
                </svg>
                <svg width="150" height="150" onClick={scrollToThree}>
                    <circle className="progress-infinite" cx="75" cy="75" r="40" fill="transparent" stroke="aqua" strokeWidth="4px"/>
                    <motion.text  initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 4}} fill="aqua" x="55" y="85" text-anchor="middle" alignment-baseline="middle" fontSize="28px">3Q</motion.text>
                </svg>
            </Circle>
               {/* <IconQone onClick={scrollToOne} width={click ? 60 : 80} height={click ? 60 : 80} color="white"/>
               <IconQtwo onClick={scrollToTwo} width={click ? 60 : 80} height={click ? 60 : 80} color="white"/>
               <IconQthree onClick={scrollToThree} width={click ? 60 : 80} height={click ? 60 : 80} color="white"/>  */}
                
            </Center>  
            <Box>
            
            
            <Main ref={ref}>
                {
                    RoadData.map( d => 
                    <RoadMapCards key={d.id} data={d} />      
                    )
                }
            </Main>
            <Rotate ref={planet}>
                <DairSVG  onClick={toggleHome} width={80} height={80} fill="white"/>
            </Rotate>
            
            </Box>
        </motion.div>
        
    )
}

export default RoadMap;