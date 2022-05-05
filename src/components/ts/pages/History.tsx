import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { HistoryProps } from "../../../utils/Props";
import { useEffect } from "react";
import "../../css/History.css";

const History = (props: HistoryProps) => {
  useEffect(() => {
    localStorage.setItem("page", "history");
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

export default History;
