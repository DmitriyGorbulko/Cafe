import React, { FC, useEffect, useState} from 'react'
import {Input} from '../Input/Input'
import axios from 'axios'
import { API_URL } from '../../API'
import { ICategoryDish, IDish } from '../../models/DishModels'
interface ICreateDish {
  title: string,
  description: string,
  cAtegoryDishId: number,
  recipe: string
}
export const CreateDish = () => {
const [ createDish, setCreateDish] = useState<ICreateDish | undefined>({
    cAtegoryDishId: 0,
    title: '',
    description: '',
    recipe: '',
})
const [ categoryDist, setCategoryDist ] = useState<ICategoryDish[]>()

const GetCategoryDish = ( ) => {
  try {
    axios.get(`http://localhost:5000/get_all_category_dishes`).then((response) => {
      setCategoryDist(response.data);
      console.log(response.data);
    });
  }

  catch {}
}

const CreateDish = async () => {

  try {
    const response = await axios.post(`http://localhost:5000/create_dish
    `, createDish, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  GetCategoryDish()
}, []);

const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedId = parseInt(event.target.value);
  const newCreateDish: ICreateDish = {
    cAtegoryDishId: selectedId,
    title: '',
    description: '',
    recipe: '',
  };
  setCreateDish(newCreateDish);
};

return (
  <div>
    <select value={createDish?.cAtegoryDishId} onChange={handleSelectChange}>
      {categoryDist?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
   
    {createDish && (
        <div>
          <input
            type="text"
            placeholder="Title"
            value={createDish.title}
            onChange={(event) =>
              setCreateDish({
               ...createDish,
                title: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={createDish.description}
            onChange={(event) =>
              setCreateDish({
               ...createDish,
                description: event.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Recipe"
            value={createDish.recipe}
            onChange={(event) =>
              setCreateDish({
               ...createDish,
                recipe: event.target.value,
              })
            }
          />
        </div>
      )}
      <button onClick={() => console.log(createDish?.cAtegoryDishId)}>вывести</button>
      <button onClick={() => CreateDish()}>Отправить</button>
        </div>
        
  )
}