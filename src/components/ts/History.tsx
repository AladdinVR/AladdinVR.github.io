import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import historyEn from "../markdown/en/history.md";
import historyFr from "../markdown/fr/history.md";
import { useTranslation } from "react-i18next";
const History = () => {
  const { i18n } = useTranslation();
  const sections = [
    { title: "Acceuil", url: "home" },
    { title: "Nous rejoindre", url: "join" },
    { title: "Histoire du Club", url: "history" },
    { title: "Records du Club", url: "ranking" },
  ];
  const historys = { en: historyEn, fr: historyFr };
  const post = [historys[i18n.language as keyof typeof historys]];

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
