import { Box, Breadcrumbs, CircularProgress, Grid, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { CategoryDishApi } from "../../../api/categoryDishApi";
import { Routes } from "../../../Routes";

export interface ICategoryDishProps {
	id?: number;
	img: string;
	title: string;
}

export const ManageCatDishes = () => {
	const [catDishes, setCatDises] = useState({} as ICategoryDishProps[]);
	const [isDone, setIsDone] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		CategoryDishApi.getAll().then((resp) => {
			setCatDises(resp.data);
			setIsDone(true);
		});
	}, []);

	return !isDone ? (
		<div className="form_center">
			<CircularProgress />
		</div>
	) : (
		<>
			<Breadcrumbs sx={{ paddingLeft: "2%", paddingTop: "2%" }} aria-label="breadcrumb">
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.Root)}>
					Главная
				</Link>
				<Link underline="hover" color="inherit" onClick={() => navigate(Routes.ManageMenu)}>
                    Конфигурация меню
				</Link>
				<Typography color="text.primary">Список категорий блюд</Typography>
			</Breadcrumbs>
			<Grid>
				<Box
					sx={{
						p: 2,
						display: "grid",
						gridTemplateColumns: { md: "1fr 1fr" },
						gridTemplateRows: { md: "1fr 1fr" },
						gap: 2,
					}}
				>
					{catDishes.map((catDish) => (
						<Item
							key={catDish.id}
							elevation={catDish.id}
							onClick={() => navigate(`/categoryDish/update/${catDish.id}`)}
						>
							{catDish.title}
						</Item>
					))}
				</Box>
			</Grid>
		</>
	);
};

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: 60,
	lineHeight: "60px",
}));
