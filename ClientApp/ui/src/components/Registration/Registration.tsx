import { Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthApi } from "../../api/authApi";
import { useState } from "react";
import { IUserResister } from "../../Interfaces/authDto";

export const Registration = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({} as IUserResister);

	const handleSubmit = () => {
		if (user.password === user.repeatPassword) AuthApi.register({ email: user.email, password: user.password });
	};

	return (
		<Stack spacing={2} className="form_center">
			<TextField
				margin="normal"
				variant="standard"
				fullWidth
				label="Email"
				id="email"
				color="primary"
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<TextField
				margin="normal"
				variant="standard"
				fullWidth
				label="Password"
				id="Password"
				color="primary"
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<TextField
				margin="normal"
				variant="standard"
				fullWidth
				label="Repeat password"
				id="RepeatPassword"
				color="primary"
				onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
			/>
			<Button fullWidth variant="contained" color="success" onClick={handleSubmit}>
				Зарегистрироваться
			</Button>
			<div>
				<span>Уже зарегистрированы? </span>
				<Button sx={{ maxWidth: "10%" }} variant="text" color="success" onClick={() => navigate(-1)}>
					Войти
				</Button>
			</div>
		</Stack>
	);
};
