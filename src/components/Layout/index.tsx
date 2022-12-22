import { Outlet } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
const logo = require("@/assets/icons/logo.svg") as string;
const logoGray = require("@/assets/icons/logo-gray.svg") as string;
const guard = require("@/assets/icons/guard.svg") as string;

export default function Layout() {
  return (
    <Container maxWidth="sm">
      <img src={logo} />
      <Outlet />
      <footer>
        <Grid container justifyContent="start" alignItems="center" my="2.1rem">
          <img src={guard} style={{ padding: "0 0 3px 0" }} />
          <Typography
            fontSize="1.4rem"
            fontWeight={600}
            color="#B2B2B2"
            padding="0 0.6rem"
          >
            Pagamento 100% seguro via:
          </Typography>
          <img src={logoGray} style={{ padding: "0 0 3px 0" }} />
        </Grid>
      </footer>
    </Container>
  );
}
