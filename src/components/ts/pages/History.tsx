import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import historyEn from "../../markdown/en/history.md";
import historyFr from "../../markdown/fr/history.md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const History = () => {
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
    const historys = {
      en: `${process.env.REACT_APP_CORE_ADDRESS}${historyEn}`,
      fr: `${process.env.REACT_APP_CORE_ADDRESS}${historyFr}`,
    };
    setPost(
      historys[i18n.language as keyof typeof historys] !== undefined
        ? historys[i18n.language as keyof typeof historys]
        : historys["fr"]
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

export default History;
