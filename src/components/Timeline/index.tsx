import { Box, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { maskCurrency } from "../../utils/maskCurrency";

interface TimelineProps {
  items?: any[];
}

export default function Timeline({ items }: TimelineProps) {
  const lastItem = items.length - 1;

  return (
    <>
      {items.length > 0 &&
        items.map((item, i) => {
          return (
            <Box
              key={item.id}
              style={{
                display: "flex",
                width: "max-content",
                justifyContent: "space-between",
              }}
            >
              <Box style={{ display: "flex", gap: "8px", minWidth: "300px" }}>
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
                        border: "2px solid #03D69D",
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
                <Typography fontSize={18} style={{ marginTop: "-6px" }}>
                  1ª entrada no Pix
                </Typography>
              </Box>
              <Typography
                fontSize={18}
                fontWeight={800}
                style={{ marginTop: "-6px" }}
              >
                {maskCurrency(item.value)}
              </Typography>
            </Box>
          );
        })}
    </>
  );
}
