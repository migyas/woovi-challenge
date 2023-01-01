import { Outlet } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

export default function Layout() {
  return (
    <Container maxWidth="sm">
      <img src="/assets/icons/logo.svg" />
      <Outlet />
      <footer>
        <Grid container justifyContent="start" alignItems="center" my="2.1rem">
          <img src="/assets/icons/guard.svg" style={{ padding: '0 0 3px 0' }} />
          <Typography
            fontSize="1.4rem"
            fontWeight={600}
            color="#B2B2B2"
            padding="0 0.6rem"
          >
            Pagamento 100% seguro via:
          </Typography>
          <img
            src="/assets/icons/logo-gray.svg"
            style={{ padding: '0 0 3px 0' }}
          />
        </Grid>
      </footer>
    </Container>
  );
}
