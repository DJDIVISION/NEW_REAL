import React from "react";

import {FooterContainer, FooterWrapper, FooterLinksContainer, SocialIconLink, SocialIcons, WebsiteRights, SocialLogo, SocialWrapper, SocialMedia, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,  } from "./Elements";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div id="social">
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About</FooterLinkTitle>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact</FooterLinkTitle>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> BSC</FooterLinkTitle>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> TELOS</FooterLinkTitle>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                                <FooterLink to="">Whitepaper</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> 
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialWrapper>
                        <SocialLogo to="">Destiny Airlines</SocialLogo>
                        <WebsiteRights>Destiny World © {new Date().getFullYear()} All rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                                <TelegramIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Github">
                                <GitHubIcon />
                            </SocialIconLink> 
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <TwitterIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                                <YouTubeIcon />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FacebookIcon />
                            </SocialIconLink>    
                        </SocialIcons>                       
                    </SocialWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
        </div>
    )
}




export default Footer
