import React from 'react'
import Ingredient from '../Ingredient/Ingredient'
import { Button } from '@mui/material'

function Dish() {
  return (
    <div>
        <h1>Название</h1>
        <Ingredient/>
        <p>Описание</p>
        <Button variant='contained'>В корзину</Button>
    </div>
  )
}

export default Dish