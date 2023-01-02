import { Box, Typography } from '@mui/material';
import { maskCurrency } from '@/utils/maskCurrency';
import { Container } from './styled';

interface FeatureMarkProps {
  emoticon?: boolean;
  value?: number;
  installmentFirst?: boolean;
  betterChoice?: boolean;
}

export default function FeatureMark({
  emoticon,
  value,
  installmentFirst,
  betterChoice,
}: FeatureMarkProps) {
  return (
    <Container>
      <Typography
        fontSize={16}
        color="#ffffff"
        display="flex"
        alignItems="center"
      >
        {emoticon && (
          <img
            src="/assets/icons/dollar-emoticon.png"
            width={25}
            height={25}
            style={{ padding: '0 0.2rem 0 0' }}
          />
        )}
        {betterChoice && (
          <>
            <strong style={{ paddingRight: '0.5rem' }}>-3% de juros:</strong>{' '}
            Melhor opção de parcelamento
          </>
        )}
        {installmentFirst && (
          <>
            <strong style={{ paddingRight: '0.5rem' }}>
              {maskCurrency(value * 0.03) || 'R$ 0'}
            </strong>{' '}
            de volta no seu Pix na hora
          </>
        )}
      </Typography>
    </Container>
  );
}
