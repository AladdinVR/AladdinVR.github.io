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
    },
    secondary: {
      main: "#2a3eb1",
    },
    background: {
      default: "#f8f8f8",
      paper: "#33eaff",
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
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 300,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 300,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
    allVariants: {
      textAlign: "left",
      fontFamily: "Lato",
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
