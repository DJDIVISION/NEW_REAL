import styled from "styled-components";



export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 880px;
    position: relative;
    z-index: 1;
    margin-top: -40px;

    :before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /* background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%); */
        z-index: 2;

    }
`;

export const HeroBack = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
`;

export const VideoBack = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width:1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const HeroH1 = styled.h1`
    color: transparent;
    text-shadow: -1px 1px 0 whitesmoke,
                          1px 1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
    font-size: 48px;
    text-align: center;
    backdrop-filter: blur(5px);
    margin: 2rem;
    padding: 20px 15px;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: transparent;
    text-shadow: -1px 1px 0 whitesmoke,
                          1px 1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
    line-height: 1.3;
    font-size: 24px;
    backdrop-filter: blur(5px);
    margin: 1rem;
    padding: 15px 10px;
    text-align: center;
    max-width: 600px;
    

    @media screen and (max-width: 760px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const h1 = styled.h1`
    font-size: 14px;
`;