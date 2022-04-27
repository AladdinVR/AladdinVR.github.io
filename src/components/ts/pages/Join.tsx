import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { JoinProps } from "../../../utils/Props";
const Join = (props: JoinProps) => {
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
