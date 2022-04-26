import * as React from "react";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import { Paper } from "@mui/material";

const Footer = () => {
  const { t } = useTranslation();
  const social = [
    { name: "Instagram", icon: InstagramIcon, href: "http://myInsta.foo.fr" },
    { name: "Twitter", icon: TwitterIcon, href: "http://myTwitter.foo.fr" },
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: " myFacebook.foo.fr",
    },
  ];

  return (
    <Paper style={{ height: "10vh" }}>
      <Typography variant="h6" align="center" gutterBottom>
        {t("networks")}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        {social.map((network) => (
          <Link
            display="block"
            variant="body1"
            href={network.href}
            key={network.name}
            sx={{ mb: 0.5 }}
          >
            <network.icon />
          </Link>
        ))}
      </Stack>
    </Paper>
  );
};

export default Footer;
