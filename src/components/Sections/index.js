import React from 'react';
import { Button } from "@material-ui/core";
import { Section, Container } from "./Elements";






const InfoSectionButton = ({ image, title, desc, buttonText }) => {
    return (
       <Section image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{desc}</p>
                <Button>{buttonText}</Button>
            </Container>
       </Section>
           
    );
}

export default InfoSectionButton;
