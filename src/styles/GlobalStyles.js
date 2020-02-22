import { createGlobalStyle } from "styled-components"
import { Roboto, TTMonoBold } from "../utils/fonts"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  --robotoFont: ${Roboto};
  --tt-mono : ${TTMonoBold}
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
  }

  .heroText {
     font-size: 10.3rem;
     line-height: 12rem;
     font-family: var(--tt-mono);
     font-weight:bold;
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
     font-weight: bold;
     font-size: 3.6rem;
     line-height: 4.8rem;
  }

  .h2 {
     font-family: var(--robotoFont);
     font-size:2.4rem;
     font-weight: bold;
     line-height:3rem;
  }
`

export default GlobalStyle
