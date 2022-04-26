import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import songEn from "../../markdown/en/song.md";
import songFr from "../../markdown/fr/song.md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Song = () => {
  const { i18n } = useTranslation();
  const [post, setPost] = useState("");

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

  return (
    <CssBaseline>
      <Container maxWidth="lg">
        <Header />
        <Main fileName={post} />
      </Container>
      <Footer />
    </CssBaseline>
  );
};

export default Song;
