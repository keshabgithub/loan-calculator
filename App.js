import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./component/Navbar";
import LoanForm from "./component/LoanForm";
import ExchangeRates from "./pages/ExchangeRates";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  

  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<LoanForm />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
