import React from 'react'
import { Input, TextField } from '@mui/material'
import { Button } from '@mui/material';

export const Registration = () => {
  return (
    <div className='login'>
        <TextField fullWidth label="Email" id="email" color='primary'/>
        <TextField fullWidth label="Password" id="Password" color='primary'/>
        <TextField fullWidth label="Repeat password" id="RepeatPassword" color='primary'/>
        <Button href='/'>Registration</Button>
    </div>
  )
}