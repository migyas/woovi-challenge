import { useState } from "react";
import {
  Box,
  Chip,
  ToggleButtonGroup,
  Typography,
  Checkbox,
  ToggleButton,
} from "@mui/material";
import {
  CircleOutlined as CircleOutlinedBorder,
  CheckCircle as CircleOutlinedIcon,
} from "@mui/icons-material/";
import { maskCurrency } from "@/utils/maskCurrency";
import FeatureMark from "@/components/FeatureMark";

interface ToggleButtonParcelProps {
  parcels: any[];
}

export default function ToggleButtonParcel({
  parcels,
}: ToggleButtonParcelProps) {
  const [value, setValue] = useState("");
  const parcelFirst = parcels[0];

  function handleChooseParcel(value: string) {
    setValue(value);
  }

  return (
    <>
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
                        <Box style={{ display: "flex", gap: "5px" }}>
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
                          textTransform="none"
                        >
                          Ganhe <strong>3%</strong> de Cashback
                        </Typography>
                      </Box>
                      <Box>
                        <Checkbox
                          icon={<CircleOutlinedBorder />}
                          checkedIcon={<CircleOutlinedIcon />}
                          checked={value == parcelFirst.value.toString()}
                          style={{
                            color:
                              value == parcelFirst.value.toString()
                                ? ""
                                : "#E5E5E5",
                          }}
                          color="success"
                        />
                      </Box>
                    </Box>
                    <FeatureMark
                      firstParcel
                      value={parcelFirst.value}
                      emoticon
                    />
                  </Box>
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
                            <Box style={{ display: "flex", gap: "5px" }}>
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
                              style={{
                                color:
                                  value == parcel.value.toString()
                                    ? ""
                                    : "#E5E5E5",
                              }}
                              color="success"
                            />
                          </Box>
                        </Box>
                        <FeatureMark />
                      </Box>
                    </ToggleButton>
                  );
                }
                return (
                  <ToggleButton
                    key={parcel.id}
                    value={parcel.value}
                    style={{
                      borderRadius: parcel.id === "2" && "10px 10px 0 0",
                    }}
                  >
                    {parcel.id === "2" && (
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
                    )}
                    <Box
                      style={{
                        display: "flex",
                        width: "429px",
                        height: parcel.id === "2" && "105px",
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
                        <Box style={{ display: "flex", gap: "5px" }}>
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
                          style={{
                            color:
                              value == parcel.value.toString() ? "" : "#E5E5E5",
                          }}
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
    </>
  );
}
