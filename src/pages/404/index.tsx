import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Grid
      display="flex"
      alignItems="center"
      flexDirection="column"
      height="80vh"
    >
      <h1>Página não encontrada</h1>
      <Grid mt={2}>
        <Button variant="outlined" onClick={() => navigate('/')}>
          Voltar
        </Button>
      </Grid>
    </Grid>
  );
}
