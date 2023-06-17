import { Box, Button } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef, GridSlotsComponentsProps } from "@mui/x-data-grid";

export const Basket = () => {
	return (
		<div>
			<BasketGrid />
		</div>
	);
};

const rows: GridRowsProp = [
	{ id: 1, category: "category1", dish: "dish1", ingridients: "ingredient1, ingredient2,ingredient3", price: '250' },
	{ id: 2, category: "category2", dish: "dish2", ingridients: "ingredient1, ingredient2,ingredient3", price: '250' },
	{ id: 3, category: "category3", dish: "dish3", ingridients: "ingredient1, ingredient2,ingredient3", price: '250' },
	{ id: 4, category: "category4", dish: "dish4", ingridients: "ingredient1, ingredient2,ingredient3", price: '250' },
];

const columns: GridColDef[] = [
	{ field: "category", headerName: "Категория", width: 300, headerAlign: "center", align: "center"  },
	{ field: "dish", headerName: "Блюдо", width: 300, headerAlign: "center", align: "center" },
	{ field: "ingridients", headerName: "Ингредиенты", width: 300, headerAlign: "center", align: "center" },
	{ field: "price", headerName: "Цена", width: 300, headerAlign: "center", align: "center" },
];

const BasketGrid = () => {
	return (
		<>
			<DataGrid
				sx={{ mx: 10, mt: 10, height: "70%" }}
				rowHeight={100}
				rows={rows}
				columns={columns}
				slots={{ footer: CustomFooterStatusComponent }}
			/>
		</>
	);
};

const CustomFooterStatusComponent = (props: NonNullable<GridSlotsComponentsProps["footer"]>) => {
	return (
		<Box sx={{ p: 2, display: "flex", flexDirection: "row-reverse" }}>
			<Button variant="outlined" sx={{ mr: 1, ml:21 }}>
				Оплатить
			</Button>
      <div><h2>Итого:   1000</h2></div>
		</Box>
	);
};
