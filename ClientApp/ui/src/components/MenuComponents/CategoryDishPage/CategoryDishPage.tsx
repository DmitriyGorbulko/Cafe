import { useEffect, useState } from 'react'
import {CategoryDish, ICategoryDishProps} from '../CategoryDish/CategoryDish'
import { CircularProgress, ImageList, ImageListItem, Typography } from '@mui/material';
import { CategoryDishApi } from '../../../api/categoryDishApi';


export const CategoryDishPage = () => {

  const [categoryDish, setCategoryDish] = useState<ICategoryDishProps[]>({} as ICategoryDishProps[]);
  const [isDone, setIsDone] = useState<boolean>(false)

  useEffect(() => {
    CategoryDishApi.getAll()
    .then((response) => {
      setCategoryDish(response.data);
      setIsDone(true)
    });
  }, []);

  return (
    !isDone ? <div className="form_center"><CircularProgress /></div> :
    <ImageList sx={{ width: '100%', height: '50%' }}>
      <ImageListItem key="Subheader" cols={3}>
        <Typography paddingBottom={4} paddingLeft={4} align="left" maxWidth={600} variant="h4">Категории блюд:</Typography>
      </ImageListItem>
      {categoryDish.map((item) => <CategoryDish key={item.id} {...item}/>)}
      </ImageList>
  );
}