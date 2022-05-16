import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { HeaderProps } from "../../utils/Props";
import { useEffect, useState } from "react";

const Header = (props: HeaderProps) => {
  const title = "CNC";
  const { t, i18n } = useTranslation();
  const [sections, setSections] = useState([
    { title: t("home"), dest: "home", weight: "Bold" },
    { title: t("join"), dest: "join", weight: "14px" },
    { title: t("history"), dest: "history", weight: "14px" },
    { title: t("song"), dest: "song", weight: "14px" },
    { title: t("ranking"), dest: "ranking", weight: "14px" },
  ]);
  useEffect(() => {
    let tempSections = [...sections];
    tempSections.forEach((_element, index) => {
      tempSections[index].title = t(tempSections[index].dest as keyof typeof t);
    });
    setSections(tempSections);
  }, [i18n.language, sections, t]);
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
              setSections(tempSections);
              props.setPage(section.dest);
            }}
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
