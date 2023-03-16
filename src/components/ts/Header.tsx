import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "../../utils/Props";
import {
  IconButton,
  createTheme,
  CssBaseline,
  Paper,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Brightness3Icon from '@mui/icons-material/Brightness3';

const Header = (props: HeaderProps) => {
  const { t } = useTranslation();
  let sections = [
    {
      title: t("home"),
      dest: "home",
      weight: props.page === "home" ? "Bold" : "14px",
    },
    {
      title: t("join"),
      dest: "join",
      weight: props.page === "join" ? "Bold" : "14px",
    },
    {
      title: t("history"),
      dest: "history",
      weight: props.page === "history" ? "Bold" : "14px",
    },
    {
      title: t("song"),
      dest: "song",
      weight: props.page === "song" ? "Bold" : "14px",
    },
    {
      title: t("training"),
      dest: "training",
      weight: props.page === "training" ? "Bold" : "14px",
    },
    {
      title: t("ranking"),
      dest: "ranking",
      weight: props.page === "ranking" ? "Bold" : "14px",
    },
  ];
  const innerThemeOptions: ThemeOptions = {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            position: "sticky",
            top: "0px",
            marginBottom: "30px",
            zIndex: "10",
            backgroundColor: props.theme.palette.background.default,
            boxShadow: props.themeSelected === "dark" ? "0 1px 6px 1px rgba(255,255,255,0.25)" : "0 1px 6px 1px rgba(0,0,0,0.12)"
          },
        },
      },
    },
  };
  return (
    <>
      <CssBaseline />
      <ThemeProvider
        theme={(theme: Theme) =>
          createTheme(theme, innerThemeOptions)
        }
      >
        <Paper elevation={5} square>
          <div id="container">
            <Toolbar
              component="nav"
              variant="dense"
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                justifyContent: "space-between",
                overflowX: "auto",
              }}
            >
              <img
                src="/favicon.ico"
                alt="Club's logo"
                className="favicon"
                style={
                  window.innerWidth > window.innerHeight
                    ? { width: "5vw", height: "auto" }
                    : { width: "auto", height: "10vh" }
                }
              />
              <Toolbar sx={{ alignItems: "flex-end" }}>
                <LanguageSelector />
                <IconButton sx={{ ml: 1 }} onClick={() => props.setThemeSelected((theme) => theme === "light" ? "dark" : "light")}>
                  {props.themeSelected === 'dark' ? <Brightness3Icon /> : <BrightnessHighIcon sx={{ color: "#ffc107" }} />}
                </IconButton>

              </Toolbar>
            </Toolbar>
          </div>
          <Toolbar
            component="nav"
            variant="dense"
            sx={window.innerWidth < 600 ?
              { justifyContent: "space-between", overflowX: "auto" }
              : { justifyContent: "space-around", overflowX: "auto" }}
          >
            {sections.map((section, index) => (
              <Link
                color="inherit"
                key={section.title}
                variant="body2"
                fontWeight={section.weight}
                onClick={() => {
                  let tempSections = [...sections];
                  tempSections.forEach((_element, index) => {
                    tempSections[index].weight = "14px";
                  });
                  tempSections[index].weight = "Bold";
                  sections = tempSections;
                  props.setPage(section.dest);
                }}
                sx={{ p: 1, flexShrink: 0 }}
                style={{ cursor: "pointer " }}
              >
                {t(section.title as keyof typeof t)}
              </Link>
            ))}
          </Toolbar>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Header;
