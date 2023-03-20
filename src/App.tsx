import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/ts/pages/Home";
import History from "./components/ts/pages/History";
import Records from "./components/ts/pages/Records";
import Song from "./components/ts/pages/Song";
import Join from "./components/ts/pages/Join";
import Header from "./components/ts/Header";
import Training from "./components/ts/pages/Training";
import { ThemeOptions, createTheme, CssBaseline, ThemeProvider, Theme, useMediaQuery } from "@mui/material";

interface MarkdownDocument {
  history: {
    en: string;
    fr: string;
  };
  home: {
    en: string;
    fr: string;
  };
  join: {
    en: string;
    fr: string;
  };
  song: {
    en: string;
    fr: string;
  };
  training: {
    en: string;
    fr: string;
  }
}

const App = () => {
  const darkThemePrefered = useMediaQuery('@media (prefers-color-scheme: dark)')
  const [themeSelected, setThemeSelected] = useState<'light' | 'dark'>(darkThemePrefered ? "dark" : "light")
  const [theme, setTheme] = useState<Theme>(createTheme())
  const [markdowns, setMarkdowns] = useState<MarkdownDocument>({
    history: { en: "", fr: "" },
    home: { en: "", fr: "" },
    join: { en: "", fr: "" },
    song: { en: "", fr: "" },
    training: { en: "", fr: "" }
  });
  const currentPage = localStorage.getItem("page");
  const [page, setPage] = useState(currentPage !== null ? currentPage : "home");
  const pageRenderer = (page: string) => {
    switch (page) {
      case "history":
        return <History {...markdowns.history} setPage={setPage} />;
      case "join":
        return <Join {...markdowns.join} setPage={setPage} />;
      case "song":
        return <Song {...markdowns.song} setPage={setPage} />;
      case "ranking":
        return <Records setPage={setPage} />;
      case "training":
        return <Training {...markdowns.training} setPage={setPage} />
      default:
        return <Home {...markdowns.home} setPage={setPage} />;
    }
  };
  useEffect(() => {
    const keys = ["history", "home", "join", "song", "training"];
    keys.forEach((document) => {
      fetch(`/markdown/en/${document}.md`)
        .then((res: { text: () => any }) => res.text())
        .then((text: string) =>
          setMarkdowns((prevState) => ({
            ...prevState,
            [document]: {
              en: text,
              fr: prevState[document as keyof MarkdownDocument].fr,
            },
          }))
        )
        .catch((error) => console.log(error));
    });
    keys.forEach((document) => {
      fetch(`/markdown/fr/${document}.md`)
        .then((res: { text: () => any }) => res.text())
        .then((text: string) =>
          setMarkdowns((prevState) => ({
            ...prevState,
            [document]: {
              en: prevState[document as keyof MarkdownDocument].en,
              fr: text,
            },
          }))
        )
        .catch((error) => console.log(error));
    });
  }, []);

  useEffect(() => {
    setThemeSelected(darkThemePrefered ? "dark" : "light")
  }, [darkThemePrefered])
  useEffect(() => {
    let palette: ThemeOptions['palette']
    if (themeSelected === 'light') {
      palette = {
        primary: {
          main: "#303030",
        },
        secondary: {
          main: "#ffc107",
          contrastText: "#001e3c"
        },
        background: {
          default: "#fff",
          paper: "#1769aa",
        },
        text: {
          primary: "rgba(33,33,33,1)",
          secondary: "rgba(33,33,33,0.58)",
          disabled: "rgba(33,33,33,0.4)",
        },
      }
    }
    else {
      palette = {
        primary: {
          main: "#fefefe",
        },
        secondary: {
          main: "#fadd68",
          contrastText: "#1769aa"
        },
        background: {
          default: "#0a1929",
          paper: "#001e3c",
        },
        text: {
          primary: "rgba(240,240,240,1)",
          secondary: "rgba(240,240,240,0.58)",
          disabled: "rgba(240,240,240,0.4)",
        },
      }
    }

    const themeOptions: ThemeOptions = {
      palette,
      typography: {
        h1: {
          fontWeight: 400,
          fontSize: "2.5rem",
          textDecoration: "underline"
        },
        h2: {
          fontWeight: 300,
          fontSize: "2rem",
        },
        h3: {
          fontWeight: 250,
          fontSize: "1.5rem",
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
        MuiSvgIcon: {
          defaultProps: {
            color: "secondary"
          }
        },
        MuiMenuItem: {
          defaultProps: {
            color: "secondary",
          },
        },
        MuiButtonBase: {
          defaultProps: {
            color: "secondary"
          }
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              borderColor: "#fadd68",
              verticalAlign: "baseline",
              border: "1px solid",
              width: "20%",
              minWidth: "200px",
              color: "whitesmoke",
            },
          },
        },
        MuiTable: {
          styleOverrides: {
            root: {
            }
          }
        }
      }
    };
    setTheme(createTheme(themeOptions));
  }, [themeSelected])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header page={page} setPage={setPage} theme={theme} setThemeSelected={setThemeSelected} themeSelected={themeSelected} />
        {pageRenderer(page)}
      </ThemeProvider>
    </div>
  );
};

export default App;
