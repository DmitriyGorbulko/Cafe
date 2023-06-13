import React from 'react'
import {Ingredient} from '../MenuComponents/Ingredient/Ingredient'
import { Button } from '@mui/material'

export const BasketItem = () => {
  return (
    <div>
        <h1>Название</h1>
        <Ingredient/>
        <p>Описание</p>
        <Button variant='contained'>-</Button>
    </div>
  )
}