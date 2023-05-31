import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {Ingredient}
 from '../Ingredient/Ingredient'
import { Button } from '@mui/material'
import { IDish } from '../../models/DishModels'
import axios from 'axios'
import { API_URL } from '../../API'

export const Dish = () => {
  const pageParams = useParams();
  const [ dish, setDish] = useState<IDish[]>()

  useEffect(() => {
    axios.get(`${API_URL}/dish/get_dish_by_category_id/${pageParams.id}`).then((response) => {
      setDish(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
        <h1>Название</h1>
        <Ingredient/>
        <h1>{pageParams.id}</h1>
        <p>Описание</p>
        {dish && <div>
          <div>{dish?.map((item: IDish) => (
          <div style={{ marginTop: 10, display:"flex"}}>
            <div>
            <div>{item.title}
            <div>{item.description}</div>
            </div>
            <Button variant='contained'>В корзину</Button>
          </div>
          </div> 
        ))}</div>
          </div>}
        
    </div>
  )
}