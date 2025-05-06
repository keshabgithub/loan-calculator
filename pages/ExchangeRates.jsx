import React from "react";
import { Typography, Box } from "@mui/material";

function ExchangeRates() {
  return (
    <Box
      sx={{
        position: "fixed", 
        top: 65,
        left: 0,
        padding: "8px 16px",
      }}
    >
      <Typography variant="h6" sx={{ color: "rgba(212, 22, 22, 0.8)" }}>
        Error fetching rates
      </Typography>
    </Box>
  );
}

export default ExchangeRates;
