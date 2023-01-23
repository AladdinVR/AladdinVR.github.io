import CssBaseline from "@mui/material/CssBaseline";
import Main from "../Main";
import Footer from "../Footer";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { TrainingProps } from "../../../utils/Props";

const Training = (props: TrainingProps) => {
  useEffect(() => {
    localStorage.setItem("page", "training");
  }, []);
  return (
    <div className="Core">
      <CssBaseline />
      <Container maxWidth="lg">
        {" "}
        <Main {...props} />
      </Container>
      <Footer />
    </div>
  );
};

export default Training;
