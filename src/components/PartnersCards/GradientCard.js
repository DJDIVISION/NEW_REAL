import React from 'react';
import styled from "styled-components";
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';


const Telegram = styled(TelegramIcon)`
    color: #0088cc;
`;

const Twitter = styled(TwitterIcon)`
    color: #0084b4;
`;

const Website = styled(LanguageIcon)`
    color: whitesmoke;
`;


function GradientCard({ image, logo, name, type, desc, ctaButton, TelegramLink, WebsiteLink, TwitterLink}) {
    return (
        <GradientCardStyled>
            <div className="g-card">
                <div className="inner-content">
                    <div className="image">
                        <img src={image} alt="" />
                        <div className="cardname">
                            <img src={logo} alt="" />
                            <p className="cardtext">{name}</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <h6 className="card-name">{type}</h6>
                        <p className="desc">{desc}</p>
                        <div className="footer">
                          <p><IconButton onClick={event => window.open(TelegramLink, "_blank")}><Telegram /></IconButton></p>
                          <p><IconButton onClick={event => window.open(WebsiteLink, "_blank")}><Website /></IconButton></p>
                          <p><IconButton onClick={event => window.open(TwitterLink, "_blank")}><Twitter /></IconButton></p>   
                        </div>
                    </div>
                </div>
            </div>
        </GradientCardStyled>
    )
}

const GradientCardStyled = styled.div`
    border-radius: 20px;
    font-size: 1rem;
    transition: all .4s ease-in-out;
    

    .g-card{
        margin: 2rem;
        .inner-content{
           background-color: #091026;
           padding: .8rem;
           border-radius: 20px;
           box-shadow: 0 2px 15px 1px whitesmoke;
           border: 1px solid darkblue;
           transition: all .4s ease-in-out;
           
           &:hover{
               transform: scale(1.05);
               box-shadow: 0 2px 15px 1px gold;
           }
           .image{
               width: 100%;
               position: relative;
               img:first-child{
                  width: 100%;
                  object-fit: fill;
                  height: 200px;
                  border-radius: 10px;
                  border: 1px solid darkgoldenrod;
                  
               }

               .cardname{
                   position: absolute;
                   left: 50%;
                   bottom: -26px;
                   background-color: #03091f;
                   display: flex;
                   align-items: center;
                   transform: translateX(-50%);
                   width: 75%;
                   padding: .5rem .5rem;
                   border: 1px solid darkgoldenrod;
                   color: whitesmoke;
                   text-align: center;
                   font-size: 24px;
                   border-radius: 50px;

                   
                   
                   
                   
                   
                   img{
                       width: 50px;
                       height: 50px;
                       border-radius: 50%;
                       object-fit: contain;
                       margin-right: 2rem;
                   }

                   .cardtext{
                       
                       font-size: 22px;

                       @media screen and (max-width:880px) {
                            font-size: 18px;
                            margin-left: -10px;
                       }
                   }
               }
           }

           .card-content{
               margin-top:60px;

               .card-name{
                color: whitesmoke;
                text-align: center;
                font-size: 48px;

                @media screen and (max-width: 860px) {
                       font-size: 18px;
                   }
               }

               .desc{
                   color: whitesmoke;
                   padding: 5px 15px;
                   text-align: justify;
                   line-height: 1.3;
                   margin-bottom: 20px;
                   margin-top: 10px;
               }

               .footer{
                   display: flex;
                   justify-content: space-between;
                   padding: 15px;
                   border-top: 1px solid lightgoldenrodyellow;
               }
           }
        }
    }
`;

export default GradientCard
