import { useState } from 'react';
import {
  Box,
  ToggleButtonGroup,
  Typography,
  Checkbox,
  ToggleButton,
} from '@mui/material';
import {
  CircleOutlined as CircleOutlinedBorder,
  CheckCircle as CircleOutlinedIcon,
} from '@mui/icons-material/';
import { maskCurrency } from '@/utils/maskCurrency';
import FeatureMark from '@/components/FeatureMark';
import FirstToggleButton from './FirstToggleButton';
import Chip from '@/components/Chip';
import InstallmentItem from './InstallmentItem';

export interface InstallmentProps {
  id: string;
  value: number;
  betterChoice?: boolean;
  total?: number;
}

interface ToggleButtonInstallmentProps {
  installments: InstallmentProps[];
}

export default function ToggleButtonInstallment({
  installments,
}: ToggleButtonInstallmentProps) {
  const [value, setValue] = useState('');
  const installmentFirst = installments[0];

  function handleChooseParcel(value: string) {
    setValue(value);
  }

  return (
    <>
      {installments.length > 0 && (
        <>
          <FirstToggleButton
            installmentFirst={installmentFirst}
            handleOnChange={handleChooseParcel}
            value={value}
          />
          <div>
            <ToggleButtonGroup
              exclusive
              value={value}
              orientation="vertical"
              style={{ marginBottom: '30px', width: '100%' }}
              onChange={(_, val) => handleChooseParcel(val)}
            >
              {installments.map(installment => {
                if (installment.id === '1') {
                  return;
                }

                if (installment.betterChoice) {
                  return (
                    <ToggleButton
                      key={installment.id}
                      value={installment.value}
                    >
                      <InstallmentItem
                        installment={installment}
                        value={value}
                        message={`Total: ${maskCurrency(installment.total)}`}
                        betterChoice
                      />
                    </ToggleButton>
                  );
                }

                return (
                  <ToggleButton
                    key={installment.id}
                    value={installment.value}
                    style={{
                      borderRadius: installment.id === '2' && '10px 10px 0 0',
                    }}
                  >
                    {installment.id === '2' && <Chip message="Pix Parcelado" />}
                    <InstallmentItem
                      installment={installment}
                      value={value}
                      message={`Total: ${maskCurrency(installment.total)}`}
                    />
                    {/* <Box
                      style={{
                        display: 'flex',
                        width: '429px',
                        height: installment.id === '2' && '105px',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          padding: '20px',
                        }}
                      >
                        <Box style={{ display: 'flex', gap: '5px' }}>
                          <Typography
                            fontSize={24}
                            fontWeight={800}
                            color="#4D4D4D"
                          >
                            {installment.id}x
                          </Typography>
                          <Typography
                            fontSize={24}
                            fontWeight={600}
                            color="#4D4D4D"
                          >
                            {maskCurrency(installment.value)}
                          </Typography>
                        </Box>
                        <Typography
                          fontSize={16}
                          fontWeight={600}
                          color="#AFAFAF"
                          textAlign="start"
                          textTransform="capitalize"
                        >
                          Total: {maskCurrency(installment.total)}
                        </Typography>
                      </Box>
                      <Box style={{ marginTop: '23px', marginRight: '22px' }}>
                        <Checkbox
                          icon={<CircleOutlinedBorder />}
                          checkedIcon={<CircleOutlinedIcon />}
                          checked={value == installment.value.toString()}
                          style={{
                            color:
                              value == installment.value.toString()
                                ? ''
                                : '#E5E5E5',
                          }}
                          color="success"
                        />
                      </Box>
                    </Box> */}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </div>
        </>
      )}
    </>
  );
}
