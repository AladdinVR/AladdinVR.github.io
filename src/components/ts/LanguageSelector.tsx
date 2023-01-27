import {
  CssBaseline,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../i18n";
import SelectButton from "./SelectButton";

const LanguageSelector: FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <CssBaseline />
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
    </>
  );
};

export default LanguageSelector;
