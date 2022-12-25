import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import ToggleButtonParcel from '@/components/ToggleButtonParcel';
import { mockParcels } from '@/utils/mocks';

export default function NegociationParcels() {
  const [parcels] = useState(mockParcels);

  return (
    <Grid>
      <header>
        <Typography align="center" variant="h1" mb="3.2rem">
          João, como você quer pagar?
        </Typography>
      </header>
      <ToggleButtonParcel parcels={parcels} />
    </Grid>
  );
}
