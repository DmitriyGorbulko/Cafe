import { Alert, Button, Snackbar, Stack, TextField } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../Routes";

interface IUser {
	name: string;
	password: string;
}

export const Login = () => {
	const { login } = useAuth();
	const [user, setUser] = useState({} as IUser);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [errorMsg, setErrMsg] = useState<string>("");

	const navigate = useNavigate();

	const handleLogin = () => {
		login({
			email: user.name,
			password: user.password,
		}).then((resp) => {
			if (resp != null) {
				setErrMsg(resp);
				setIsOpen(true);
			}
		});
	};

	return (
		<Stack spacing={4} className="form_center">
			<Snackbar
				open={isOpen}
				autoHideDuration={6000}
				onClose={() => setIsOpen(false)}
				anchorOrigin={{ horizontal: "center", vertical: "top" }}
			>
				<Alert onClose={() => setIsOpen(false)} severity="error" sx={{ width: "100%" }}>
					{errorMsg}
				</Alert>
			</Snackbar>
			<TextField
				margin="normal"
				variant="standard"
				fullWidth
				label="Email"
				id="email"
				color="primary"
				onChange={(e) => setUser({ ...user, name: e.target.value })}
			/>
			<TextField
				margin="normal"
				variant="standard"
				fullWidth
				label="Password"
				type="password"
				id="password"
				color="primary"
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<Button fullWidth variant="contained" onClick={handleLogin} color="success">
				Войти
			</Button>
			<div>
				<span>У вас нет аккаунта?</span>
				<Button variant="text" color="success" onClick={() => navigate(Routes.Registration)}>
					Регистрация
				</Button>
			</div>
		</Stack>
	);
};
