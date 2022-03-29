import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { HeaderProps } from "../../utils/Props";
import LanguageSelector from "./LanguageSelector";

const Header = (props: HeaderProps) => {
  const { sections, title } = props;

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
            noWrap
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
