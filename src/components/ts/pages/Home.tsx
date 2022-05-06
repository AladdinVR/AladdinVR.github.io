import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { HomeProps } from "../../../utils/Props";
import { useEffect } from "react";

const Home = (props: HomeProps) => {
  useEffect(() => {
    localStorage.setItem("page", "home");
  }, []);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header setPage={props.setPage} />
        <Grid sx={{ mt: 3 }}>
          <Main {...props} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
