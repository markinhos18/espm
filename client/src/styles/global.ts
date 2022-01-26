import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

      
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('../fonts/poppins-v15-latin-300.eot'); /* IE9 Compat Modes */
      src: local(''),
          
          url('../fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
          
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url('../fonts/poppins-v15-latin-600.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('../fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
          
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url('../fonts/poppins-v15-latin-800.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('../fonts/poppins-v15-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
          
    }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
