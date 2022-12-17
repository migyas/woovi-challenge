import { useState } from "react";
import {
  Button,
  Checkbox,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
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
          maxWidth: "42px",
          padding: "6px 20px",
          backgroundColor: "#E5E5E5",
          borderRadius: "100px",
        }}
      >
        <Typography
          fontSize={18}
          textAlign="center"
          fontWeight={800}
          color="#4D4D4D"
        >
          Pix
        </Typography>
      </Box>
      {parcels.length > 0 && (
        <>
          <div>
            <ToggleButtonGroup
              value={value}
              exclusive
              orientation="vertical"
              onChange={(_, val) => handleChooseParcel(val)}
              style={{ marginBottom: "30px" }}
            >
              {parcels[0] && (
                <ToggleButton
                  size="small"
                  value={parcels[0].value}
                  selected={value == parcels[0].value.toString()}
                >
                  <Typography>{parcels[0].value}</Typography>
                  <Checkbox
                    icon={<CircleOutlinedBorder />}
                    checkedIcon={<CircleOutlinedIcon />}
                    checked={value == parcels[0].value.toString()}
                    color="success"
                  />
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
                          alignItems: "center",
                          padding: "1px 20px",
                          backgroundColor: "#E5E5E5",
                          borderRadius: "100px",
                          position: "absolute",
                          top: "-15px",
                          left: "20px",
                          width: "max-content",
                        }}
                      >
                        <Typography
                          fontSize={18}
                          textAlign="center"
                          fontWeight={800}
                          color="#4D4D4D"
                          textTransform="capitalize"
                        >
                          Pix Parcelado
                        </Typography>
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
                            onChange={(_, checked) => setChecked(checked)}
                            color="success"
                          />
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
                          onChange={(_, checked) => setChecked(checked)}
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
