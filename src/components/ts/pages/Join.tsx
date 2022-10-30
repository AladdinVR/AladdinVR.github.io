import CssBaseline from "@mui/material/CssBaseline";
import Main from "../Main";
import Footer from "../Footer";
import { JoinProps } from "../../../utils/Props";
import { useEffect } from "react";
import { Container } from "@mui/material";
const Join = (props: JoinProps) => {
  useEffect(() => {
    localStorage.setItem("page", "join");
  }, []);
  return (
    <div className="Core">
      <CssBaseline />
      <Container maxWidth="lg">
        <Main {...props} />
      </Container>
      <Footer />
    </div>
  );
};

export default Join;
