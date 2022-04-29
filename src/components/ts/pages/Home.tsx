import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "../Header";
import MainFeaturedPost from "../MainFeaturedPost";
import FeaturedPost from "../FeaturedPost";
import Main from "../Main";
import Footer from "../Footer";
import { HomeProps } from "../../../utils/Props";
import { useEffect } from "react";

const Home = (props: HomeProps) => {
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
    localStorage.setItem("page", "home");
  }, []);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header setPage={props.setPage} />
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid sx={{ mt: 3 }}>
          <Main {...props} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
