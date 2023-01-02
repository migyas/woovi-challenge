import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { PixQRCode, PixQRCodeProps } from 'pix-react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { maskCurrency } from '@/utils/maskCurrency';
import { formatDate } from '@/utils/formatDate';
import Timeline from '@/components/Timeline';
import { mockParcelsRemaining } from '@/utils/mocks';

export default function PaymentFirstParcel() {
  const pixParams = {
    chave: '+5561993868323',
    cidade: 'Brasília',
    recebedor: 'Yan Dias',
    valor: 15300,
    identificador: '12345',
    mensagem: 'Woovi challenge',
    cep: '71570812',
  };
  const params: PixQRCodeProps = {
    pixParams,
    size: 332,
  };

  return (
    <Grid>
      <header>
        <Typography variant="h1" align="center" mb="2rem">
          João, pague a entrada de {maskCurrency(15300)} pelo Pix
        </Typography>
      </header>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid
          style={{
            padding: '1rem',
            border: '2px solid #03D69D',
            width: 'max-content',
            borderRadius: '1rem',
          }}
        >
          <PixQRCode {...params} />
        </Grid>
        <Button
          style={{ margin: '20px 0', padding: '7px 26px 7px 20px' }}
          endIcon={<img src="/assets/icons/copy.svg" style={{ padding: 0 }} />}
        >
          <Typography fontSize="1.8rem">Clique para copiar QR CODE</Typography>
        </Button>
        <Grid
          mb="2rem"
          container
          flexDirection="column"
          alignItems="center"
          style={{ padding: 0 }}
        >
          <Typography style={{ color: '#B2B2B2', fontWeight: 600 }}>
            Prazo de pagamento:
          </Typography>
          <Typography style={{ color: '#4D4D4D', fontWeight: 800 }}>
            {formatDate(new Date(), 'dd/MM/yyyy - hh:mm')}
          </Typography>
        </Grid>
        <Grid mb="2rem" width="100%">
          <Timeline items={mockParcelsRemaining} firstInstallment />
        </Grid>
        <Divider flexItem />
        <Grid
          container
          justifyContent="space-between"
          alignItems="end"
          mt="2rem"
          mb="2rem"
        >
          <Typography fontSize="1.4rem" style={{ color: '#4D4D4D' }}>
            CET: 0,5%
          </Typography>
          <Typography
            fontSize="1.8rem"
            fontWeight={600}
            style={{ color: '#4D4D4D' }}
          >
            Total: {maskCurrency(30600)}
          </Typography>
        </Grid>
        <Divider flexItem />
        <Grid container justifyContent="space-between">
          <Accordion
            variant="outlined"
            style={{ border: 'none', marginTop: '1rem', marginBottom: '1rem' }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={800} style={{ color: '#4D4D4D' }}>
                Como funciona?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Divider flexItem />
        <Grid
          mt="2rem"
          mb="4.1rem"
          container
          flexDirection="column"
          alignItems="center"
        >
          <Typography style={{ color: '#B2B2B2', fontWeight: 600 }}>
            Identificador:
          </Typography>
          <Typography style={{ color: '#4D4D4D', fontWeight: 800 }}>
            2c1b951f356c4680b13ba1c9fc889c47
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
