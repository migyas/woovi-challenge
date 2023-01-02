import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)({
  background: '#133A6F',
  textTransform: 'none',
  color: '#ffffff',
  textAlign: 'start',
  padding: '6px 0 6px 8px',
  borderRadius: '5px',
  clipPath:
    'polygon(100% 0, 100% 6%, 96% 52%, 100% 95%, 100% 100%, 0 100%, 0 0)',
});
