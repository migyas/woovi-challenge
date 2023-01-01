import {
  Box,
  Checkbox,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import {
  CircleOutlined as CircleOutlinedBorder,
  CheckCircle as CircleOutlinedIcon,
} from '@mui/icons-material/';
import { maskCurrency } from '@/utils/maskCurrency';
import FeatureMark from '@/components/FeatureMark';

interface InstallmentProps {
  id: string;
  value: number;
}

interface FirstToggleButtonProps {
  value: string;
  handleOnChange: (value: string) => void;
  intallmentFirst: InstallmentProps;
}

export default function FirstToggleButton({
  value,
  handleOnChange,
  intallmentFirst,
}: FirstToggleButtonProps) {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      orientation="vertical"
      onChange={(_, val) => handleOnChange(val)}
      style={{ marginBottom: '34px', minWidth: '429px' }}
    >
      {intallmentFirst && (
        <ToggleButton
          key={intallmentFirst.id}
          value={intallmentFirst.value}
          selected={value == intallmentFirst.value.toString()}
          style={{ borderRadius: '10px' }}
        >
          <Box
            style={{
              position: 'absolute',
              top: '-15px',
              left: '20px',
            }}
          >
            <Chip
              color="info"
              label={
                <Typography
                  fontSize={18}
                  textAlign="center"
                  fontWeight={800}
                  color="#4D4D4D"
                  textTransform="capitalize"
                >
                  Pix
                </Typography>
              }
            />
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '137px',
              maxWidth: '429px',
              width: '100%',
              gap: '7px',
              padding: '0 20px',
            }}
          >
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box style={{ display: 'flex', gap: '5px' }}>
                  <Typography fontSize={24} fontWeight={800} color="#4D4D4D">
                    {intallmentFirst.id}x
                  </Typography>
                  <Typography fontSize={24} fontWeight={600} color="#4D4D4D">
                    {maskCurrency(intallmentFirst.value)}
                  </Typography>
                </Box>
                <Typography
                  fontWeight={600}
                  color="#03D69D"
                  textAlign="start"
                  textTransform="none"
                >
                  Ganhe <strong>3%</strong> de Cashback
                </Typography>
              </Box>
              <Box>
                <Checkbox
                  icon={<CircleOutlinedBorder />}
                  checkedIcon={<CircleOutlinedIcon />}
                  checked={value == intallmentFirst.value.toString()}
                  style={{
                    color:
                      value == intallmentFirst.value.toString()
                        ? ''
                        : '#E5E5E5',
                  }}
                  color="success"
                />
              </Box>
            </Box>
            <FeatureMark firstParcel value={intallmentFirst.value} emoticon />
          </Box>
        </ToggleButton>
      )}
    </ToggleButtonGroup>
  );
}
