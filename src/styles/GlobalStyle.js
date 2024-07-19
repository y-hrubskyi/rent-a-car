import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import ManropeRegularWOFF2 from '@/assets/fonts/Manrope-Regular.woff2';
import ManropeMediumWOFF2 from '@/assets/fonts/Manrope-Medium.woff2';
import ManropeSemiBoldWOFF2 from '@/assets/fonts/Manrope-SemiBold.woff2';
import MontserratRegularWOFF2 from '@/assets/fonts/Montserrat-Regular.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Manrope";
    src: local("Manrope"),
      url(${ManropeRegularWOFF2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Manrope";
    src: local("Manrope"),
      url(${ManropeMediumWOFF2}) format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Manrope";
    src: local("Manrope"),
      url(${ManropeSemiBoldWOFF2}) format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat"),
      url(${MontserratRegularWOFF2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Manrope', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a,
  button {
    cursor: pointer;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
  }`;
