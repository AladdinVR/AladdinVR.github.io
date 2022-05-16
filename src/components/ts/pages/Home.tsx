import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
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

      <Grid sx={{ mt: 3 }}>
        <Main {...props} />
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
