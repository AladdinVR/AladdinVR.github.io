import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Main from "../Main";
import Footer from "../Footer";
import { HomeProps } from "../../../utils/Props";
import { useEffect } from "react";
import { Container } from "@mui/material";

const Home = (props: HomeProps) => {
  useEffect(() => {
    localStorage.setItem("page", "home");
  }, []);
  return (
    <div className="Core">
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid sx={{ mt: 3 }}>
          <Main {...props} />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
