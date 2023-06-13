import { Login } from "./components/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { Registration } from "./components/Registration/Registration";
import { Routes as PathRoutes } from "./Routes";

export const PublicView = () => {
	return (
		<Routes>
			<Route path={PathRoutes.Login} Component={Login} />
			<Route path={PathRoutes.Registration} Component={Registration} />
			<Route path="*" element={<Navigate replace to={PathRoutes.Login} />} />
		</Routes>
	);
};
