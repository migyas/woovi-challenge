import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PixQRCode, PixQRCodeProps, PixParams } from "pix-react";
import { maskCurrency } from "../../utils/maskCurrency";

export default function PaymentFirstParcel() {
  const [editingParams] = useState<PixParams>({
    chave: "+5561993868323",
    cidade: "Brasília",
    recebedor: "Yan Dias",
    valor: 1,
    identificador: "12345",
    mensagem: "Woovi challenge",
    cep: "71570812",
  });
  const { valor, ...pixParams } = editingParams;
  const params: PixQRCodeProps = {
    pixParams: {
      ...pixParams,
      valor: Number(valor) || 0,
    },
    size: 332,
  };
  const { firstParcel } = {
    firstParcel: 15300,
  };

  return (
    <Grid>
      <header>
        <Typography variant="h1" align="center">
          João, pague a entrada de {maskCurrency(firstParcel)} pelo Pix
        </Typography>
      </header>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            padding: "1rem",
            border: "2px solid #03D69D",
            width: "max-content",
            borderRadius: "1rem",
          }}
        >
          <PixQRCode {...params} />
        </Box>
      </Grid>
    </Grid>
  );
}
