import React from 'react'
import DishBuy from '../DishBuy/DishBuy'
import { Button } from '@mui/material'

function Basket() {
  return (
    <div>
        <DishBuy/>
        <Button>Оплатить</Button>
    </div>
  )
}

export default Basket