import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
    background: ${props =>   props.theme.body};
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: sticky;
    top: ${({ scrollNavDown }) => (scrollNavDown ? "-100px" : "0")};
    z-index: 500;
    transition: 0.8s all ease;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        padding-right: 10px;
    }
`;



 
export const NavLogo = styled(LinkR)`
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

export const Logo = styled(LinkS)`
    width: 80px;

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

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 50px;

    

    @media screen and (max-width: 1100px){
       display: none; 
    }


`;

export const NavItem = styled.li`
    height: 80px;
    
    
`;

export const NavbarLink = styled(LinkS)`
   color: ${props => props.theme.text};
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   font-weight: bold;
   font-size: 16px;

   &:hover{
       transform: scale(1.1);
       transition: 0.2s ease-out;
       color: gold;
   }
     
   
`;