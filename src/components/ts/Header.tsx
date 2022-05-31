import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "../../utils/Props";
import { CssBaseline } from "@mui/material";

const Header = (props: HeaderProps) => {
  const title = "CNC";
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
      title: t("ranking"),
      dest: "ranking",
      weight: props.page === "ranking" ? "Bold" : "14px",
    },
  ];
  return (
    <div>
      <CssBaseline />
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
          <Typography component="h2" variant="h4" color="inherit">
            {title}
          </Typography>
          <LanguageSelector />
        </Toolbar>
      </div>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-around", overflowX: "auto" }}
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
    </div>
  );
};

export default Header;
