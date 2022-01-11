import React from 'react';
import styled from "styled-components";
import { InnerLayout } from "./Layouts/InnerLayout";
import  MainTitle  from "./Layouts/MainTitle";
import PartnersCards from "../PartnersCards/PartnerCards.js";
import PartnersCards2 from "../PartnersCards/PartnerCards2.js";
import PartnersCards3 from "../PartnersCards/PartnerCards3.js";


const BodyContent = () => {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={"OUR PARTNERS"} subtitle={"These are some of our trustful partners"}/> 

                <div className="partnerscards">
                    <PartnersCards />
                    <PartnersCards2 />
                    <PartnersCards3 />
                </div>
            </InnerLayout>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.div`
    .partnerscards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;

        @media screen and (max-width: 880px) {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;

        }
    }
`;

export default BodyContent;
