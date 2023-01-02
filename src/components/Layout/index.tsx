import { Outlet } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import { Footer } from './styled';

export default function Layout() {
  return (
    <Container maxWidth="sm">
      <img src="/assets/icons/logo.svg" />
      <Outlet />
      <Footer>
        <Grid container justifyContent="start" alignItems="center" my="2.1rem">
          <img src="/assets/icons/guard.svg" />
          <Typography
            fontSize="1.4rem"
            fontWeight={600}
            color="#B2B2B2"
            padding="0 0.6rem"
          >
            Pagamento 100% seguro via:
          </Typography>
          <img src="/assets/icons/logo-gray.svg" />
        </Grid>
      </Footer>
    </Container>
  );
}
