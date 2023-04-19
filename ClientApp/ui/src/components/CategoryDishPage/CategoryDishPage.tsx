import React, { useEffect, useState } from 'react'
import {CategoryDish} from '../CategoryDish/CategoryDish'
import axios from 'axios';
import { ICategoryDish, IDish } from '../../models/DishModels';
import { title } from 'process';
import { Button } from '@mui/material';

const baseURL = "http://localhost:5000/";

const test : ICategoryDish[] = [{
  id: 1,
  title: "dd",
},
{
  id: 1,
  title: "sss"
}
]

// function onClickCategory(id: number){

// }



export const CategoryDishPage = () => {

  const [categoryDish, setCategoryDish] = useState<ICategoryDish[]>();
  useEffect(() => {
    axios.get("http://localhost:5000/get_all_category_dishes").then((response) => {
      setCategoryDish(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className='login'>
      <ul>
        {categoryDish && categoryDish.map((test) => (
          <CategoryDish key={test.id} title={test.title} />
          // <Button variant='contained' href='/dishPage' key={test.id}>{test.title}</Button>
        ))}
      </ul>
    </div>
    
  );
}