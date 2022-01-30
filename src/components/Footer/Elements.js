import styled from "styled-components";
import {Link} from "react-router-dom";


export const FooterContainer = styled.footer`
    background-color: ${props => props.theme.body};
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    height: 420px;

    @media screen and (max-width: 1100px){
        height: 550px;
    }

`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width:820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width:820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: whitesmoke;

    @media screen and (max-width:420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    color: ${props => props.theme.text};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    margin-bottom: 16px;
    
`;

export const FooterLink = styled(Link)`
    color: ${props => props.theme.text};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: gold;
        transition: 0.3x ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1100px;
    width: 100%;
`;

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: ${props => props.theme.text};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size:1.5rem;
    display: flex;
    align-items: center
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: ${props => props.theme.text};
    margin-bottom: 26px;
    margin-top: 10px;

`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: ${props => props.theme.text};
    font-size: 24px;
`;

