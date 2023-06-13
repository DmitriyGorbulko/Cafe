import React from 'react'
import {BasketItem} from '../BasketItem/BasketItem'
import { Button } from '@mui/material'

export const Basket = () => {
  return (
    <div>
        <BasketItem/>
        <Button>Оплатить</Button>
    </div>
  )
}
