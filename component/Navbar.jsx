import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <Button color="inherit" component={Link} to="/">
          HOME
        </Button>
        <Button color="inherit" component={Link} to="/exchange-rates">
          Exchange Rates
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/random-page">
          Error Page
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
