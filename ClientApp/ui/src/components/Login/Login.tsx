import { Button, Stack, TextField } from "@mui/material";
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
  const navigate = useNavigate();;

  const handleLogin = async() => {
    login({
      email: user.name,
      password: user.password
    });
  };

  return (
    <Stack spacing={4} className="form_center">
      <TextField
        margin="normal"
        variant="standard"
        fullWidth
        label="Email"
        id="email"
        color="primary"
        onChange={(e) => setUser({...user, name: e.target.value})}
      />
      <TextField
        margin="normal"
        variant="standard"
        fullWidth
        label="Password"
        id="password"
        color="primary"
        onChange={(e) => setUser({...user, password: e.target.value})}
      />
      <Button
        fullWidth
        variant="contained"
        onClick={handleLogin}
        color="success"
      >
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
