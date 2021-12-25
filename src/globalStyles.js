import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
   *,*::before,*::after,h1,h2,h3,h4,h5,h6 {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       list-style:none;
   } 
   h1,h2,h3,h4,h5,h6{
       display: inline-block;
   }

   body{
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       font-family: 'Julius Sans One', sans-serif; 
   }

   .title-con{
       text-align: center;
       font-size:40px;
   }

   .gradient-cards-con{
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
       
       
       
   }
`;

export default GlobalStyle;