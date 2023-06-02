import { useEffect, useState } from 'react'
import {CategoryDish, ICategoryDishProps} from '../CategoryDish/CategoryDish'
import axios from 'axios';
import { ICategoryDish } from '../../models/DishModels';
import { CircularProgress, ImageList, ImageListItem, Typography } from '@mui/material';

const baseURL = "http://localhost:5000/";

export const CategoryDishPage = () => {

  const [categoryDish, setCategoryDish] = useState<ICategoryDishProps[]>({} as ICategoryDishProps[]);
  const [isDone, setIsDone] = useState<boolean>(false)

  useEffect(() => {
    axios.get("http://localhost:5000/get_all_category_dishes").then((response) => {
      setCategoryDish(response.data);
      console.log(categoryDish)
      setIsDone(true)
    });
  }, []);

  return (
    !isDone ? <div className="form_center"><CircularProgress /></div> :
    <ImageList sx={{ width: '100%', height: '50%' }}>
      <ImageListItem key="Subheader" cols={3}>
        <Typography paddingBottom={4} paddingLeft={4} align="left" maxWidth={600} variant="h4">Категории блюд:</Typography>
      </ImageListItem>
      {categoryDish.map((item) => <CategoryDish {...item}/>)}
      </ImageList>
  );
}

const itemData: ICategoryDishProps[] = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey'
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern'
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms'
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike'
  },
];