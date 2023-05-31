import React, { useEffect, useState } from 'react'
import {CategoryDish} from '../CategoryDish/CategoryDish'
import axios from 'axios';
import { ICategoryDish, IDish } from '../../models/DishModels';
import { title } from 'process';
import { Button, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from '@mui/material';

const baseURL = "http://localhost:5000/";

export const CategoryDishPage = () => {

  const [categoryDish, setCategoryDish] = useState<ICategoryDish[]>();
  useEffect(() => {
    axios.get("http://localhost:5000/get_all_category_dishes").then((response) => {
      setCategoryDish(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <ImageList sx={{ width: '100%', height: '50%' }}>
      <ImageListItem key="Subheader" cols={3}>
        <Typography paddingBottom={4} paddingLeft={4} align="left" maxWidth={600} variant="h4">Категории блюд:</Typography>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} rows={item.rows}> {/*убрать rows для выравнивания плитки*/}
          <img
            src={`${item.img}?w=500&fit=crop&auto=format`}
            srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=1 1x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

//   return (
//     <div className='form_center'>
//       <ul>
//         {categoryDish && categoryDish.map((item) => (
//           <CategoryDish key={item.id} title={item.title} id={item.id} />
//           // <Button variant='contained' href='/dishPage' key={test.id}>{test.title}</Button>
//         ))}
//       </ul>
//     </div>
//   );
// }