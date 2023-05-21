import { TextField } from '@mui/material'
import React from 'react'

export const Input = (props: string, identificator: string) => {
  return (
    <div>
      <TextField fullWidth label={props} id={identificator} color='primary'/>
    </div>
  )
}