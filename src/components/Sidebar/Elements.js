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
    z-index: 999;
    width: 100%;
    height: 600px;
    
    background: black;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};  
    
    
`;

export const SidebarContainerTeam = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 600px;
    
    background: black;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isTeamOpen }) => (isTeamOpen ? "100%" : "0")};
    top: ${({ isTeamOpen }) => (isTeamOpen ? "0" : "-100%")};  
    
    
`;

export const CloseIcon = styled(HighlightOffIcon)`
    color: whitesmoke;
`;



/* export const NewsIcon = styled(NewspaperIcon)`
    margin-right: 10px;

`;

export const TeamIcon = styled(PeopleIcon)`
    margin-right: 10px;
`;

export const GamingIcon = styled(CasinoIcon)`
    margin-right: 10px;
`;

export const PartnersIcon = styled(SupervisedUserCircleIcon)`
    margin-right: 10px;
`;

export const NftIcon = styled(BrushIcon)`
    margin-right: 10px;
`;

export const SocialIcon = styled(TwitterIcon)`
    margin-right: 10px;
`;

export const Logo1 = styled.img`
    width: 30px;
    margin-right: 15px;

`;  */


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: whitesmoke;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 60px);
    text-align: center;
    
    
    padding-left: 1.6rem;
    @media screen and (max-width: 480px) {
       grid-template-rows: repeat(9, 50px);
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
    color: whitesmoke;
    cursor: pointer;
    margin-left: -40px;
    

    &:hover {
        color: gold;
        transition: 0.2 ease-in-out;
    }

    
`;



export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: blue;
    white-space: nowrap;
    padding: 16px 64px;
    color: green;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0,2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: whitesmoke;
        color: blue;
    }
`; 
 
