import { Box, Grid, Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { maskCurrency } from '@/utils/maskCurrency';
import {
  CheckedIcon,
  Container,
  DividerLine,
  IconRoundedVariant,
  IconsWrapper,
  TextWrapper,
  TypographyTimeline,
} from './styled';

interface ItemsProps {
  id: string;
  checked?: boolean;
  value: number;
}

interface TimelineProps {
  items?: ItemsProps[];
  firstInstallment?: boolean;
  paymentOtherInstallment?: boolean;
}

export default function Timeline({
  items,
  firstInstallment,
  paymentOtherInstallment,
}: TimelineProps) {
  if (!items?.length) return;
  const lastItem = items.length - 1;

  return (
    <>
      {items.map((item, i) => {
        return (
          <Container container key={item.id}>
            <TextWrapper>
              <IconsWrapper>
                {item.checked ? (
                  <CheckedIcon>
                    <CheckRoundedIcon />
                  </CheckedIcon>
                ) : (
                  <IconRoundedVariant
                    firstInstallment={firstInstallment}
                    paymentOtherInstallment={paymentOtherInstallment}
                    lastItem={lastItem === i}
                  />
                )}
                {!(lastItem === i) && <DividerLine />}
              </IconsWrapper>
              {lastItem === i ? (
                <TypographyTimeline>2ª no cartão</TypographyTimeline>
              ) : (
                <TypographyTimeline>1ª entrada no Pix</TypographyTimeline>
              )}
            </TextWrapper>
            <Typography
              fontSize={18}
              fontWeight={800}
              style={{ marginTop: '-6px' }}
            >
              {maskCurrency(item.value)}
            </Typography>
          </Container>
        );
      })}
    </>
  );
}
