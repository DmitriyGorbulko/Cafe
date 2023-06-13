import React, { useEffect, useState } from "react";
import { IDish, IUpdateDish } from "../../../models/DishModels";
import { dishApi } from "../../../api/DishApi";
import { useParams } from "react-router-dom";
import { Alert, Button, ButtonGroup, CircularProgress, Snackbar, Stack, TextField } from "@mui/material";

export const UpdateDish = () => {
	const [Dish, setDish] = useState<IDish>();
	const [updateDish, setUpdateDish] = useState({} as IUpdateDish);
	const pageParams = useParams();
	const [isDone, setIsDone] = useState(false);
	const [isOpen, setIsOpen] = useState<boolean>();

	const UpdateDish = async () => {
		try {
			await dishApi.update(updateDish).then((res) => {
				setIsOpen(true);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const GetDish = () => {
		if (pageParams.id != undefined)
			dishApi.get(parseInt(pageParams.id)).then((resp) => {
				setUpdateDish({
					id: resp.data.id,
					description: resp.data.description,
					recipe: resp.data.categoryName,
					title: resp.data.title,
				});
				setIsDone(true)
			});
	};

	useEffect(() => {
		GetDish();
	}, []);

	return !isDone ? (
		<div className="form_center">
			<CircularProgress />
		</div>
	) : (
		<Stack sx={{paddingTop: '10%'}} minWidth={"50%"} spacing={5} className="large_form_center">
			<Snackbar
				open={isOpen}
				autoHideDuration={6000}
				onClose={() => setIsOpen(false)}
				anchorOrigin={{ horizontal: "center", vertical: "top" }}
			>
				<Alert onClose={() => setIsOpen(false)} severity="success" sx={{ width: "100%" }}>
					Блюдо {updateDish?.title} обновлено
				</Alert>
			</Snackbar>
			<Stack spacing={2}>
				<TextField
					fullWidth
					variant="standard"
					type="text"
					placeholder="Description"
					value={updateDish.recipe}
					onChange={(event) =>
						setUpdateDish({
							...updateDish,
							recipe: event.target.value,
						})
					}
				/>
				<TextField
					fullWidth
					variant="standard"
					type="text"
					placeholder="Title"
					value={updateDish.title}
					onChange={(event) =>
						setUpdateDish({
							...updateDish,
							title: event.target.value,
						})
					}
				/>
				<TextField
					fullWidth
					variant="standard"
					type="text"
					placeholder="Description"
					value={updateDish.description}
					onChange={(event) =>
						setUpdateDish({
							...updateDish,
							description: event.target.value,
						})
					}
				/>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button fullWidth variant="outlined" onClick={() => UpdateDish()}>
						Сохранить
					</Button>
				</ButtonGroup>
			</Stack>
		</Stack>
	);
};
