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
import { FacebookIcon, YoutubeIcon, TwitterIcon, GithubIcon, TelegramIcon, PlanetIcon, IconQone, IconQtwo, IconQthree }  from '../components/AllSvg';
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



const BigTitle = (props) => {
    return(
        <Text top={props.top} left={props.left} right={props.right}>
            {props.text}
        </Text>
    )
}


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

    return (
        
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
        
            {/* <RoadMapSidebar isOpen={isOpen} toggle={toggle}/>
            <RoadMapNavBar toggle={toggle}/> */}
            
              <Center click={click}>
               <IconQone onClick={scrollToOne} width={click ? 60 : 80} height={click ? 60 : 80} color="white"/>
               <IconQtwo onClick={scrollToTwo} width={click ? 60 : 80} height={click ? 60 : 80} color="white"/>
               <IconQthree onClick={scrollToThree} width={click ? 60 : 80} height={click ? 60 : 80} color="white"/> 
                <span>Start the Journey</span>
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
                <PlanetIcon onClick={toggleHome} width={80} height={80} fill="white"/>
            </Rotate>
            <BigTitle text="2022" top='10%' right='10%' />
            </Box>
        </motion.div>
        
    )
}

export default RoadMap;