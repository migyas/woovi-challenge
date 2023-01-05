import { AccordionSummary, Divider, Grid, Typography } from '@mui/material';
import { PixQRCode, PixQRCodeProps } from 'pix-react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { maskCurrency } from '@/utils/maskCurrency';
import { formatDate } from '@/utils/formatDate';
import Timeline from '@/components/Timeline';
import { mockInstallmentsRemaining } from '@/utils/mocks/installmentsReimaing';
import { mockQRCode as pixParams } from '@/utils/mocks/QRCode';
import {
  ButtonCopyCode,
  ContainerAccordion,
  DetailsAccordion,
  QRCodeWrapper,
} from './styled';

export default function PaymentFirstInstallment() {
  const params: PixQRCodeProps = {
    pixParams,
    size: 332,
  };

  return (
    <Grid>
      <header>
        <Typography variant="h1">
          João, pague a entrada de {maskCurrency(15300)} pelo Pix
        </Typography>
      </header>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <QRCodeWrapper>
          <PixQRCode {...params} />
        </QRCodeWrapper>
        <ButtonCopyCode endIcon={<img src="/assets/icons/copy.svg" />}>
          <Typography fontSize="1.8rem" color="#ffffff">
            Clique para copiar QR CODE
          </Typography>
        </ButtonCopyCode>
        <Grid mb="2rem" container flexDirection="column" alignItems="center">
          <Typography color="#B2B2B2" fontWeight={600}>
            Prazo de pagamento:
          </Typography>
          <Typography fontWeight={800}>
            {formatDate(new Date(), 'dd/MM/yyyy - hh:mm')}
          </Typography>
        </Grid>
        <Grid mb="2rem" width="100%">
          <Timeline items={mockInstallmentsRemaining} firstInstallment />
        </Grid>
        <Divider flexItem />
        <Grid
          container
          justifyContent="space-between"
          alignItems="end"
          mt="2rem"
          mb="2rem"
        >
          <Typography fontSize="1.4rem">CET: 0,5%</Typography>
          <Typography fontSize="1.8rem" fontWeight={600}>
            Total: {maskCurrency(30600)}
          </Typography>
        </Grid>
        <Divider flexItem />
        <Grid container justifyContent="space-between">
          <ContainerAccordion variant="outlined">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={800}>Como funciona?</Typography>
            </AccordionSummary>
            <DetailsAccordion>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </DetailsAccordion>
          </ContainerAccordion>
        </Grid>
        <Divider flexItem />
        <Grid
          mt="2rem"
          mb="4.1rem"
          container
          flexDirection="column"
          alignItems="center"
        >
          <Typography color="#B2B2B2" fontWeight={600}>
            Identificador:
          </Typography>
          <Typography fontWeight={800}>
            2c1b951f356c4680b13ba1c9fc889c47
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
