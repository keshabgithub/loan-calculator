import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import EmiDisplay from "./EmiDisplay";
import ResultTable from "./ResultTable";

const LoanForm = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [term, setTerm] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [emi, setEmi] = useState(null);
  const [monthlyDetails, setMonthlyDetails] = useState([]);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(term);
    const R = annualRate / 12 / 100;
    const N = years * 12;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    let balance = P;

    const schedule = Array.from({ length: N }, (_, i) => {
      const interest = balance * R;
      const principal = emi - interest;
      balance = balance - principal;

      return {
        month: i + 1,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      };
    });

    return {
      emi: emi.toFixed(2),
      schedule,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { emi, schedule } = calculateEMI();
    setEmi(emi);
    setMonthlyDetails(schedule);
  };

  const resetForm = () => {
    setLoanAmount("");
    setInterestRate("");
    setTerm("");
    setCurrency("USD");
    setEmi(null);
    setMonthlyDetails([]);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
  <Grid item xs={12} sm={4}>
    <TextField
      label="Loan Amount"
      fullWidth
      value={loanAmount}
      onChange={(e) => setLoanAmount(e.target.value)}
      required
    />
  </Grid>
  <Grid item xs={12} sm={4}>
    <TextField
      label="Interest Rate (%)"
      fullWidth
      value={interestRate}
      onChange={(e) => setInterestRate(e.target.value)}
      required
    />
  </Grid>
  <Grid item xs={12} sm={4}>
    <TextField
      label="Term (Years)"
      fullWidth
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      required
    />
  </Grid>



  <Grid item xs={12}>
    <Box display="flex" justifyContent="flex-end">
      <Button
        type="submit"
        variant="contained"
        sx={{ width: { xs: "100%", sm: "200px" }, height: "56px" }}
      >
        CALCULATE
      </Button>
    </Box>
  </Grid>
</Grid>

      </form>

      {emi && (
        <>
          <Box mt={2}>
            <EmiDisplay emi={emi} currency={currency} />
          </Box>

          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                fullWidth
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                color="secondary"
                onClick={resetForm}
                sx={{ height: "56px" }}
              >
                RESET TABLE
              </Button>
            </Grid>
          </Grid>

          <Box mt={2}>
            <ResultTable monthlyDetails={monthlyDetails} currency={currency} />
          </Box>
        </>
      )}
    </Paper>
  );
};

export default LoanForm;
