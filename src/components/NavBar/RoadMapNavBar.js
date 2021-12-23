import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Nav, NavBarContainer, NavLogo, MobileIcon, MobileIcon2 } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@material-ui/core";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { animateScroll as scroll } from "react-scroll";



const SmartIcon = styled(MenuIcon)`
     color: gold;
`;

const ScrollIcon = styled(ArrowCircleLeftIcon)`
    color: gold;
    z-index: 999;

    top: 600px;
`;


const RoadMapNavBar = ({ toggle }) => {

    const [scrollNavDown, setScrollNavDown] = useState(false);

    const changeNavDown = () => {
        if(window.scrollY >= 120) {
            setScrollNavDown(true)
        } 
        else {
            setScrollNavDown(false)
        }
    }

    useEffect(() => {
       window.addEventListener('scroll', changeNavDown) 
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    

    return (
        <>
            <Nav scrollNavDown={scrollNavDown}>
                <NavBarContainer >
                    <NavLogo to="/" >Destiny Airlines</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <SmartIcon />
                    </MobileIcon>
                    <MobileIcon2 scrollNavDown={scrollNavDown}>
                        <IconButton onClick={toggleHome}>
                            <ScrollIcon />
                        </IconButton>
                    </MobileIcon2> 
                </NavBarContainer>
            </Nav>
        </>
    );
};


export default RoadMapNavBar;