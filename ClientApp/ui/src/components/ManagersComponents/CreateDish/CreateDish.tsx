import { useEffect, useState } from "react";
import { ICreateDish } from "../../../models/dishModels";
import {
	Alert,
	Button,
	ButtonGroup,
	CircularProgress,
	MenuItem,
	Select,
	SelectChangeEvent,
	Snackbar,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { CategoryDishApi } from "../../../api/categoryDishApi";
import { ICategoryDishProps } from "../../MenuComponents/CategoryDish/CategoryDish";
import { dishApi } from "../../../api/DishApi";

export const CreateDish = () => {
	const [createDish, setCreateDish] = useState<ICreateDish | undefined>({
		categoryDishId: 0,
		title: "",
		description: "",
		recipe: "",
	});
	const [categoryDist, setCategoryDist] = useState<ICategoryDishProps[]>();
	const [isOpen, setIsOpen] = useState<boolean>();
	const [isDone, setIsDone] = useState<boolean>(false);

	const CreateDish = async () => {
		try {
			await dishApi.create(createDish!).then((res) => {
				setIsOpen(true);
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		Promise.allSettled([
			CategoryDishApi.getAll().then((response) => {
				setCategoryDist(response.data);
				setIsDone(true);
			}),
		]);
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

	return !isDone ? (
		<div className="form_center">
			<CircularProgress />
		</div>
	) : (
		<Stack minWidth={"50%"} spacing={3} className="large_form_center">
			<Snackbar
				open={isOpen}
				autoHideDuration={6000}
				onClose={() => setIsOpen(false)}
				anchorOrigin={{ horizontal: "center", vertical: "top" }}
			>
				<Alert onClose={() => setIsOpen(false)} severity="success" sx={{ width: "100%" }}>
					Блюдо {createDish?.title} добавлено
				</Alert>
			</Snackbar>
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
					<TextField
						fullWidth
						variant="standard"
						type="text"
						placeholder="Image"
						value={createDish.img}
						onChange={(event) =>
							setCreateDish({
								...createDish,
								img: event.target.value,
							})
						}
					/>
				</Stack>
			)}
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button fullWidth variant="outlined" onClick={() => CreateDish()}>
					Добавить
				</Button>
			</ButtonGroup>
		</Stack>
	);
};
