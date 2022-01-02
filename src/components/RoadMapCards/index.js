import React,{useState} from 'react'
import { themes } from "../Themes";
import { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CrossIcon, TickIcon }  from '../AllSvg';
import { motion } from "framer-motion";




const Box = styled(motion.li)`
    min-width: 280px;
    min-height: 65vh;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.15);

    padding: 20px 40px;
    margin-right: 8rem;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid ${props => props.theme.text};
    transition: all 0.1s ease;
    margin-top: -50px;
    
    box-shadow: 0 2px 15px 1px whitesmoke;
    z-index: 999;

    &:hover {
       filter: brightness(1.2);
    }

    @media screen and (min-width: 1100px){
        height: 50vh;
        width: 16rem;
    }
`;

const Title = styled.h2`
    font-size: calc(1.4em + 0.4vw);
    color: ${props => props.theme.text};
    font-family: 'Julius Sans One';
    color: ${props => props.theme.text};
    padding-top: 5px;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 10px;
    border-bottom: 2px solid #d3d3d3;
    padding-bottom: 20px;
`;

const Description = styled.h2`
    font-size: calc(1em + 0.4vw);
    font-weight: 100;
    font-family: "Comfortaa";
    line-height: 1.3;
    text-align: center;
    padding-bottom: 5px;
`;

const Tags = styled.div`
    border-top: 2px solid #d3d3d3;
    
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    ${Box}:hover &{
        
    }
`;

const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.8em + 0.3vw);
color: aqua;
font-family: 'Julius', sans-serif;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TimeStamp = styled.div`
    background-color: ${props => props.theme.body};
    padding-top: 0.5rem;
    font-weight: bold;
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    display: flex;
    margin: auto;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.text};
    font-size: calc(1em + 0.5vw);

    ${Box}:hover &{
        
    }
`; 

const Icon = styled.div`
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;



const RoadMapCards = (props) => {

    const [theme, setTheme] = useState("dark");

    const {id, name, description, tags, demo, github, quarter, iconColor } = props.data;

    return (
        <ThemeProvider theme={themes[theme]}>
        <Box id={id}>
           <Title>{name}</Title>
           <Description>{description}</Description>
           <Tags>
               {
                   tags.map((t,id) => {
                       return <Tag key={id}>#{t}</Tag>
                   })
               }
           </Tags>
           <Footer>
               <TimeStamp>
                   {quarter}
               </TimeStamp>
               
           </Footer>
        </Box>
        </ThemeProvider>
    )
}

export default RoadMapCards
