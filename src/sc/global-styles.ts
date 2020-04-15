import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
         'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-image: url(${process.env.PUBLIC_URL}/img/dot-background.png);
      background-size: cover;
   }

   code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
   }

   *, * > * {
      box-sizing: border-box;
   }
`
