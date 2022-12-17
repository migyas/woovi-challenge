import { useState } from "react";
import {
  Button,
  Checkbox,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import {
  CircleOutlined as CircleOutlinedBorder,
  CheckCircle as CircleOutlinedIcon,
} from "@mui/icons-material/";
import { maskCurrency } from "../utils/maskCurrency";

export default function Components() {
  const [parcels] = useState([
    {
      id: "1",
      value: 30500,
      betterChoice: false,
    },
    {
      id: "2",
      value: 15300,
      total: 30600,
      betterChoice: false,
    },
    {
      id: "3",
      value: 10196.66,
      total: 30620,
      betterChoice: false,
    },
    {
      id: "4",
      value: 7725,
      total: 30900,
      betterChoice: true,
    },
    {
      id: "5",
      value: 6300,
      total: 31500,
      betterChoice: false,
    },
    {
      id: "6",
      value: 5283.33,
      total: 31699.98,
      betterChoice: false,
    },
    {
      id: "7",
      value: 4542.85,
      total: 31800,
      betterChoice: false,
    },
  ]);
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const parcelFirst = parcels[0];

  function handleChooseParcel(value: string) {
    setValue(value);
  }
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
      <div>
        <Button>hOPE</Button>
      </div>
      <br />
      <Box
        style={{
          background: "#133A6F",
          color: "#ffffff",
          width: "max-content",
          padding: "6px 30px 6px 10px",
          borderRadius: "5px",
          clipPath:
            "polygon(100% 0, 100% 6%, 96% 52%, 100% 95%, 100% 100%, 0 100%, 0 0)",
        }}
      >
        🤑 <strong>{maskCurrency(300)}</strong> de volta no seu Pix na hora
      </Box>
      <br />
      <br />

      {parcels.length > 0 && (
        <>
          <div>
            <ToggleButtonGroup
              value={value}
              exclusive
              orientation="vertical"
              onChange={(_, val) => handleChooseParcel(val)}
              style={{ marginBottom: "34px", width: "429px" }}
            >
              {parcelFirst && (
                <ToggleButton
                  key={parcelFirst.id}
                  value={parcelFirst.value}
                  selected={value == parcelFirst.value.toString()}
                  style={{ borderRadius: "10px" }}
                >
                  <Box
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "20px",
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
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "137px",
                      maxWidth: "429px",
                      width: "100%",
                      gap: "7px",
                      padding: "0 20px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Box style={{ display: "flex", gap: "10px" }}>
                          <Typography
                            fontSize={24}
                            fontWeight={800}
                            color="#4D4D4D"
                          >
                            {parcels[0].id}x
                          </Typography>
                          <Typography
                            fontSize={24}
                            fontWeight={600}
                            color="#4D4D4D"
                          >
                            {maskCurrency(parcels[0].value)}
                          </Typography>
                        </Box>
                        <Typography
                          fontWeight={600}
                          color="#03D69D"
                          textAlign="start"
                          textTransform="capitalize"
                        >
                          Ganhe <strong>3%</strong> de Cashback
                        </Typography>
                      </Box>
                      <Box>
                        <Checkbox
                          icon={<CircleOutlinedBorder />}
                          checkedIcon={<CircleOutlinedIcon />}
                          checked={value == parcelFirst.value.toString()}
                          color="success"
                        />
                      </Box>
                    </Box>
                    <Box
                      style={{
                        background: "#133A6F",
                        textTransform: "none",
                        color: "#ffffff",
                        textAlign: "start",
                        padding: "6px 0 6px 10px",
                        borderRadius: "5px",
                        width: "98%",
                        clipPath:
                          "polygon(100% 0, 100% 6%, 96% 52%, 100% 95%, 100% 100%, 0 100%, 0 0)",
                      }}
                    >
                      <Typography fontSize={16}>
                        🤑 <strong>{maskCurrency(300)}</strong> de volta no seu
                        Pix na hora
                      </Typography>
                    </Box>
                  </Box>
                  {/* <Box
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "20px",
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
                      display: "flex",
                      maxWidth: "429px",
                      width: "max-content",
                      height: "137px",
                      justifyContent: "space-between",
                      position: "relative",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "28px 20px 22px 20px",
                      }}
                    >
                      <Box style={{ display: "flex", gap: "10px" }}>
                        <Typography
                          fontSize={24}
                          fontWeight={800}
                          color="#4D4D4D"
                        >
                          {parcels[0].id}x
                        </Typography>
                        <Typography
                          fontSize={24}
                          fontWeight={600}
                          color="#4D4D4D"
                        >
                          {maskCurrency(parcels[0].value)}
                        </Typography>
                      </Box>
                      <Typography
                        fontWeight={600}
                        color="#03D69D"
                        textAlign="start"
                        textTransform="capitalize"
                      >
                        Ganhe <strong>3%</strong> de Cashback
                      </Typography>

                      <Box style={{ marginTop: "23px", marginRight: "22px" }}>
                        <Checkbox
                          icon={<CircleOutlinedBorder />}
                          checkedIcon={<CircleOutlinedIcon />}
                          checked={value == parcels[0].value.toString()}
                          color="success"
                        />
                      </Box>
                    </Box>
                    <Box
                      style={{
                        background: "#133A6F",
                        color: "#ffffff",
                        width: "max-content",
                        textAlign: "start",
                        padding: "6px 0 6px 10px",
                        textTransform: "none",
                        borderRadius: "5px",
                        clipPath:
                          "polygon(100% 0, 100% 6%, 96% 52%, 100% 95%, 100% 100%, 0 100%, 0 0)",
                      }}
                    >
                      <Typography fontSize={16}>
                        🤑 <strong>{maskCurrency(300)}</strong> de volta no seu
                        Pix na hora
                      </Typography>
                    </Box>
                  </Box> */}
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          </div>
          <div>
            <ToggleButtonGroup
              exclusive
              value={value}
              orientation="vertical"
              style={{ marginBottom: "30px" }}
              onChange={(_, val) => handleChooseParcel(val)}
            >
              {parcels.map((parcel) => {
                if (parcel.id === "1") {
                  return;
                }
                if (parcel.id === "2") {
                  return (
                    <ToggleButton
                      key={parcel.id}
                      value={parcel.value}
                      style={{ borderRadius: "10px 10px 0 0" }}
                    >
                      <Box
                        style={{
                          position: "absolute",
                          top: "-15px",
                          left: "20px",
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
                              Pix Parcelado
                            </Typography>
                          }
                        />
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          width: "429px",
                          height: "105px",
                          justifyContent: "space-between",
                          position: "relative",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "28px 20px 22px 20px",
                          }}
                        >
                          <Box style={{ display: "flex", gap: "10px" }}>
                            <Typography
                              fontSize={24}
                              fontWeight={800}
                              color="#4D4D4D"
                            >
                              {parcel.id}x
                            </Typography>
                            <Typography
                              fontSize={24}
                              fontWeight={600}
                              color="#4D4D4D"
                            >
                              {maskCurrency(parcel.value)}
                            </Typography>
                          </Box>
                          <Typography
                            fontSize={16}
                            fontWeight={600}
                            color="#AFAFAF"
                            textAlign="start"
                            textTransform="capitalize"
                          >
                            Total: {maskCurrency(parcel.total)}
                          </Typography>
                        </Box>
                        <Box style={{ marginTop: "23px", marginRight: "22px" }}>
                          <Checkbox
                            icon={<CircleOutlinedBorder />}
                            checkedIcon={<CircleOutlinedIcon />}
                            checked={value == parcel.value.toString()}
                            color="success"
                          />
                        </Box>
                      </Box>
                    </ToggleButton>
                  );
                }

                if (parcel.betterChoice) {
                  return (
                    <ToggleButton key={parcel.id} value={parcel.value}>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          height: "137px",
                          maxWidth: "429px",
                          width: "100%",
                          gap: "7px",
                          padding: "0 20px",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <Box style={{ display: "flex", gap: "10px" }}>
                              <Typography
                                fontSize={24}
                                fontWeight={800}
                                color="#4D4D4D"
                              >
                                {parcel.id}x
                              </Typography>
                              <Typography
                                fontSize={24}
                                fontWeight={600}
                                color="#4D4D4D"
                              >
                                {maskCurrency(parcel.value)}
                              </Typography>
                            </Box>
                            <Typography
                              fontWeight={600}
                              color="#AFAFAF"
                              textAlign="start"
                              textTransform="capitalize"
                            >
                              Total: {maskCurrency(parcel.total)}
                            </Typography>
                          </Box>
                          <Box>
                            <Checkbox
                              icon={<CircleOutlinedBorder />}
                              checkedIcon={<CircleOutlinedIcon />}
                              checked={value == parcel.value.toString()}
                              color="success"
                            />
                          </Box>
                        </Box>
                        <Box
                          style={{
                            background: "#133A6F",
                            textTransform: "none",
                            color: "#ffffff",
                            textAlign: "start",
                            padding: "6px 0 6px 10px",
                            borderRadius: "5px",
                            width: "98%",
                            clipPath:
                              "polygon(100% 0, 100% 6%, 96% 52%, 100% 95%, 100% 100%, 0 100%, 0 0)",
                          }}
                        >
                          <Typography fontSize={16}>
                            <strong>3% de juros:</strong> Melhor opção de
                            parcelamento
                          </Typography>
                        </Box>
                      </Box>
                    </ToggleButton>
                  );
                }
                return (
                  <ToggleButton
                    key={parcel.id}
                    value={parcel.value}
                    style={{ padding: 0 }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        width: "429px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          padding: "20px",
                        }}
                      >
                        <Box style={{ display: "flex", gap: "10px" }}>
                          <Typography
                            fontSize={24}
                            fontWeight={800}
                            color="#4D4D4D"
                          >
                            {parcel.id}x
                          </Typography>
                          <Typography
                            fontSize={24}
                            fontWeight={600}
                            color="#4D4D4D"
                          >
                            {maskCurrency(parcel.value)}
                          </Typography>
                        </Box>
                        <Typography
                          fontSize={16}
                          fontWeight={600}
                          color="#AFAFAF"
                          textAlign="start"
                          textTransform="capitalize"
                        >
                          Total: {maskCurrency(parcel.total)}
                        </Typography>
                      </Box>
                      <Box style={{ marginTop: "23px", marginRight: "22px" }}>
                        <Checkbox
                          icon={<CircleOutlinedBorder />}
                          checkedIcon={<CircleOutlinedIcon />}
                          checked={value == parcel.value.toString()}
                          color="success"
                        />
                      </Box>
                    </Box>
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </div>
        </>
      )}
    </div>
  );
}
