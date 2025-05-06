import React from "react";
import { Typography, Box } from "@mui/material";

const EmiDisplay = ({ emi, currency }) => {
  return (
    <Box mt={3}>
      <Typography variant="h6">
        Monthly EMI: {currency === "USD" ? "$" : currency + " "}
        {emi}
      </Typography>
    </Box>
  );
};

export default EmiDisplay;
