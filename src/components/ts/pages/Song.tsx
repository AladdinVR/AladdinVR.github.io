import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { SongProps } from "../../../utils/Props";
import { useEffect } from "react";

const Song = (props: SongProps) => {
  useEffect(() => {
    localStorage.setItem("page", "song");
  }, []);
  return (
    <CssBaseline>
      <Container maxWidth="lg">
        <Header setPage={props.setPage} />
        <Main {...props} />
      </Container>
      <Footer />
    </CssBaseline>
  );
};

export default Song;
