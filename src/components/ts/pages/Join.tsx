import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import joinEn from "../../markdown/en/join.md";
import joinFr from "../../markdown/fr/join.md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const Join = () => {
  const { i18n } = useTranslation();
  const [post, setPost] = useState("");

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

export default Join;
