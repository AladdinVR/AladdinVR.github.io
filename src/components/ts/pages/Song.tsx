import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { SongProps } from "../../../utils/Props";

const Song = (props: SongProps) => {
  console.log(props);
  return (
    <CssBaseline>
      <Container maxWidth="lg">
        <Header />
        <Main {...props} />
      </Container>
      <Footer />
    </CssBaseline>
  );
};

export default Song;
