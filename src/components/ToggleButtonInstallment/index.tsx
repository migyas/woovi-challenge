import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { maskCurrency } from '@/utils/maskCurrency';
import Chip from '@/components/Chip';
import FirstToggleButton from './FirstToggleButton';
import InstallmentItem from './InstallmentItem';

export interface InstallmentProps {
  id: string;
  value: number;
  betterChoice?: boolean;
  total?: number;
}

interface ToggleButtonInstallmentProps {
  installments: InstallmentProps[];
  value?: string;
  handleOnChange?: (value: string) => void;
}

export default function ToggleButtonInstallment({
  installments,
  value,
  handleOnChange,
}: ToggleButtonInstallmentProps) {
  const installmentFirst = installments[0];

  return (
    <>
      {installments.length > 0 && (
        <>
          <FirstToggleButton
            installmentFirst={installmentFirst}
            handleOnChange={handleOnChange}
            value={value}
          />
          <div>
            <ToggleButtonGroup
              exclusive
              value={value}
              orientation="vertical"
              style={{ marginBottom: '30px', width: '100%' }}
              onChange={(_, val) => handleOnChange(val)}
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
