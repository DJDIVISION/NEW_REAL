import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const GitHub = styled(GitHubIcon)`
    width: 30px;
    height: 30px;
    color: whitesmoke;
    position: relative;
`;

const Telegram = styled(TelegramIcon)`
    width: 30px;
    height: 30px;
    color: whitesmoke;
`;

const Twitter = styled(TwitterIcon)`
    width: 30px;
    height: 30px;
    color: whitesmoke;
`;

const YouTube = styled(YouTubeIcon)`
    width: 30px;
    height: 30px;
    color: whitesmoke;
`;

const Facebook = styled(FacebookIcon)`
    width: 30px;
    height: 30px;
    color: whitesmoke;
    border-radius: 50%;
`;

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    z-index: 3;

    
`;

const Line = styled.span`
   width: 2px;
   height: 4rem;
   background-color: whitesmoke; 
   display: flex;
    flex-direction: column;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    z-index: 3;
    margin-left: 22px;
`;


const SocialIcons = () => {
    return (
        <Icons>
            <div>
                <NavLink to="#" target="_blank">
                    <IconButton><Telegram /></IconButton>
                </NavLink>
            </div>
            <div>
                <NavLink to="#" target="_blank">
                    <IconButton><Twitter /></IconButton>
                </NavLink>
            </div>
            <div>
                <NavLink to="#" target="_blank">
                    <IconButton><GitHub /></IconButton>
                </NavLink>
            </div>
            <div>
                <NavLink to="#" target="_blank">
                    <IconButton><YouTube /></IconButton>
                </NavLink>
            </div>
            <div>
                <NavLink to="#" target="_blank">
                    <IconButton><Facebook /></IconButton>
                </NavLink>
            </div>

            <Line />
        </Icons>
    )
}

export default SocialIcons
