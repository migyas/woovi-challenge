import { ToggleButton } from '@mui/material';
import Chip from '@/components/Chip';
import InstallmentItem from '../InstallmentItem';
import { Container } from './styled';
import { InstallmentProps } from '..';

interface FirstToggleButtonProps {
  value: string;
  handleOnChange: (value: string) => void;
  installmentFirst: InstallmentProps;
}

export default function FirstToggleButton({
  value,
  handleOnChange,
  installmentFirst,
}: FirstToggleButtonProps) {
  return (
    <Container
      value={value}
      exclusive
      orientation="vertical"
      onChange={(_, val) => handleOnChange(val)}
    >
      {installmentFirst && (
        <ToggleButton
          key={installmentFirst.id}
          value={installmentFirst.value}
          selected={value == installmentFirst.value.toString()}
          style={{ borderRadius: '10px' }}
        >
          <Chip message="Pix" />
          <InstallmentItem
            installmentFirst
            installment={installmentFirst}
            value={value}
          />
        </ToggleButton>
      )}
    </Container>
  );
}
