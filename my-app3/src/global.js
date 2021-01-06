import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Poppins;
    }

    body {
      -webkit-font-smoothing: antialiased !important;
    }

    body html #root {
      height: 100%100vh;
    }
`