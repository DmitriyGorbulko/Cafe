import React, { FC } from 'react'
import {Dish} from '../Dish/Dish'
import { Button, Card, CardActions } from '@mui/material'
import { ICategoryDish } from '../../models/DishModels'
import {useNavigate, generatePath} from 'react-router-dom';
import img from '../../test/logo192.png';

interface ICategoryDishProps{
  id: number;
  title: string;
}

export const CategoryDish: FC<ICategoryDishProps> = ({ title, id }) => {
  
  const navigation = useNavigate();

  const goToDishPage = (id: number) =>{
    navigation(`/dishPage/${id}`)
  }

  return (
    <Card>
      <CardActions>
      <Button variant='contained' onClick = {() => navigation(`/dishPage/${id}`)}>{title}</Button>
      </CardActions>
      {/* <img src={img} /> */}
      
    </Card>
  )
}