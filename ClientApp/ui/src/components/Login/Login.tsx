
import { Input } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// function ToHome() {
    
// }

const Login = () => {
  return (
    
    <div className='login'>
      
        <Input/>
        <Input/>
        <Link className='loginButton' to='/home' color='success'>login</Link>
        <Link className='loginButton' to='/registration' color='success' >registration</Link>
    </div>
  ) 
}



export default Login
