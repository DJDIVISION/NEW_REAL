import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CrossIcon, TickIcon }  from '../AllSvg';
import { motion } from "framer-motion";

const Box = styled(motion.li)`
    width: 20rem;
    height: 70vh;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    
    padding: 20px 40px;
    margin-right: 8rem;
    border-radius:0 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid ${props => props.theme.text};
    transition: all 0.1s ease;
    margin-top: -50px;
    
    box-shadow: 0 2px 15px 1px whitesmoke;
    z-index: 999;

    &:hover {
       background-color: black;
       color: whitesmoke;
       border: 1px solid gold; 
    }

    @media screen and (min-width: 1100px){
        height: 50vh;
        width: 22rem;
    }
`;

const Title = styled.h2`
    font-size: calc(1.3em + 0.5vw);
    
    font-family: 'Alphacentauri';
    color: ${props => props.theme.text};
    padding-top: 10px;
    text-align: center;
    line-height: 1.4;
    font-size: 26px;
`;

const Description = styled.h2`
    font-size: calc(1.1em + 0.8vw);
    font-weight: bold;
    font-family: 'Saira Extra Condensed', sans-serif;
    line-height: 1.2;
`;

const Tags = styled.div`
    border-top: 2x solid black;
    padding-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    border-top: 2px solid black;
    ${Box}:hover &{
        border-top: 2px solid whitesmoke;
    }
`;

const Tag = styled.span`
margin-right: 1rem;
font-size: calc(1em + 0.3vw);
color: #000080;
font-weight: bold;
font-family: 'Saira Extra Condensed', sans-serif;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Link = styled(NavLink)`
    background-color: black;
    padding-top: 0.5rem;
    color: whitesmoke;
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius:0 0 0 50px;
    font-size: calc(1em + 0.5vw);

    ${Box}:hover &{
        background-color: whitesmoke;
        color: black;
        border: 1px solid gold;
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

    const {id, name, description, tags, demo, github, quarter, iconColor } = props.data;

    return (
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
               <Link to={{pathname: `${demo}`}} target="blank">
                   {quarter}
               </Link>
               <Icon >
                   <CrossIcon width={40} height={40} fill={iconColor}/>
                   <TickIcon width={30} height={30}  />
               </Icon>
           </Footer>
        </Box>
    )
}

export default RoadMapCards
