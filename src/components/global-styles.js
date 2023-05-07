
import { createGlobalStyle } from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
    :root {
    --primary: #0d6efd;
    --black: #141414;
    --white: #fffffe;
    --grey-10: #f8f9fa;
    --grey-20: #B6B5B0;
    --grey-30: #6C6B67;
    --bs-success: #198754;
    --bs-danger: #dc3545;
    --headline1: 700 1.7rem/2rem Nunito;
    --headline2-bold: 700 1.5rem/1.5rem Nunito;
    --headline2-light: 400 1.4rem/1.5rem Nunito;
    --button: 400 1.25rem/1.5rem Nunito;
    --body-regular: 400 1rem/1.5rem Nunito;
    --body-semi-bold: 700 1rem/1.5rem Nunito;
    --body2-regular: 400 0.875rem/1.5rem Nunito;
    --body2-semi-bold: 600 0.875rem/1.5rem Nunito;
  }
  body {
    background: var(--white);
    color: var(--black);
    font: var(--body-regular);
    margin: 0;
  }

  h1 {
    font: var(--headline1);
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

