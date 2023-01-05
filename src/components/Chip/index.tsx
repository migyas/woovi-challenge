import { Chip as ChipMUI, Typography } from '@mui/material';
import { Container } from './styled';

interface ChipProps {
  message: string;
}

export default function Chip({ message }: ChipProps) {
  return (
    <Container>
      <ChipMUI
        color="info"
        label={
          <Typography
            fontSize={18}
            textAlign="center"
            fontWeight={800}
            textTransform="capitalize"
          >
            {message}
          </Typography>
        }
      />
    </Container>
  );
}
