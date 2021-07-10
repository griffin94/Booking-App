import React from "react";
import { createGlobalStyle } from "styled-components";

const fonts = {
  md: "1.2rem",
  lg: "1.6rem",
  xl: "2rem",
  xxl: "2.8rem",
};

const theme = {
  darkTheme: {
    appBg: "#111",
    fontColor: "#fff",
    nav: {
      bg: "#222",
      hoverBg: "#292929",
      shadow: "0px 5px 4px rgb(0 0 0 / 20%)",
    },
    input: {
      background: "#666",
      border: "1px solid #666",
      placeholderColor: "#fff",
      color: "#fff",
    },
    textarea: {
      background: "#666",
      border: "1px solid #666",
      placeholderColor: "#fff",
      color: "#fff",
    },
    tile: {
      bg: "#444",
      shadow: "0px 5px 4px rgb(0 0 0 / 20%)",
    },
    accordion: {
      bg: "#666",
    },
    cards: {
      bg: "#666",
    },
    fonts,
  },
  lightTheme: {
    appBg: "#ebeae8",
    fontColor: "#222",
    nav: {
      bg: "#fff",
      hoverBg: "#eee",
      shadow: "0 5px 4px 0 rgb(0 0 0 / 16%)",
    },
    input: {
      background: "#fff",
      border: "1px solid #aaa",
      placeholderColor: "#888",
      color: "#222",
    },
    textarea: {
      background: "#fff",
      border: "1px solid #aaa",
      placeholderColor: "#888",
      color: "#222",
    },
    tile: {
      bg: "#fff",
      shadow: "0 1px 4px rgb(41 51 57 / 50%)",
    },
    accordion: {
      bg: "#e5e5e5",
    },
    cards: {
      bg: "#ebeae8",
    },
    fonts,
  },
};

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    @media (min-width: 800px) {
      font-size: 18px;
    }
}
body {
    background-color: ${(props) => props.theme.appBg};
    color: ${(props) => props.theme.fontColor};
}
`;

const ThemeContext = React.createContext();

export { GlobalStyles, theme };
export default ThemeContext;
