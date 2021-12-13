import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: ${({ scrollNavDown }) => (scrollNavDown ? "-50px" : "0")};
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    
`;
 
export const NavLogo = styled(LinkR)`
   color: gold;
   
   color: gold;
   justify-self: flex-start;
   cursor: pointer;
   display: flex;
   font-size: 1.5rem;
   align-items: center;
   margin-left: 12px;
   font-weight: bold;
   text-decoration: none;
`;

export const Logo = styled(LinkS)`
    width: 80px;
    
    

`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 80%);
        font-size: 1.8rem;
        cursor: pointer;
        color: whitesmoke;
    }
`;

export const MobileIcon2 = styled.div`
    display: block;
    position: absolute;
    top: ${({ scrollNavDown }) => (scrollNavDown ? "50px" : "-80px")};
    right: 0;
    transform: translate(-20%, 20%);
    
    cursor: pointer;
    color: gold;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    

    @media screen and (max-width: 760px){
       display: none; 
    }


`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavbarLink = styled(LinkS)`
   color: gold;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;

   &.active {
       
       
   }
`;