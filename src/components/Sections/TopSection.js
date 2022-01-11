import React from 'react'
import styled from "styled-components"
import CanvasContainer from "../../animations/Planet"


const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;

const ColumnLeft = styled.div`
    flex-shrink: 0;
    flex-basis: 50%;
    background: ${props => props.theme.body};
    background: red;
    width: 50%;
    height: 700px;
    @media screen and (max-width: 900px){
        width: 100%;
    }
`;
const ColumnRight = styled.div`
    background: ${props => props.theme.body};
    width: 50%;
    height: 700px;
    @media screen and (max-width: 900px){
        width: 100%;
        margin-top: -300px;
    }

`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20vw;
    margin-top: 30vh;
    @media screen and (max-width: 860px){
        margin-top: 20vh;
    } 
`;

const Title = styled.h1`
    font-size: 74px;
    color: ${props => props.theme.text};
    text-align: right;
    font-family:  "Alphacentauri";
    z-index: 100;
    @media screen and (max-width: 860px){
        font-size: 52px;
        margin-left: 10px;
    }

    
`;

const TopLine = styled.h1`
    font-size: 28px;
    color: ${props => props.theme.text};
    text-align: right;
    margin-top: 15px;
    margin-bottom: 10px;
    @media screen and (max-width: 860px){
        text-align: center;
        margin-left: 22vw;
    }
`;
const Subtitle = styled.h3`
    font-size: 48px;
    color: ${props => props.theme.text};
    text-align: right;
    @media screen and (max-width: 860px){
        text-align: center;
        margin-left: 22vw;
        font-size: 38px;
    }
`;



const TopSection = () => {
    return (
        <Container>
            <ColumnLeft>
                <CanvasContainer /> 
            </ColumnLeft>
            <ColumnRight>
                <TextWrapper>
                    <Title>DESTINY</Title>
                    <Title>AIRLINES</Title>
                    <TopLine>WE TAKE YOU</TopLine>
                    <Subtitle>TO OUTER SPACE</Subtitle>
                </TextWrapper>
            </ColumnRight>
        </Container>
    )
}

export default TopSection
