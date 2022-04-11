import * as React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";
import { MainProps } from "../../utils/Props";

const Main = (props: MainProps) => {
  const { posts } = props;
  console.log(posts);
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
      {posts.map((post) => (
        <div className="markdown" key={post.substring(0, 40)}>
          <Markdown fileName={post} />
        </div>
      ))}
    </Grid>
  );
};

export default Main;
