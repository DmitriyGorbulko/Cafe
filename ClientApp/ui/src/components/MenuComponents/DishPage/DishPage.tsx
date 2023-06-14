import React, { useEffect, useState } from "react";
import { CircularProgress, ImageList, ImageListItem, Typography } from "@mui/material";
import { Dish } from "../Dish/Dish";
import { IDish } from "../../../models/dishModels";
import { useParams } from "react-router-dom";
import { dishApi } from "../../../api/DishApi";

export const DishPage = () => {
	const [dishes, setDish] = useState<IDish[]>({} as IDish[]);
	const [isDone, setIsDone] = useState<boolean>(false);
	const pageParams = useParams();
	const paramId = pageParams.id;

	useEffect(() => {
    if(paramId !== undefined)
    {
      dishApi.getDishByCategoryId(parseInt(paramId)).then((response) => {
        setDish(response.data);
        setIsDone(true);
      });
    }
	}, [paramId]);

	return !isDone ? (
		<div className="form_center">
			<CircularProgress />
		</div>
	) : (
		<ImageList sx={{ width: "100%", height: "50%" }}>
			<ImageListItem key="Subheader" cols={3}>
				<Typography paddingBottom={4} paddingLeft={4} align="left" maxWidth={600} variant="h4">
					Блюда:
				</Typography>
			</ImageListItem>
			{dishes?.map((item) => (
				<Dish key={item.id} {...item} />
			))}
		</ImageList>
	);
};
