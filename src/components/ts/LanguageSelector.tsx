import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../i18n";
import SelectButton from "./SelectButton";

const LanguageSelector: FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { t, i18n } = useTranslation();
  return (
    <SelectButton
      menuItemsStyle={{
        color: "black",
        backgroundColor: "rgba(255,255,255,0)",
        borderRadius: "8px",
        "& .MuiSelect-icon": { color: "black" },
        ":hover": { background: "rgba(155,155,155,0.7)" },
        "::after": { borderBottom: "None" },
        "::before": { borderBottom: "None" },
        maxWidth: "15ch",
      }}
      selectItems={{
        inputLabel: {
          text: t("lang"),
          style: {
            color: "black",
            "& #focus": {
              color: "yellow",
            },
          },
        },
        menuItems: availableLanguages.map((lang, index) => {
          return { id: index, text: lang };
        }),
      }}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value as string);
      }}
    />
  );
};

export default LanguageSelector;
