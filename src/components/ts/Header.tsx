import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
  const title = "CNC";
  const { t } = useTranslation();
  const sections = [
    { title: t("home"), url: "/home" },
    { title: t("join"), url: "/join" },
    { title: t("history"), url: "/history" },
    { title: t("song"), url: "/song" },
    { title: t("record"), url: "/ranking" },
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
          <Typography component="h2" variant="h5" color="inherit">
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
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
};

export default Header;
