import styled from '@emotion/styled';
import { Grid, Box, Typography } from '@mui/material';

interface IconRoundedVariantProps {
  firstInstallment: boolean;
  paymentOtherInstallment: boolean;
  lastItem: boolean;
}

export const Container = styled(Grid)({
  maxWidth: '55rem',
  justifyContent: 'space-between',
});

export const TextWrapper = styled(Box)({
  gap: '0.8rem',
  display: 'flex',
});

export const IconsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const CheckedIcon = styled(Box)({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  background: '#03D69D',
  position: 'relative',

  '& svg': {
    position: 'absolute',
    left: '2px',
    top: '2px',
    fontSize: '12px',
    color: '#ffffff',
  },
});

export const IconRoundedVariant = styled(Box)<IconRoundedVariantProps>(
  props => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border:
      props.firstInstallment && props.lastItem
        ? '2px solid #E5E5E5'
        : '2px solid #03D69D' ||
          (props.paymentOtherInstallment &&
            props.lastItem &&
            '2px solid #03D69D'),
  }),
);

export const DividerLine = styled(Box)({
  width: '2px',
  height: '24px',
  background: '#E5E5E5',
  position: 'relative',
});

export const TypographyTimeline = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: 600,
  marginTop: '-6px',
});
