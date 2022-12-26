import { Box, Typography } from '@mui/material';
import { maskCurrency } from '@/utils/maskCurrency';

interface FeatureMarkProps {
  emoticon?: boolean;
  value?: number;
  firstParcel?: boolean;
}

export default function FeatureMark({
  emoticon,
  value,
  firstParcel,
}: FeatureMarkProps) {
  return (
    <Box
      style={{
        background: '#133A6F',
        textTransform: 'none',
        color: '#ffffff',
        textAlign: 'start',
        padding: '6px 0 6px 8px',
        borderRadius: '5px',
        clipPath:
          'polygon(100% 0, 100% 6%, 96% 52%, 100% 95%, 100% 100%, 0 100%, 0 0)',
      }}
    >
      <Typography fontSize={16}>
        {emoticon && '🤑'}{' '}
        {firstParcel ? (
          <>
            <strong>{maskCurrency(value! * 0.03) || 'R$ 0'}</strong> de volta no
            seu Pix na hora
          </>
        ) : (
          <>
            <strong>-3% de juros:</strong> Melhor opção de parcelamento
          </>
        )}
      </Typography>
    </Box>
  );
}
