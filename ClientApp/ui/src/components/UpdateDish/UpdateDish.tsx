import React, { FC, useEffect, useState} from 'react'
import {Input} from '../Input/Input'
import axios from 'axios'
import { API_URL } from '../../API'
import { IDish } from '../../models/DishModels'
interface IUpdateDish {
    id: number,
    description: string,
    recipe: string
}
export const UpdateDish = () => {
    const [ Dish, setDish ] = useState<IDish[]>()
    const [ updateDish, setUpdateDish] = useState<IUpdateDish>({
            id: 0,
            description: '',
            recipe: '',
        }
    )

    const UpdateDish = async () => {

        try {
          const response = await axios.put(`http://localhost:5000/update_dish
          `, updateDish, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

const GetDish = ( ) => {
  try {
    axios.get(`http://localhost:5000/get_all_dishes`).then((response) => {
      setDish(response.data);
      console.log(response.data);
    });
  }

  catch {}
}

const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateDish((prevState) => ({
     ...prevState,
      description: event.target.value,
    }));
  };

  const handleRecipeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateDish((prevState) => ({
     ...prevState,
      recipe: event.target.value,
    }));
  };

useEffect(() => {
    GetDish()
  }, []);
    return (
        <div>Обновление
            <div >{Dish?.map((item) => ( 
                <div className='dish-button' onClick={() => setUpdateDish({id: item.id, description: '', recipe: ''})}>{item.title}</div>
            ))}</div>
            <button onClick={() => console.log(updateDish.id)}>вывести</button>
            {updateDish.id ? 
            <div>
                <div>
            <input
              type="text"
              placeholder="Description"
              value={updateDish.description}
              onChange={handleDescriptionChange}
            />
            <input
              type="text"
              placeholder="Recipe"
              value={updateDish.recipe}
              onChange={handleRecipeChange}
            />
          </div>
          <button onClick={() => UpdateDish()}>Обновить</button>
            </div> : <></>}
        </div>
    )
}