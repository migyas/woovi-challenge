import { Typography } from '@mui/material';

import FeatureMark from '@/components/FeatureMark';
import { maskCurrency } from '@/utils/maskCurrency';
import Checkbox from '@/components/Checkbox';
import { Container, Content, HeaderWrapper, TitleWrapper } from './styled';
import { InstallmentProps } from '..';

interface InstalllmentItemProps {
  installment: InstallmentProps;
  installmentFirst?: boolean;
  betterChoice?: boolean;
  value: string;
  message?: string | number;
}

export default function InstallmentItem({
  installmentFirst,
  betterChoice,
  value,
  message,
  installment,
}: InstalllmentItemProps) {
  return (
    <Container installment={installment} installmentFirst={installmentFirst}>
      <Content>
        <HeaderWrapper>
          <TitleWrapper>
            <Typography fontSize={24} fontWeight={800}>
              {installment.id}x
            </Typography>
            <Typography fontSize={24} fontWeight={600}>
              {maskCurrency(installment.value)}
            </Typography>
          </TitleWrapper>
          {installmentFirst ? (
            <Typography
              fontWeight={600}
              color="#03D69D"
              textAlign="start"
              textTransform="none"
            >
              Ganhe <strong>3%</strong> de Cashback
            </Typography>
          ) : (
            <Typography
              fontWeight={600}
              textAlign="start"
              textTransform="none"
              color="#AFAFAF"
            >
              {message}
            </Typography>
          )}
        </HeaderWrapper>
        <Checkbox value={value} installment={installment} />
      </Content>
      {(installmentFirst || betterChoice) && (
        <FeatureMark
          value={installment.value}
          emoticon={installmentFirst}
          installmentFirst={installmentFirst}
          betterChoice={betterChoice}
        />
      )}
    </Container>
  );
}
