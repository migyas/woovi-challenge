import { Grid, Typography } from '@mui/material';
import ToggleButtonInstallment from '@/components/ToggleButtonInstallment';
import { mockInstallments } from '@/utils/mocks/installments';

export default function NegociationParcels() {
  return (
    <Grid>
      <header>
        <Typography variant="h1">João, como você quer pagar?</Typography>
      </header>
      <ToggleButtonInstallment installments={mockInstallments} />
    </Grid>
  );
}
