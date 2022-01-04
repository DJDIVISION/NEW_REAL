import React, { useEffect } from "react";

import styled from "styled-components";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { IconButton } from "@material-ui/core";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';





const BurnIcon = styled(LocalFireDepartmentIcon)`
    transform: scale(1.1);
    color: red;
    margin-right: 15px;
`;

const TeamIcon = styled(GroupsIcon)`
    transform: scale(1.1);
    color: orange;
    margin-right: 15px;
`;

const BuyBackIcon = styled(MonetizationOnIcon)`
    transform: scale(1.1);
    color: green;
    margin-right: 15px;
`;

const LiquidityIcon = styled(InvertColorsIcon)`
    transform: scale(1.1);
    color: blue;
    margin-right: 15px;
`;

const ReflexionsIcon = styled(ScreenShareIcon)`
    transform: scale(1.1);
    color: ${props => props.theme.text};
    margin-right: 18px;
`;

const MarketingIcon = styled(AddBusinessIcon)`
    transform: scale(1.1);
    color: purple;
    margin-right: 18px;
`;


const DownIcon = styled(KeyboardDoubleArrowDownIcon)`
    color: ${props => props.theme.text};
    margin-top: 20px;
    transform: scale(2);
`;

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

`;

const Title = styled.h3`
    font-size: 32px;
    color: ${props => props.theme.text};
    text-align: center;
    margin: 25px;

    @media screen and (max-width:860px){
        font-size: 20px;
    }
`;

const BackDiv = styled.div`
    width: 200px;
    height: 10px;
    background: aqua;
    border-radius: 0 15px 15px 0; 
    border-bottom: 1px solid black;
    
`;



const ProgressList = styled.ul`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    
`;

const ProgressRedOne = styled.div`
    max-width: 40px;
    height: 10px;
    background: red;
    border-radius: 0 15px 15px 0;  
    
`;

const ProgressRedTwo = styled.div`
    max-width: 80px;
    height: 10px;
    background: red;
    border-radius: 0 15px 15px 0;  
    
`;

const ProgressRedFour = styled.div`
    max-width: 160px;
    height: 10px;
    background: red;
    border-radius: 0 15px 15px 0;  
    
`;

const ProgressRedFive = styled.div`
    max-width: 200px;
    height: 10px;
    background: red;
    border-radius: 0 15px 15px 0;  
    
`;

const ProgressGreenOne = styled.div`
    
    max-width: 40px;
    height: 10px;
    background: green;
    border-radius: 0 15px 15px 0;
      
    
`;

const ProgressGreenThree = styled.div`
    
    max-width: 120px;
    height: 10px;
    background: green;
    border-radius: 0 15px 15px 0;
     
    
`;

const Text = styled.h6`
    font-size: 14px;
    margin-left: 20px;
    color: ${props => props.theme.text};

`;









const Tokenomics2 = () => {

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

    

    return (
        <Background  id="tokenomics2">
            <motion.div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Title>BUY TAXES ( 10% )</Title>
            <ProgressList>
                <BurnIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressGreenOne />
                    </motion.div>
                </BackDiv>
                <Text>1%</Text>
            </ProgressList>
            <ProgressList>
                <TeamIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressGreenOne />
                    </motion.div>
                </BackDiv>
                <Text>1%</Text>
            </ProgressList>
            <ProgressList>
                <BuyBackIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressGreenOne />
                    </motion.div>
                </BackDiv>
                <Text>1%</Text>
            </ProgressList>
            <ProgressList>
                <LiquidityIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressGreenOne />
                    </motion.div>
                </BackDiv>
                <Text>1%</Text>
            </ProgressList>
            <ProgressList>
                <ReflexionsIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressGreenThree />
                    </motion.div>
                </BackDiv>
                <Text>3%</Text>
            </ProgressList>
            <ProgressList>
                <MarketingIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressGreenThree />
                    </motion.div>
                </BackDiv>
                <Text>3%</Text>
            </ProgressList>
            <Title >SELL TAXES ( 15% )</Title>
            <ProgressList>
                <BurnIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressRedOne />
                    </motion.div>
                </BackDiv>
                <Text>1%</Text>
            </ProgressList>
            <ProgressList>
                <TeamIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressRedOne />
                    </motion.div>
                </BackDiv>
                <Text>1%</Text>
            </ProgressList>
            <ProgressList>
                <BuyBackIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressRedTwo />
                    </motion.div>
                </BackDiv>
                <Text>2%</Text>
            </ProgressList>
            <ProgressList>
                <LiquidityIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressRedTwo />
                    </motion.div>
                </BackDiv>
                <Text>2%</Text>
            </ProgressList>
            <ProgressList>
                <ReflexionsIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressRedFour />
                    </motion.div>
                </BackDiv>
                <Text>4%</Text>
            </ProgressList>
            <ProgressList>
                <MarketingIcon />
                <BackDiv ref={ref}>
                    <motion.div animate={animation}>
                    <ProgressRedFive />
                    </motion.div>
                </BackDiv>
                <Text>5%</Text>
            </ProgressList>
    <IconButton><DownIcon /></IconButton>
    </motion.div>
    </Background>
    )
}

export default Tokenomics2;
