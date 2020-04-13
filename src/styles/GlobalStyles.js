import { createGlobalStyle } from "styled-components"
import { Roboto, TTMonoBold, TTMonoReg, TTReg } from "../utils/fonts"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  --robotoFont: ${Roboto};
  --tt-mono : ${TTMonoBold};
  --tt-reg: ${TTReg};
  --tt-monoReg:${TTMonoReg};
  --out: 25vw;
  --negative: -25vw;
  --desktop: 936px;
  --tablet: 600px;
  --outTablet: 50vw;
  --negativeTablet: -50vw;
  --outPhone: 100vw;
  --negativePhone: -100vw;
  --grey: #c6c6c6;
 --lightGrey: #f4f4f4;
 
}
:root {
   font-size: 10px
}

body {
   font-family: var(--robotoFont);
   font-size:1.6rem;
   overflow-x: hidden
}



h1,h2,h3,h4,h5,h6 {
   font-family: var(--tt-mono)
}

 a {
    text-decoration: none;
    color: black;
   
  }

  .heroText {
     font-size: 10.3rem;
     line-height: 12rem;
     font-family: var(--tt-mono);
     font-weight:bold;
     color: white;
     
     @media (max-width: 936px) {
        font-size: 6.4rem;
     }

     @media (max-width: 600px) {
        font-size: 5.8rem;
     }

     span {
        text-decoration:line-through
     }
  }

  .sectionText {
      font-family: var(--robotoFont);
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight:normal;
      line-height: 1.4rem;
      letter-spacing: 0.2rem
  }

  .h1 {
     font-family:var(--tt-mono);
     font-weight: bold;
     font-size: 3.6rem;
     line-height: 4.8rem;

     @media (max-width: 600px){
        font-size: 2.6rem;
     }
  }

  .h2 {
     font-family: var(--robotoFont);
     font-size:2.4rem;
     font-weight: bold;
     line-height:3rem;
  }
`

export default GlobalStyle
