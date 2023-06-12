import { Button, Stack, TextField } from "@mui/material";
import { IDish } from "../../models/DishModels";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

// function ToHome() {

// }

interface IUser {
  name: string;
  password: string;
}

async function createUser() {
  // 👇️ const data: CreateUserResponse
  // const data = await axios.post<IDish>
  // (
  //   'http://api/auth/login',
  //   {
  //     name: 'string',
  //     password: 'string'
  //   }
  // )
}
export const Login = () => {
  const { login } = useAuth();
  const [user, setUser] = useState({} as IUser);

  const handleLogin = () => {
    login({
      id: "1",
      name: user.name,
      email: "john.doe@email.com",
    });
    console.log('handle click')
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
        <Button variant="text" color="success" href="/registration">
          Регистрация
        </Button>
      </div>
    </Stack>
  );
};
