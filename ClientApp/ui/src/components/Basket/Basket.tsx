import React from 'react'
import {DishBuy} from '../DishBuy/DishBuy'
import { Button } from '@mui/material'

export const Basket = () => {
  return (
    <div>
        <DishBuy/>
        <Button>Оплатить</Button>
    </div>
  )
}