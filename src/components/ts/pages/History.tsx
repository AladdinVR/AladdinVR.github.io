import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import historyEn from "../../markdown/en/history.md";
import historyFr from "../../markdown/fr/history.md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const History = () => {
  const { i18n } = useTranslation();
  const [post, setPost] = useState("");

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

export default History;
