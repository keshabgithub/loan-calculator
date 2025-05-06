import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const ResultTable = ({ monthlyDetails, currency }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Amortization Schedule ({currency})
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {monthlyDetails.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.principal} {currency}</TableCell>
              <TableCell>{row.interest} {currency}</TableCell>
              <TableCell>{row.balance} {currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
