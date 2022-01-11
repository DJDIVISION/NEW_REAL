import React from 'react'
import styled from "styled-components"

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
`;

const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    
    line-height: 1.5;
`;

const Topic = styled.div``;
const Circle = styled.span``;
const Title = styled.h1``;
const SubText = styled.h5``;
const CTA = styled.button``;



const TempSection = () => {
    return (
        <Section>
            <LeftBlock>
                <Topic>
                    <Circle>DAIR</Circle>
                </Topic>
                <Title>WE TAKE YOU</Title>
                <SubText>
                {" "}    
                TO OUTER SPACE
                </SubText>
                <CTA>LEARN MORE</CTA>
            </LeftBlock>
             
        </Section>
    )
}

export default TempSection
