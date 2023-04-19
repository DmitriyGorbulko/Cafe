import React from 'react'
import {Dish} from '../Dish/Dish'
import { Button } from '@mui/material'
import { ICategoryDish } from '../../models/DishModels'
import {useNavigate, generatePath} from 'react-router-dom';

interface ICategoryDishProps{
  title: string;
}

export const CategoryDish = (props: ICategoryDishProps) => {
  
  const history = useNavigate();

  const goToDishPage = () =>{
    history('/dishPage')
  }

  return (
    <Button variant='contained' onClick = {goToDishPage}>{props.title}</Button>
  )
}