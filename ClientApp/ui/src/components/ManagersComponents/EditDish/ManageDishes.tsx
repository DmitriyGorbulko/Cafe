import { Box, Breadcrumbs, CircularProgress, Grid, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IDish } from "../../../models/dishModels";
import { useEffect, useState } from "react";
import { dishApi } from "../../../api/DishApi";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../Routes";

export const ManageDishes = () => {
	const [dishes, setDises] = useState({} as IDish[]);
	const [isDone, setIsDone] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		dishApi.getAll().then((resp) => {
			setDises(resp.data);
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
				<Typography color="text.primary">Список блюд</Typography>
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
					{dishes.map((dish) => (
						<Item key={dish.id} elevation={dish.id} onClick={() => navigate(`/dish/update/${dish.id}`)}>
							{dish.title}
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
