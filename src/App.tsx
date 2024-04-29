import React, { useState } from 'react'
import { styled } from "@mui/system";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import CasinoPlay from './pages/CasinoPlay';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/play" element={<CasinoPlay />} />
          <Route path="*" element={<DashBoard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
