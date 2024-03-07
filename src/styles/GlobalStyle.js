import { createGlobalStyle } from "styled-components";
import "modern-normalize";

import ManropeRegularWOFF2 from "@/assets/fonts/Manrope-Regular.woff2";
import ManropeRegularWOFF from "@/assets/fonts/Manrope-Regular.woff";
import ManropeMediumWOFF2 from "@/assets/fonts/Manrope-Medium.woff2";
import ManropeMediumWOFF from "@/assets/fonts/Manrope-Medium.woff";
import ManropeSemiBoldWOFF2 from "@/assets/fonts/Manrope-SemiBold.woff2";
import ManropeSemiBoldWOFF from "@/assets/fonts/Manrope-SemiBold.woff";
import MontserratRegularWOFF2 from "@/assets/fonts/Montserrat-Regular.woff2";
import MontserratRegularWOFF from "@/assets/fonts/Montserrat-Regular.woff";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Manrope";
    src: local("Manrope"),
      url(${ManropeRegularWOFF2}) format("woff2"),
      url(${ManropeRegularWOFF}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Manrope";
    src: local("Manrope"),
      url(${ManropeMediumWOFF2}) format("woff2"),
      url(${ManropeMediumWOFF}) format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Manrope";
    src: local("Manrope"),
      url(${ManropeSemiBoldWOFF2}) format("woff2"),
      url(${ManropeSemiBoldWOFF}) format("woff");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat"),
      url(${MontserratRegularWOFF2}) format("woff2"),
      url(${MontserratRegularWOFF}) format("woff");
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

  button {
    cursor: pointer;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }`;
