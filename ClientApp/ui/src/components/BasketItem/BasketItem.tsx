import React from 'react'
import {Ingredient} from '../MenuComponents/Ingredient/Ingredient'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export const BasketItem = () => {

  const categoryName = 'category1';
  const dishName = 'dish1';
  const ingredients = 'ingredient1, ingredient2, ingredient3'; 

  return (
    <Card sx={{ maxWidth: 345, ml: 5, mt: 5 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>{categoryName}</b>: {dishName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ingredients}
        </Typography>
      </CardContent>
    </Card>
  )
}