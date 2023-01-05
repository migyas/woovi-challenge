import LinearProgress from '@mui/material/LinearProgress';
import { Container } from './styled';

export default function SuspenseLoader() {
  return (
    <Container>
      <LinearProgress />
    </Container>
  );
}
