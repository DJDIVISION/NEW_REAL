import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import CasinoIcon from '@mui/icons-material/Casino';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BrushIcon from '@mui/icons-material/Brush';
import TwitterIcon from '@mui/icons-material/Twitter';



export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 9999;
    width: calc(100vw - 30%);
    height: 500px;
    justify-content: center;
    background: ${props => props.theme.body};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    //opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    //top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; 
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 0 2px 15px 1px ${props => props.theme.body};
    

    
    @media screen and (max-width: 768px){
        width: calc(100vw - 15%);
        margin-left: 25px;
    }
    
    
`;

export const SidebarWrapper = styled.div``;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 50px);
    text-align: center;
   
    
    padding-left: 1.6rem;
    @media screen and (max-width: 480px) {
       grid-template-rows: repeat(9, 45px);
    }

`;



export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${props => props.theme.text};
    cursor: pointer;
    margin-left: -40px;
    font-weight: bold;
    z-index: 9999;
    
     
    
    
    

    &:hover {
        color: gold;
        transition: 0.2 ease-in-out;
    }

    
`;




 
