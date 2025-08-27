import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute'; // 1. Import PrivateRoute
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container component="main" maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* 2. Create a Protected Route */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<DashboardPage />} />
            {/* You can add more protected routes here later */}
          </Route>

        </Routes>
      </Container>
    </Router>
  );
}

export default App;