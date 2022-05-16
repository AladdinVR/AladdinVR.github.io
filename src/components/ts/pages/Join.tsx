import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
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
      <Main {...props} />
      <Footer />
    </CssBaseline>
  );
};

export default Join;
