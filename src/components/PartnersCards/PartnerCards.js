import React from "react";
import styled from "styled-components";
import { SectionStyled } from "../Sections/Layouts/InnerLayout";
import MainTitle from "../Sections/Layouts/MainTitle";
import GradientCard from "./GradientCard";
import FortisBack from "../../images/fortisbackground.jpg";
import FortisLogo from "../../images/fortis_logo.png";
import TelosLogo from "../../images/telos_logo.png";
import NftfyLogo from "../../images/nftfy_logo.png";
import AnchorLogo from "../../images/anchor_logo.png";
import WombatLogo from "../../images/wombat_logo.png";
import TstarterLogo from "../../images/tstarter_logo.png";
import TelosBack from "../../images/telos_background.jfif";
import NftfyBack from "../../images/nftfy_background.jfif";
import AnchorBack from "../../images/anchor_background.jfif";
import TstarterBack from "../../images/tstarter_background.png";
import WombatBack from "../../images/wombat_background.jfif";
import AreaXBack from "../../images/areax_background.jpg";
import AreaxLogo from "../../images/areax_logo.jpg";


function PartCards () {
    return (
        <PartCardsStyled>
            <SectionStyled>
                
                <div class="gradient-cards-con">
                   <GradientCard image={FortisBack} logo={FortisLogo} name={"FORTIS"} type={"PARTNER"} desc={" Fortis is a decentralised, open, digital money. This means that everyone can use it and transfer money to anyone they want, without having to worry about arbitrary limitations like borders or censorship’s. You don’t have to trust any person or organization in order to handle our token and platform. You are the person in control."} TelegramLink={"https://t.me/FortisCoin"} WebsiteLink={"http://fortisfinance.io"} TwitterLink={"https://twitter.com/Fortis_Coin?t=A9acSmKjK5uNO3qWbRvtCw&s=09"}/> 
                   <GradientCard image={TelosBack} logo={TelosLogo} name={"TELOS"} type={"BLOCKCHAIN"} desc={"Telos is the ideal network for real world use across multiple industries .Telos based Tokens NFT’s and Smart Contracts are already used for DeFi, Gaming, Social Media amongst a backdrop of almost unlimited real world use cases. There are over 100 projects already building on Telos."} TelegramLink={"https://t.me/HelloTelos"} WebsiteLink={"https://www.telos.net/"} TwitterLink={"https://twitter.com/HelloTelos?t=alSFFeyYG2ieRPaXidx2NQ&s=09"}/> 
                   <GradientCard image={NftfyBack} logo={NftfyLogo} name={"NFTFY"} type={"PARTNER"} desc={"Nftfy is a permissionless Decentralized Application (DApp) that fractionalizes Non-Fungible Tokens, generating ERC20-compliant fractions fully backed by the NFTs. Our protocol was designed to solve the main problems in the NFT ecosystem, including the low liquidity, investment risk, and monetization of assets."} TelegramLink={"https://t.me/nftfySec"} WebsiteLink={"https://nftify.network/"} TwitterLink={"https://twitter.com/nftfyofficial?t=ifNczg4JmXHY4M2LsyiRKg&s=09"}/> 
                   <GradientCard id="anchor" image={AnchorBack} logo={AnchorLogo} name={"ANCHOR"} type={"WALLET"} desc={"Anchor is a security and privacy focused open-source digital wallet for all EOSIO-based networks. Anchor uses modern approaches to ensure the security of your accounts. The use of strong encryption1 , trusted execution environments2 , and integrations with hardware wallets helps keep your private keys as safe as possible."} TelegramLink={"https://t.me/anchorwallet"} WebsiteLink={"https://greymass.com/en/anchor/"} TwitterLink={"https://twitter.com/greymass"}/> 
                   <GradientCard image={TstarterBack} logo={TstarterLogo} name={"T-STARTER"} type={"LAUNCHPAD"} desc={"At T-Starter we have made it our mission not to allow scam projects on the platform. This vetting process can however add friction to the listing process and discourage projects from using our platform. This is why we have now added an option to list through a community vetting process…"} TelegramLink={"https://t.me/tstarterio"} WebsiteLink={"https://tstarter.io/"} TwitterLink={"https://twitter.com/T_StarterToken?t=rkFJNEL-1bj60ll5Ncn0-A&s=09"}/> 
                   <GradientCard image={WombatBack} logo={WombatLogo} name={"WOMBAT"} type={"WALLET"} desc={"With Wombat, you can send, receive, and earn various tokens without any technical knowledge. With only a couple of taps, you can operate over 50 assets across multiple networks. Join Womplay to earn extra tokens on top of what you already make in blockchain games."} TelegramLink={"https://t.me/WombatSupport"} WebsiteLink={"https://getwombat.io/"} TwitterLink={"https://twitter.com/adoptwombat?t=IJPlNy_LWyKPI00XrAnrMQ&s=09"}/>
                   <GradientCard image={AreaXBack} logo={AreaxLogo} name={"AREAX NFT"} type={"PARTNER"} desc={"AreaX NFT is an NFT marketplace based on Marble Standard.Enjoy AreaX NFT and Telos blockchain features"} TelegramLink={"https://t.me/areax_en"} WebsiteLink={"https://sheppard.areaxnft.com/"} TwitterLink={"https://twitter.com/AreaxNft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}/>  
                   <GradientCard image={AreaXBack} logo={AreaxLogo} name={"AREAX NFT"} type={"PARTNER"} desc={"AreaX NFT is an NFT marketplace based on Marble Standard.Enjoy AreaX NFT and Telos blockchain features"} TelegramLink={"https://t.me/areax_en"} WebsiteLink={"https://sheppard.areaxnft.com/"} TwitterLink={"https://twitter.com/AreaxNft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}/>  
                </div>
            </SectionStyled> 
        </PartCardsStyled> 
    )
}

const PartCardsStyled = styled.div`
    background-color: #161F38;
`;

export default PartCards