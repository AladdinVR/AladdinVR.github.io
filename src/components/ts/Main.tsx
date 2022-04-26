import * as React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ReactMarkdown from "react-markdown";
import { MainProps } from "../../utils/Props";
import { useEffect, useState } from "react";
const Main = (props: MainProps) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(`${props.fileName}`)
      .then((res) => res.text())
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  }, [props.fileName]);
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Divider />
      <ReactMarkdown children={post} />
    </Grid>
  );
};

export default Main;
