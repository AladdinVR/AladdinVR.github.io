import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import joinEn from "../../markdown/en/join.md";
import joinFr from "../../markdown/fr/join.md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const Join = () => {
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState("");
  const sections = [
    { title: t("home"), url: "home" },
    { title: t("join"), url: "join" },
    { title: t("history"), url: "history" },
    { title: t("song"), url: "song" },
    { title: t("record"), url: "ranking" },
  ];

  useEffect(() => {
    const joins = {
      en: `${process.env.REACT_APP_CORE_ADDRESS}${joinEn}`,
      fr: `${process.env.REACT_APP_CORE_ADDRESS}${joinFr}`,
    };
    setPost(
      joins[i18n.language as keyof typeof joins] !== undefined
        ? joins[i18n.language as keyof typeof joins]
        : joins["fr"]
    );
  }, [i18n.language]);

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Histoire" sections={sections} />
        <main>
          <Main fileName={post} />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Join;
