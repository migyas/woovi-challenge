import { Box, Grid, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { maskCurrency } from "@/utils/maskCurrency";

interface TimelineProps {
  items?: any[];
}

export default function Timeline({ items }: TimelineProps) {
  if (!items) return;
  const lastItem = items.length - 1;

  return (
    <>
      {items.length > 0 &&
        items.map((item, i) => {
          return (
            <Grid
              key={item.id}
              style={{
                display: "flex",
                minWidth: "42.7rem",
                justifyContent: "space-between",
              }}
            >
              <Box style={{ display: "flex", gap: "8px" }}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {item.checked ? (
                    <Box
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#03D69D",
                        position: "relative",
                      }}
                    >
                      <CheckRoundedIcon
                        style={{
                          position: "absolute",
                          left: "2px",
                          top: "2px",
                          fontSize: "12px",
                          color: "#ffffff",
                        }}
                      />
                    </Box>
                  ) : (
                    <Box
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        border:
                          item.checked || !(lastItem === i)
                            ? "2px solid #03D69D"
                            : "2px solid #E5E5E5",
                      }}
                    />
                  )}
                  {!(lastItem === i) && (
                    <Box
                      style={{
                        width: "2px",
                        height: "24px",
                        background: "#E5E5E5",
                        position: "relative",
                      }}
                    />
                  )}
                </Box>
                {lastItem === i ? (
                  <Typography
                    fontSize={18}
                    fontWeight={600}
                    style={{ marginTop: "-6px", color: "#4D4D4D" }}
                  >
                    2ª no cartão
                  </Typography>
                ) : (
                  <Typography
                    fontSize={18}
                    fontWeight={600}
                    style={{ marginTop: "-6px", color: "#4D4D4D" }}
                  >
                    1ª entrada no Pix
                  </Typography>
                )}
              </Box>
              <Typography
                fontSize={18}
                fontWeight={800}
                style={{ marginTop: "-6px", color: "#4D4D4D" }}
              >
                {maskCurrency(item.value)}
              </Typography>
            </Grid>
          );
        })}
    </>
  );
}
