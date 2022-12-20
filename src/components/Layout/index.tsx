import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
const logo = require("@/assets/logo.svg") as string;

export default function Layout() {
  return (
    <Container maxWidth="md">
      <img src={logo} />
      <Outlet />
    </Container>
  );
}
