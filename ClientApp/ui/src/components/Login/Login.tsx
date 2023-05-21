import React from 'react'
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { Input } from '../Input/Input';

// function ToHome() {
    
// }

export const Login = () => {
  return (
    <div className='login'>
        <TextField fullWidth label="Email" id="email" color='primary'/>
        <TextField fullWidth label="Password" id="Password" color='primary'/>
        <Button variant="contained" color="success" href='/home'>Login</Button>
        <Button variant="contained" color="success" href='/registration'>Registration</Button>
    </div>
  ) 
}