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
   overflow-x: hidden
}



h1,h2,h3,h4,h5,h6 {
   font-family: var(--tt-mono)
}

 a {
    text-decoration: none;
  }
`

export default GlobalStyle
