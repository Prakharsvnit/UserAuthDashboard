import React from 'react';
import { Button } from "@mui/material";
import {Routes,Route,useNavigate} from 'react-router-dom'
import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";
import Dashboard from "./Forms/Dashboard"

export default function Home() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login')
      };

    const navigateToRegister = () => {
        navigate('/register')
    }

    const navigateToDashboard = () => {
        navigate('/dashboard')
    }

  return (

<>
      <Button sx={{maxWidth: '90px', maxHeight: '50px', minWidth: '90px', minHeight: '50px'}} onClick={navigateToLogin} variant="contained">Login</Button>
      <Button sx={{maxWidth: '90px', maxHeight: '50px', minWidth: '90px', minHeight: '50px'}} onClick={navigateToRegister} variant="contained">Register</Button>
      <Button sx={{maxWidth: '90px', maxHeight: '50px', minWidth: '90px', minHeight: '50px'}} onClick={navigateToDashboard} variant="contained">Dashboard</Button>

      <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
</>




  );
}
