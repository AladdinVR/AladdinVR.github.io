import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { JoinProps } from "../../../utils/Props";
import { useEffect } from "react";
const Join = (props: JoinProps) => {
  useEffect(() => {
    localStorage.setItem("page", "join");
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

export default Join;
