import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import songEn from "../../markdown/en/song.md";
import songFr from "../../markdown/fr/song.md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Song = () => {
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
    const songs = {
      en: `${process.env.REACT_APP_CORE_ADDRESS}${songEn}`,
      fr: `${process.env.REACT_APP_CORE_ADDRESS}${songFr}`,
    };
    setPost(
      songs[i18n.language as keyof typeof songs] !== undefined
        ? songs[i18n.language as keyof typeof songs]
        : songs["fr"]
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

export default Song;
