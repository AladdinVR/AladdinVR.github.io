import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { SidebarProps } from "../../utils/Props";

const Sidebar = (props: SidebarProps) => {
  return (
    <Grid item xs={12} md={4}>
      {props.title !== undefined && (
        <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
          <Typography variant="h6" gutterBottom>
            {props.title}
          </Typography>
          <Typography>{props?.description}</Typography>
        </Paper>
      )}
      {props.archives !== undefined && (
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Archives
        </Typography>
      )}
      {props.archives?.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {props.social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network.href}
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row-reverse" spacing={1} alignItems="right">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
