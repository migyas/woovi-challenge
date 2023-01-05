import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { InstallmentProps } from '..';

interface ContainerProps {
  installment: InstallmentProps;
  installmentFirst: boolean;
}

export const Container = styled(Box)<ContainerProps>(
  ({ installment, installmentFirst }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height:
      ((installment.betterChoice || installmentFirst) && '13.7rem') ||
      (installment.id === '2' && '10.5rem') ||
      '9.5rem',
    gap: '7px',
    padding: '0 20px',
  }),
);

export const Content = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const HeaderWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const TitleWrapper = styled(Box)({
  display: 'flex',
  gap: '5px',
});
