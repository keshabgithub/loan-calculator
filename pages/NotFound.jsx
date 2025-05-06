import React from "react";
import { Typography, Box } from "@mui/material";

function NotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ color: "black" }}>
        Something went wrong in the application.
      </Typography>
    </Box>
  );
}

export default NotFound;
