import { Grid, Typography } from '@mui/material';
import ToggleButtonInstallment from '@/components/ToggleButtonInstallment';
import { mockParcels } from '@/utils/mocks';

export default function NegociationParcels() {
  return (
    <Grid>
      <header>
        <Typography align="center" variant="h1" mb="3.2rem">
          João, como você quer pagar?
        </Typography>
      </header>
      <ToggleButtonInstallment installments={mockParcels} />
    </Grid>
  );
}
