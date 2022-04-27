import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#303030",
      light: "rgba(158,158,158,0.63)",
      dark: "#181818",
      contrastText: "#bdbdbd",
    },
    secondary: {
      main: "#9e9e9e",
    },
    background: {
      default: "rgba(225,225,225,0.5)",
      paper: "#d1d1d1",
    },
    text: {
      primary: "#212121",
      secondary: "rgba(33,33,33,0.58)",
      disabled: "rgba(33,33,33,0.4)",
    },
  },
  typography: {
    h1: {
      fontWeight: 300,
      fontFamily: "serif",
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minHeight: "100vh",
        },
      },
    },
  },
};
const theme = createTheme(themeOptions);
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
