import { Box, Checkbox as CheckboxMUI } from '@mui/material';
import {
  CircleOutlined as CircleOutlinedBorder,
  CheckCircle as CircleOutlinedIcon,
} from '@mui/icons-material/';
import { InstallmentProps } from '../ToggleButtonInstallment';

interface CheckboxProps {
  value: string;
  installment: InstallmentProps;
}

export default function Checkbox({ value, installment }: CheckboxProps) {
  return (
    <Box>
      <CheckboxMUI
        icon={<CircleOutlinedBorder />}
        checkedIcon={<CircleOutlinedIcon />}
        checked={value == installment.value.toString()}
        style={{
          color: value == installment.value.toString() ? '' : '#E5E5E5',
        }}
        color="success"
      />
    </Box>
  );
}
