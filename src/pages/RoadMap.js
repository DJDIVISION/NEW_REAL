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
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const HomeIcon = styled(DoubleArrowIcon)`
    color: white;
    transform: rotate(180deg) scale(2);
    position: absolute;
    margin-left: 15px;
    margin-top: 72vh;
    
`;

const HomeText = styled.h2`
    color: white;
    position: absolute;
    margin-left: 50px;
    margin-top: 72vh;
`;


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
    max-width: 100vw;
    height: 1600vh;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 860px){
        height: 1600vh;
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
    position: relative;
    background: black;
    width: 100vw;
    padding: 20px;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    color: grey;
    font-size: calc(4rem + 3vw);
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
        scroll.scrollMore(3800);
    }
    
    function scrollToThree () {
        scroll.scrollMore(7050);
    }

    const TextJourney = styled.h2`
        color: aqua;
    `;

    return (
        
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
        
            
               <Text>2022</Text>
               
              <Center click={click}>
                
              <Circle>
                <svg width="150" height="150" onClick={scrollToOne}>
                    <circle className="progress-infinite" cx="75" cy="75" r="40" fill="transparent" stroke="aqua" strokeWidth="4px"/>
                    <motion.text  initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 4}} fill="aqua" x="55" y="85" text-anchor="middle" alignment-baseline="middle" fontSize="22px">1QT</motion.text>
                </svg>
                <svg width="150" height="150" onClick={scrollToTwo}>
                    <circle className="progress-infinite" cx="75" cy="75" r="40" fill="transparent" stroke="aqua" strokeWidth="4px"/>
                    <motion.text  initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 4.5}} fill="aqua" x="55" y="85" text-anchor="middle" alignment-baseline="middle" fontSize="22px">2QT</motion.text>
                </svg>
                <svg width="150" height="150" onClick={scrollToThree}>
                    <circle className="progress-infinite" cx="75" cy="75" r="40" fill="transparent" stroke="aqua" strokeWidth="4px"/>
                    <motion.text  initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 5}} fill="aqua" x="55" y="85" text-anchor="middle" alignment-baseline="middle" fontSize="22px">3QT</motion.text>
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
                <DairSVG  onClick={toggleHome} width={110} height={110} x={10} fill="white"/>
            </Rotate>
            <NavLink to="/HomeNoLoader"><HomeIcon /></NavLink><HomeText>HOME</HomeText>
            
            </Box>
            <TextJourney className="text2">CHOOSE DESTINATION</TextJourney>
        </motion.div>
        
    )
}

export default RoadMap;