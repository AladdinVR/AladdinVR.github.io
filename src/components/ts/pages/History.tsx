import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Main from "../Main";
import Footer from "../Footer";
import { HistoryProps } from "../../../utils/Props";
import { useEffect } from "react";

const History = (props: HistoryProps) => {
  useEffect(() => {
    localStorage.setItem("page", "history");
  }, []);
  return (
    <CssBaseline>
      <Main {...props} />
      <Footer />
    </CssBaseline>
  );
};

export default History;
