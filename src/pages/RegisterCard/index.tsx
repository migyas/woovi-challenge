import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Select,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";
import { mask } from "remask";
import { mockParcelsCreditCard, mockParcelsRemaining } from "@/utils/mocks";
import Divider from "@mui/material/Divider";
import { maskCurrency } from "@/utils/maskCurrency";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Timeline from "@/components/Timeline";
import { formatDate } from "@/utils/formatDate";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";

export default function RegisterCard() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const options = [
    {
      value: "15300",
      label: "1x de R$ 15.300,00",
    },
  ];

  async function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Grid>
      <header>
        <Typography variant="h1" align="center" mb="2.8rem">
          João, pague o restante em 1x no cartão
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container flexDirection="column">
            <Grid container gap={3} mb="2rem">
              <TextField
                {...register("name", { required: "Campo obrigátorio" })}
                label="Nome completo"
                placeholder="Nome completo"
                error={!!errors.name}
                helperText={errors.name?.message.toString()}
                fullWidth
              />
              <TextField
                label="CPF"
                {...register("cpf", { required: "Campo obrigátorio" })}
                fullWidth
                onChange={(e) =>
                  setValue("cpf", mask(e.target.value, ["999.999.999-99"]))
                }
                error={!!errors.cpf}
                helperText={errors.cpf?.message.toString()}
              />
              <TextField
                {...register("numberCard", { required: "Campo obrigátorio" })}
                label="Número do cartão"
                placeholder="Número do cartão"
                onChange={(e) =>
                  setValue(
                    "numberCard",
                    mask(e.target.value, ["9999 9999 9999 9999"])
                  )
                }
                error={!!errors.numberCard}
                helperText={errors.numberCard?.message.toString()}
                fullWidth
              />
              <Grid container spacing={{ xs: 3, sm: 2 }}>
                <Grid item xs={6} sm={4}>
                  <TextField
                    {...register("expiredCard", {
                      required: "Campo obrigátorio",
                    })}
                    onChange={(e) =>
                      setValue("expiredCard", mask(e.target.value, ["99/99"]))
                    }
                    label="Vencimento"
                    placeholder="Vencimento"
                    error={!!errors.expiredCard}
                    helperText={errors.expiredCard?.message.toString()}
                  />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <TextField
                    {...register("CVV", { required: "Campo obrigátorio" })}
                    label="CVV"
                    onChange={(e) =>
                      setValue("CVV", mask(e.target.value, ["9999"]))
                    }
                    placeholder="CVV"
                    error={!!errors.CVV}
                    helperText={errors.CVV?.message.toString()}
                  />
                </Grid>
              </Grid>
              <Controller
                name="parcel"
                control={control}
                rules={{ required: "Campo obrigátorio" }}
                defaultValue={""}
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth>
                    <InputLabel id="parcel">Parcelas</InputLabel>
                    <Select
                      id="parcel"
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
            <Grid
              mb="2rem"
              container
              flexDirection="column"
              alignItems="center"
              style={{ padding: 0 }}
            >
              <Typography style={{ color: "#B2B2B2", fontWeight: 600 }}>
                Prazo de pagamento:
              </Typography>
              <Typography style={{ color: "#4D4D4D", fontWeight: 800 }}>
                {formatDate(new Date(), "dd/MM/yyyy - hh:mm")}
              </Typography>
            </Grid>
            <Grid mb="2rem">
              <Timeline items={mockParcelsCreditCard} />
            </Grid>
            <Divider flexItem />
            <Grid
              container
              justifyContent="space-between"
              alignItems="end"
              mt="2rem"
              mb="2rem"
            >
              <Typography fontSize="1.4rem" style={{ color: "#4D4D4D" }}>
                CET: 0,5%
              </Typography>
              <Typography
                fontSize="1.8rem"
                fontWeight={600}
                style={{ color: "#4D4D4D" }}
              >
                Total: {maskCurrency(30600)}
              </Typography>
            </Grid>
            <Divider flexItem />
            <Grid container justifyContent="space-between">
              <Accordion
                variant="outlined"
                style={{
                  border: "none",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={800} style={{ color: "#4D4D4D" }}>
                    Como funciona?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Divider flexItem />
            <Grid
              mt="2rem"
              mb="4.1rem"
              container
              flexDirection="column"
              alignItems="center"
            >
              <Typography style={{ color: "#B2B2B2", fontWeight: 600 }}>
                Identificador:
              </Typography>
              <Typography style={{ color: "#4D4D4D", fontWeight: 800 }}>
                2c1b951f356c4680b13ba1c9fc889c47
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </header>
    </Grid>
  );
}
