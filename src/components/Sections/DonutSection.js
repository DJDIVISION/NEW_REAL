
import React, {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";
import ChartComponent from "./ChartComponent";
import { Button } from "@material-ui/core";
import { Link as LinkR } from "react-router-dom";
import Rocket from "../../images/BestTokenomicsDivider.png";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.body};

    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`;

const ColumnLeft = styled.div`
    flex-shrink: 0;
    flex-basis: 50%;
    background: ${props => props.theme.horizontalRed};
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1100px){
        
    }

    @media screen and (max-width: 1100px){
        background: ${props => props.theme.verticalRed};
        width: 100vw;
        padding-bottom: 100px;
        
        
    }
`;
const ColumnRight = styled.div`
    background: ${props => props.theme.horizontalRed};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;
    padding: 10px 100px;
    text-align: center;
    @media screen and (max-width: 1100px){
        height: 50vh;
        width: 100vw;
        align-items: center;
        justify-content: center;
        padding: 0px 0px;
        background: ${props => props.theme.verticalRed};
        padding-bottom: 100px;
    }

`;

const Image = styled.img`
    display: flex;
`;

const SectionImage = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 100%;
    }
    @media screen and (min-width: 1000px){
        img{
           width: 50vw;
        }
    }
`;



const StyledButton = styled(LinkR)`
    &&& {
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
        height: 40px;
        width: 150px;
        margin-bottom: 30px;
        text-decoration: none;
        font-size: 18px;
        border-radius: 10px;
        padding: 10px 10px;
    }
`;

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 20px;
`;

const TopLine = styled.p`
    color: ${props => props.theme.text};
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    margin-top: 30px;

    @media screen and (max-width: 1100px){
        font-size: 16px;
        line-height: 1px;
    }
`;

const Heading = styled.h1`
    
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${props => props.theme.text};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    @media screen and (max-width: 1100px){
        font-size: 18px;
        line-height: 1px;
    }
`;

const List = styled.ul`
    max-width: 540px;
    height: 30px;
`;

const ListItems = styled.li`
    color: ${props => props.theme.text};
    display: inline-flex;
    align-items: center;
    margin-top: -50px;
    
    
`;

const Type = styled.h4`
    font-size: 18px;
    margin-right: 10px;
    @media screen and (max-width: 860px){
        font-size: 14px;
    }

`;

const Orange = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: orange;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Blue = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2070C4;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Yellow = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: yellow;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Green = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: green;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Purple = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: purple;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Red = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Pink = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #EB80F1;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;
const Grey = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: grey;
    margin-right: 5px;
    @media screen and (max-width: 860px){
        width: 15px;
        height: 15px;
    }
`;




const DonutSection = () => {

    const data = [
        { value: 40, name: "SALE" },
        { value: 20, name: "LIQUIDITY" },
        { value: 3, name: "ADVISORS" },
        { value: 10, name: "CEX RESERVE" },
        { value: 10, name: "TEAM" },
        { value: 3, name: "GIVEAWAYS" },
        { value: 10, name: "PTEARN" },
        { value: 4, name: "MARKETING" }
      ];



    return(
        <>
            
            <Container id="tokenomics">
                    <ColumnLeft>
                    <SectionImage >
                    <Image src={Rocket} alt="" />
                    </SectionImage>
                    </ColumnLeft>
                    <ColumnRight>
                    <ChartComponent data={data} />
                        <List>
                            <ListItems>
                                <Orange />
                                <Type>SALES</Type>
                            </ListItems>
                            <ListItems>
                                <Blue />
                                <Type>LIQUIDITY</Type>
                            </ListItems>
                            <ListItems>
                                <Yellow />
                                <Type>ADVISORS</Type>
                            </ListItems>
                        </List>
                        <List>
                            <ListItems>
                                <Green />
                                <Type>CEX RESERVE</Type>
                            </ListItems>
                            <ListItems>
                                <Purple />
                                <Type>TEAM</Type>
                            </ListItems>
                            <ListItems>
                                <Red />
                                <Type>GIVEAWAYS</Type>
                            </ListItems>
                        </List>
                        <List>
                            <ListItems>
                                <Pink />
                                <Type>PLAY TO EARN</Type>
                            </ListItems>
                            <ListItems>
                                <Grey />
                                <Type>MARKETING</Type>
                            </ListItems>
                        </List>
                        <TextWrapper>
                            <TopLine>DAIR. total supply:</TopLine>
                            <Heading>1,000,000,000,000</Heading>
                        </TextWrapper>
                        <StyledButton to="/TokenomicsPage">LEARN MORE</StyledButton>
                    </ColumnRight>
                    </Container> 
       
        </>
        
    )
}


export default DonutSection;