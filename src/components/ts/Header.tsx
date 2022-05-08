import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "../../utils/Props";

const Header = (props: HeaderProps) => {
  const title = "CNC";
  const { t } = useTranslation();
  const sections = [
    { title: t("home"), dest: "home" },
    { title: t("join"), dest: "join" },
    { title: t("history"), dest: "history" },
    { title: t("song"), dest: "song" },
    { title: t("record"), dest: "ranking" },
  ];
  return (
    <div>
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
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            variant="body2"
            onClick={() => props.setPage(section.dest)}
            sx={{ p: 1, flexShrink: 0 }}
            style={{ cursor: "pointer " }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
};

export default Header;
