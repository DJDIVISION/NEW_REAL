import React, {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Title = styled.h3`
    font-size: 32px;
    color: ${props => props.theme.text};
    text-align: center;
    margin: 25px;

    @media screen and (max-width:860px){
        font-size: 20px;
    }
`;

const ItemTitle = styled.h4`
    font-size: calc(1rem + 0.5vw);
    color: ${props => props.theme.text};
    margin-right: auto;
    margin-left: 40px;
    height: 5px;
    
`;

const Text = styled.h6`
    font-size: 14px;
    margin-left: 20px;
    color: ${props => props.theme.text};

    @media screen and (min-width: 860px){
        font-size: 20px;
    }
`;

const ProgressRedOne = styled.div`
    max-width: 40px;
    height: 5px;
    background: red;
    border-radius: 0 15px 15px 0;  

    @media screen and (min-width: 860px){
        max-width: 60px;
        height: 10px;
    }
    
`;

const ProgressRedTwo = styled.div`
    max-width: 80px;
    height: 5px;
    background: red;
    border-radius: 0 15px 15px 0;  

    @media screen and (min-width: 860px){
        max-width: 120px;
        height: 10px;
    }
    
`;

const ProgressRedFour = styled.div`
    max-width: 160px;
    height: 5px;
    background: red;
    border-radius: 0 15px 15px 0;  

    @media screen and (min-width: 860px){
        max-width: 240px;
        height: 10px;
    }
    
`;

const ProgressRedFive = styled.div`
    max-width: 200px;
    height: 5px;
    background: red;
    border-radius: 0 15px 15px 0;  

    @media screen and (min-width: 860px){
        max-width: 300px;
        height: 10px;
    }
    
`;


const ProgressGreenOne = styled.div`
    max-width: 40px;
    height: 5px;
    background: green;
    border-radius: 0 15px 15px 0;

    @media screen and (min-width: 860px){
        max-width: 60px;
        height: 10px;
    }
`;

const ProgressGreenThree = styled.div`
    max-width: 120px;
    height: 5px;
    background: green;
    border-radius: 0 15px 15px 0;

    @media screen and (min-width: 860px){
        max-width: 180px;
        height: 10px;
    }
`;

const BackDiv = styled.div`
    width: 200px;
    height: 5px;
    background: aqua;
    border-radius: 0 15px 15px 0; 
    border-bottom: 1px solid black;

    @media screen and (min-width: 860px){
        width: 300px;
        height: 10px;
    }
    
`;

const BurnIcon = styled(LocalFireDepartmentIcon)`
    
    color: red;
    margin-right: 15px;
`;

const TeamIcon = styled(GroupsIcon)`
    
    color: orange;
    margin-right: 15px;
`;

const BuyBackIcon = styled(MonetizationOnIcon)`
    
    color: green;
    margin-right: 15px;
`;

const LiquidityIcon = styled(InvertColorsIcon)`
    
    color: blue;
    margin-right: 15px;
`;

const ReflexionsIcon = styled(ScreenShareIcon)`
    
    color: ${props => props.theme.text};
    margin-right: 18px;
`;

const MarketingIcon = styled(AddBusinessIcon)`
    
    color: purple;
    margin-right: 18px;
`;

const ProgressList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;

    @media screen and (min-width: 860px){
        width: 400px;
    }
    
`;



const Container = styled.div`
    color: black;
    background: white;

    
`;

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    background: black;

    @media screen and (max-width: 860px){
        height: 1100px;
    }
`;

const InfoRow = styled.div`
    display: grid;
    grid-auto-columns:minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

const Column1 = styled.div`
   grid-area: col1; 
   @media screen and (min-width: 860px){
        margin-right: 150px;
    }
    
    
`;

const Column2 = styled.div`
    
    grid-area: col2;
    @media screen and (min-width: 860px){
        margin-left: 100px;
    }
    
`;

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

const TopLine = styled.p`
    color: white;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: white;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: white;
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

const BuySellSection = () => {

    const { ref, inView } = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    

    useEffect(() => {
        
       console.log("BUY TAXES = ", inView); 
        if(inView){
          animation.start({
              width: "100%", 
              transition: {
                type: "spring", duration: 6, 
              }
          })
        }
        if (!inView){
          animation.start({
            width: 0,
          })  
        }
    }, [inView]); 



    return(
        <>
          <Container >
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <div>
                    <Title>BUY TAXES ( 10% )</Title>
                    </div>
                    <ItemTitle>BURNING</ItemTitle>
                        <ProgressList>
                            <BurnIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressGreenOne />
                                </motion.div>
                            </BackDiv>
                            <Text>1%</Text>
                        </ProgressList>
                        <ItemTitle>TEAM</ItemTitle>
                        <ProgressList>
                            <TeamIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressGreenOne />
                                </motion.div>
                            </BackDiv>
                            <Text>1%</Text>
                        </ProgressList>
                        <ItemTitle>BUYBACK</ItemTitle>
                        <ProgressList>
                            <BuyBackIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressGreenOne />
                                </motion.div>
                            </BackDiv>
                            <Text>1%</Text>
                        </ProgressList>
                        <ItemTitle>LIQUIDITY</ItemTitle>
                        <ProgressList>
                            <LiquidityIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressGreenOne />
                                </motion.div>
                            </BackDiv>
                            <Text>1%</Text>
                        </ProgressList>
                        <ItemTitle>BNB REFLECTIONS</ItemTitle>
                        <ProgressList>
                            <ReflexionsIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressGreenThree />
                                </motion.div>
                            </BackDiv>
                            <Text>3%</Text>
                        </ProgressList>
                        <ItemTitle>MARKETING</ItemTitle>
                        <ProgressList>
                            <MarketingIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressGreenThree />
                                </motion.div>
                            </BackDiv>
                            <Text>3%</Text>
                        </ProgressList>
                    </Column1>
                    <Column2>
                    <div>
                    <Title >SELL TAXES ( 15% )</Title>
                    </div>
                    <ItemTitle>BURNING</ItemTitle>
                        <ProgressList>
                            <BurnIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressRedOne />
                                </motion.div>
                            </BackDiv>
                            <Text>1%</Text>
                        </ProgressList>
                        <ItemTitle>TEAM</ItemTitle>
                        <ProgressList>
                            <TeamIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressRedOne />
                                </motion.div>
                            </BackDiv>
                            <Text>1%</Text>
                        </ProgressList>
                        <ItemTitle>BUYBACK</ItemTitle>
                        <ProgressList>
                            <BuyBackIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressRedTwo />
                                </motion.div>
                            </BackDiv>
                            <Text>2%</Text>
                        </ProgressList>
                        <ItemTitle>LIQUIDITY</ItemTitle>
                        <ProgressList>
                            <LiquidityIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressRedTwo />
                                </motion.div>
                            </BackDiv>
                            <Text>2%</Text>
                        </ProgressList>
                        <ItemTitle>BNB REFLECTIONS</ItemTitle>
                        <ProgressList>
                            <ReflexionsIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressRedFour />
                                </motion.div>
                            </BackDiv>
                            <Text>4%</Text>
                        </ProgressList>
                        <ItemTitle>MARKETING</ItemTitle>
                        <ProgressList>
                            <MarketingIcon />
                            <BackDiv ref={ref}>
                                <motion.div animate={animation}>
                                <ProgressRedFive />
                                </motion.div>
                            </BackDiv>
                            <Text>5%</Text>
                        </ProgressList>
                    </Column2>    
                </InfoRow>    
            </InfoWrapper>      
        </Container>  
        </>
        
    )
}


export default BuySellSection;