
import { createGlobalStyle } from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
    :root {
    --primary: #0d6efd;
    --black: #141414;
    --white: #fffeee;
    --grey-10: #F7F6EB;
    --grey-20: #B6B5B0;
    --grey-30: #6C6B67;
    --bs-success: #198754;
    --bs-danger: #dc3545;
    --headline1: 600 1.625rem/2rem Inter;
    --headline2-bold: 600 1.5rem/1.5rem Inter;
    --headline2-light: 300 1.5rem/1.5rem Inter;
    --button: 400 1.25rem/1.5rem Inter;
    --body-regular: 400 1rem/1.5rem Inter;
    --body-semi-bold: 700 1rem/1.5rem Inter;
    --body2-regular: 400 0.875rem/1.5rem Inter;
    --body2-semi-bold: 600 0.875rem/1.5rem Inter;
  }
  body {
    background: var(--white);
    color: var(--black);
    font: var(--body-regular);
    margin: 0;
  }

  /* @media screen and (prefers-color-scheme: light) {
    :root {
      --primary: #57a6ff;
      --buttonBG: #c5ced1;
      --white: #000002; 
      --bg: #fffffe; 
      --grey: #8b949e;
      --grey-1: #8b949e;
    }
  } */
`

export default GlobalStylesStyled

