import { Link } from 'react-router-dom';
import React from 'react'
import { Button } from '@mui/material';

export const EditMenu = () => {
  return (
    <div className='divEditForm'>
        <Button variant='contained' href='/editCategoryIngredient'>Категория ингредиентов</Button>
        <Button variant='contained' href='/editCategoryDish'>Категория блюд</Button>
        <Button variant='contained' href='/editIngredient'>Ингредиенты</Button>
        <Button variant='contained' href='/editDish'>Блюд</Button>
        <Button variant='contained' href='/editTable'>Столов</Button>      
    </div>
  )
}