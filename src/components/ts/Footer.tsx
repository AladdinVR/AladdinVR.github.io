import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

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
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
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
      </Container>
    </Box>
  );
};

export default Footer;
