import styled from '@emotion/styled';
import { Grid, Button, Accordion, AccordionDetails } from '@mui/material';

export const QRCodeWrapper = styled(Grid)({
  padding: '1rem',
  border: '2px solid #03D69D',
  width: 'max-content',
  borderRadius: '1rem',
});

export const ButtonCopyCode = styled(Button)({
  margin: '20px 0',
  padding: '7px 26px 7px 20px',
});

export const ContainerAccordion = styled(Accordion)({
  border: 'none',
  marginTop: '1rem',
  marginBottom: '1rem',
});

export const DetailsAccordion = styled(AccordionDetails)({
  padding: '0 0 2rem 0',
});
