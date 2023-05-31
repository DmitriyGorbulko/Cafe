import React, { FC, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import axios from "axios";
import { API_URL } from "../../API";
import { ICategoryDish, IDish } from "../../models/DishModels";
import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
interface ICreateDish {
  title: string;
  description: string;
  categoryDishId: number;
  recipe: string;
}
export const CreateDish = () => {
  const [createDish, setCreateDish] = useState<ICreateDish | undefined>({
    categoryDishId: 0,
    title: "",
    description: "",
    recipe: "",
  });
  const [categoryDist, setCategoryDist] = useState<ICategoryDish[]>();

  const GetCategoryDish = () => {
    try {
      axios
        .get(`http://localhost:5000/get_all_category_dishes`)
        .then((response) => {
          setCategoryDist(response.data);
          console.log(response.data);
        });
    } catch {}
  };

  const CreateDish = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/create_dish
    `,
        createDish,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCategoryDish();
  }, []);

  const handleSelectChange = (event: SelectChangeEvent<Number>) => {
    const newCreateDish: ICreateDish = {
      categoryDishId: event.target.value as number,
      title: "",
      description: "",
      recipe: "",
    };
    setCreateDish(newCreateDish);
  };

  return (
    <Stack minWidth={600} spacing={3} className="large_form_center">
      <Typography align="center" maxWidth={600} variant="h3" component="h3">
        Добавить новое блюдо:
      </Typography>
      <Select
        placeholder="категория блюда"
        title="категория блюда"
        fullWidth
        value={createDish?.categoryDishId}
        onChange={handleSelectChange}
      >
        {categoryDist?.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </Select>

      {createDish && (
        <Stack spacing={2}>
          <TextField
            fullWidth
            variant="standard"
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
          <TextField
            fullWidth
            variant="standard"
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
          <TextField
            fullWidth
            variant="standard"
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
        </Stack>
      )}
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        fullWidth
        variant="outlined"
        onClick={() => console.log(createDish?.categoryDishId)}
      >
        Вывести
      </Button>
      <Button fullWidth variant="outlined" onClick={() => CreateDish()}>
        Отправить
      </Button>
      </ButtonGroup>
    </Stack>
  );
};
