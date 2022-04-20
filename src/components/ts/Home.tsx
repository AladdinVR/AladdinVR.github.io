import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Footer from "./Footer";
import homeEn from "../markdown/en/home.md";
import homeFr from "../markdown/fr/home.md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState("");
  const sections = [
    { title: t("home"), url: "home" },
    { title: t("join"), url: "join" },
    { title: t("history"), url: "history" },
    { title: t("song"), url: "song" },
    { title: t("record"), url: "ranking" },
  ];

  const mainFeaturedPost = {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  const featuredPosts = [
    {
      title: "Featured post",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      title: "Post title",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
  ];

  useEffect(() => {
    const homes = {
      en: `${process.env.REACT_APP_CORE_ADDRESS}${homeEn}`,
      fr: `${process.env.REACT_APP_CORE_ADDRESS}${homeFr}`,
    };
    setPost(
      homes[i18n.language as keyof typeof homes] !== undefined
        ? homes[i18n.language as keyof typeof homes]
        : homes["fr"]
    );
  }, [i18n.language]);
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid sx={{ mt: 3 }}>
            <Main fileName={post} />
            {/* <Sidebar social={sidebar.social} /> */}
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
