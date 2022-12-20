import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Select,
  Input,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";

export default function RegisterCard() {
  const refCPF = useRef();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState("");
  const options = [
    {
      value: "15300",
      label: "1x de R$ 15.300,00",
    },
  ];

  async function onSubmit(data: any) {
    console.log(data);
  }
  console.log(value);

  return (
    <Grid>
      <header>
        <Typography variant="h1" align="center" mb="2.8rem">
          João, pague o restante em 1x no cartão
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container gap={3}>
            <TextField
              {...register("name", { required: "Campo obrigátorio" })}
              label="Nome completo"
              placeholder="Nome completo"
              error={!!errors.name}
              helperText={errors.name?.message.toString()}
              fullWidth
            />
            <FormControl fullWidth={false} sx={{ width: "290px", mb: 6 }}>
              <Controller
                name="cnpj"
                control={control}
                render={(props) => (
                  <InputMask
                    mask="99.999.999/9999-99"
                    value={props.field.value}
                    disabled={false}
                    onChange={(value): void => {
                      props.field.onChange(value);
                    }}
                  >
                    <TextField
                      disabled={false}
                      name="cnpj"
                      type="text"
                      label="Cnpj"
                      placeholder="(e.g.: 60.133.365/0001-16)"
                      error={Boolean(errors.cnpj)}
                    />
                  </InputMask>
                )}
              />
            </FormControl>
            {/* <Controller
              control={control}
              name="CPF"
              render={({ field }) => (
                
              )}
            /> */}
            <TextField
              label="CPF"
              placeholder="CPF"
              error={!!errors.CPF}
              helperText={errors.CPF?.message.toString()}
              fullWidth
            ></TextField>
            <TextField
              {...register("numberCard", { required: "Campo obrigátorio" })}
              label="Número do cartão"
              placeholder="Número do cartão"
              error={!!errors.numberCard}
              helperText={errors.numberCard?.message.toString()}
              fullWidth
            />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  {...register("expiredCard", {
                    required: "Campo obrigátorio",
                  })}
                  label="Vencimento"
                  placeholder="Vencimento"
                  error={!!errors.expiredCard}
                  helperText={errors.expiredCard?.message.toString()}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register("CVV", { required: "Campo obrigátorio" })}
                  label="CVV"
                  placeholder="CVV"
                  error={!!errors.CVV}
                  helperText={errors.CVV?.message.toString()}
                />
              </Grid>
            </Grid>
            <Controller
              name="parcels"
              control={control}
              rules={{ required: "Campo obrigátorio" }}
              defaultValue={""}
              render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth>
                  <InputLabel id="parcels">Parcelas</InputLabel>
                  <Select
                    id="parcels"
                    label="Parcelas"
                    {...field}
                    error={!!error}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {error ? (
                    <FormHelperText error>{error?.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
            <Button type="submit" fullWidth>
              Pagar
            </Button>
          </Grid>
        </Box>
      </header>
    </Grid>
  );
}
