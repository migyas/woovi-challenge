import { useState } from 'react';
import { Grid, Typography, Modal, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ToggleButtonInstallment from '@/components/ToggleButtonInstallment';
import { mockInstallments } from '@/utils/mocks/installments';
import { maskCurrency } from '@/utils/maskCurrency';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 100,
  display: 'flex',
  flexDirection: 'column',
  bgcolor: 'background.paper',
  boxShadow: 15,
  borderRadius: '5px',
  p: 3,
  justifyContent: 'space-between',
};

export default function NegociationInstallments() {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const installmentFind = mockInstallments.find(
    installment => installment.value === +value,
  );

  function handleChooseParcel(value: string) {
    setValue(value);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
    setValue('');
  }

  return (
    <Grid>
      <header>
        <Typography variant="h1">João, como você quer pagar?</Typography>
      </header>
      <ToggleButtonInstallment
        installments={mockInstallments}
        value={value}
        handleOnChange={handleChooseParcel}
      />
      <Modal keepMounted open={openModal}>
        <Box sx={style}>
          <Typography>
            Deseja parcelar em <strong>{installmentFind?.id}x</strong> de{' '}
            <strong>
              {installmentFind && maskCurrency(installmentFind.value)}
            </strong>
            ?
          </Typography>
          <Box display="flex" gap={2}>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/payment-installment')}
            >
              Confirmar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
}
