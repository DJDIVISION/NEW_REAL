import React, {useState} from "react";
import styled from "styled-components";
import "../../index.css";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from "@material-ui/core";

const BackArrow = styled(ArrowBackIosNewIcon)`
    color: whitesmoke;
    background-color: grey;
    border-radius:50%;
    transform: scale(1.8);
    padding: 5px;
    align-items: center;
    justify-content: center;
    
`;

const ForwardArrow = styled(ArrowForwardIosIcon)`
    color: whitesmoke;
    background-color: grey;
    border-radius:50%;
    transform: scale(1.8);
    padding: 5px;
    align-items: center;
    justify-content: center;
    
`;



function PartnerSlider({slides}) {

    const [position, positionSet] = useState(0);
    const onRight = () => {
        if(position < slides.length - 1) {
            positionSet(position + 1);
        }
    }

    const onLeft = () => {
        if(position > 0) {
            positionSet(position - 1);
        }
    }

    return (
        <div className="slider">
            <div className="buttons">
                <IconButton onClick={onLeft}><BackArrow /></IconButton>
                <IconButton onClick={onRight}><ForwardArrow /></IconButton>
            </div>
            <div className="row">
                {slides.map((slides, index) => (
                    <motion.div className="container" key={index} drag={true}
                        initial= {{ 
                            scale: 0, 
                            rotation: -180,
                        }}
                        animate={{ 
                            rotate: 0, 
                            left: `${(index - position) * 60 - 30}vw`, 
                            scale: index === position ? 1 : 0.9,
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 260, 
                            damping: 20
                        }}
                    >
                        <img src={slides.image}></img>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default PartnerSlider;