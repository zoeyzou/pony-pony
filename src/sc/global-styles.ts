import { createGlobalStyle } from 'styled-components'

import dotBackground from 'assets/img/dot-background.png'

export const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      font-family: ${({ theme }) => theme.fonts.body};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-image: url(${dotBackground});
      background-size: cover;
   }

   code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
   }

   *, * > * {
      box-sizing: border-box;
   }
`
