import {useState, useEffect} from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { IconButton } from "@material-ui/core";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Nav = styled.nav`
    background: ${props =>   props.theme.body};
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: ${({ scrollNavDown }) => (scrollNavDown ? "-100px" : "0")};
    position: sticky;
    
    z-index: 500;
    transition: 0.8s all ease;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        padding-right: 10px;
    }
`;

const NavLogo = styled(LinkR)`
   color: gold;
   cursor: pointer;
   display: flex;
   font-size: 1.5rem;
   align-items: center;
   justify-content: center;
   margin-left: 40px;
   font-weight: bold;
   text-decoration: none;
   font-family: 'Alphacentauri';

   @media screen and (max-width: 860px){
       margin-left: 20px;
   }

   &:hover{
       transform: scale(1.05);
       transition: 0.2s all ease;
   }
`;

const SwitchIcon = styled.div`
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
       transform: scale(1.2);
       transition: 0.4s all ease;
   }
`;

export const MobileIcon2 = styled.div`
    display: block;
    position: absolute;
    top: ${({ scrollNavDown }) => (scrollNavDown ? "90px" : "-90px")};
    right: 0;
    transform: translate(-20%, 20%);
    
    cursor: pointer;
    color: gold;

    @media screen and (min-width: 1100px) {
        margin-right: 30px;
        margin-top: 20px;
    }
`;

const ScrollIcon = styled(ArrowCircleUpIcon)`
    color: ${props => props.theme.text};
    transition: 0.8s all ease;
    top: 600px;
    transform: scale(1.4);

    @media screen and (max-width: 1100px){
        transform: scale(1.2);
    }
`; 

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 50px;

    

    @media screen and (max-width: 1100px){
       display: none; 
    }


`;

const NavItem = styled.li`
    height: 80px;
    
    
`;

const NavbarLink = styled(LinkS)`
   color: ${props => props.theme.text};
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   font-weight: bold;
   font-size: 16px;
   font-family: "Julius Sans One";

   &:hover{
       transform: scale(1.1);
       transition: 0.2s ease-out;
       color: gold;
   }
     
   
`;





const NavBar = (props) => {

    function changeTheme() {  
        if(props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    const icon = props.theme === "light" ? <DarkModeIcon /> : <LightModeIcon /> 

    const [scrollNavDown, setScrollNavDown] = useState(false);

    const changeNavDown = () => {
        if(window.scrollY >= 50) {
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

    return(
        <Nav scrollNavDown={scrollNavDown}>
            <NavLogo to="/" >Destiny World</NavLogo>
            <IconButton onClick={changeTheme}><SwitchIcon >
                {icon}
            </SwitchIcon></IconButton>
            <MobileIcon2 scrollNavDown={scrollNavDown}>
                <IconButton onClick={toggleHome}>
                    <ScrollIcon />
                </IconButton>
            </MobileIcon2>
            <NavMenu>
                <NavItem>
                    <NavbarLink to="roadmap" smooth={true} duration={1000} spy={true} exact="true" >RoadMap</NavbarLink>
                </NavItem>
                
                <NavItem>
                    <NavbarLink to="tokenomics" smooth={true} duration={500} spy={true} exact="true">Tokenomics</NavbarLink>
                </NavItem>
                <NavItem>
                    <NavbarLink to="dapps" smooth={true} duration={1000} spy={true} exact="true" >DAPPS</NavbarLink>
                </NavItem>
                <NavItem>
                    <NavbarLink to="team" smooth={true} duration={500} spy={true} exact="true" >Team</NavbarLink>
                </NavItem>
                <NavItem>
                    <NavbarLink to="partners" smooth={true} duration={1500} spy={true} exact="true" >Partners</NavbarLink>
                </NavItem>
            </NavMenu> 
        </Nav>
    );
}

export default NavBar;