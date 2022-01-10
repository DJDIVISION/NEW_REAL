import React from 'react'
import styled from "styled-components"
import CanvasContainer from "../../animations/Planet"


const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: grid;

    @media screen and (min-width: 860px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ColumnLeft = styled.div`
    background: white;
`;
const ColumnRight = styled.div`
    background: black;
    display: flex;
    align-items: right;
    justify-content: center;

`;

const Text = styled.h1`
    font-size: 48px;
    color: white;
`;




const TopSection = () => {
    return (
        <Container>
            <ColumnLeft>
                <CanvasContainer />
            </ColumnLeft>
            <ColumnRight>
                
            </ColumnRight>
        </Container>
    )
}

export default TopSection
