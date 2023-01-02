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
      <Typography fontSize={16} color="#ffffff">
        {emoticon && '🤑'}{' '}
        {betterChoice && (
          <>
            <strong>-3% de juros:</strong> Melhor opção de parcelamento
          </>
        )}
        {installmentFirst && (
          <>
            <strong>{maskCurrency(value * 0.03) || 'R$ 0'}</strong> de volta no
            seu Pix na hora
          </>
        )}
      </Typography>
    </Container>
  );
}
