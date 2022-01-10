import React from 'react'
import styled from "styled-components"
import CanvasContainer from "../../animations/Planet"


const Container = styled.div`
    width: 100%;
    height: 90vh;
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
`;




const TopSection = () => {
    return (
        <Container>
            <ColumnLeft>
                <CanvasContainer />
            </ColumnLeft>
            <ColumnRight />
        </Container>
    )
}

export default TopSection
