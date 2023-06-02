import React, { useEffect, useState } from 'react'
import { CircularProgress, ImageList, ImageListItem, Typography } from '@mui/material'
import {Dish} from '../Dish/Dish'
import { IDish } from '../../models/DishModels'
import axios from 'axios'
import { API_URL } from '../../API'
import { useParams } from 'react-router-dom'

export const DishPage = () => {
  const [dishes, setDish] = useState<IDish[]>({} as IDish[])
  const [isDone, setIsDone] = useState<boolean>(false)
  const pageParams = useParams();

  useEffect(() => {
    axios.get(`${API_URL}/dish/get_dish_by_category_id/${pageParams.id}`).then((response) => {
      setDish(response.data as IDish[]);
      setIsDone(true)
    });
  }, []);
  
  return (
    !isDone ? <div className="form_center"><CircularProgress /></div> :
    <ImageList sx={{ width: '100%', height: '50%' }}>
    <ImageListItem key="Subheader" cols={3}>
      <Typography paddingBottom={4} paddingLeft={4} align="left" maxWidth={600} variant="h4">Блюда:</Typography>
    </ImageListItem>
    {dishes?.map((item) => <Dish {...item}/>)}
    </ImageList>
  )
}
