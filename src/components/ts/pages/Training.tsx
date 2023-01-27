import CssBaseline from "@mui/material/CssBaseline";
import Main from "../Main";
import Footer from "../Footer";
import { useEffect } from "react";
import {createTheme, Container, Theme, ThemeOptions, ThemeProvider } from "@mui/material";
import { TrainingProps } from "../../../utils/Props";

const innerThemeOptions: ThemeOptions = {
  components:{
    MuiPaper:{
      styleOverrides:{
        root:{
          marginBottom:"20px"
        }
      }
    },
  },
}
const Training = (props: TrainingProps) => {
  useEffect(() => {
    localStorage.setItem("page", "training");
  }, []);
  return (
    <div className="Core">
      <CssBaseline />
      <ThemeProvider
        theme={(theme: Theme) => 
          createTheme(theme,innerThemeOptions)
        }
      >
      <Container maxWidth="lg">
        {" "}
        <Main {...props} />
      </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default Training;
