import {
  createTheme,
  CssBaseline,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../i18n";
import SelectButton from "./SelectButton";

const innerThemeOptions: ThemeOptions = {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#082544",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#fadd68",
        },
      },
    },
  },
};

const LanguageSelector: FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <CssBaseline />
      <ThemeProvider
        theme={(theme: Theme) =>
          createTheme({
            ...theme,
            ...innerThemeOptions,
          })
        }
      >
        <SelectButton
          selectItems={{
            inputLabel: {
              text: t("lang"),
            },
            menuItems: availableLanguages.map((lang, index) => {
              return { id: index, text: lang };
            }),
          }}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value as string);
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default LanguageSelector;
