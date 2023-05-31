import { Button, Stack, TextField } from "@mui/material";

// function ToHome() {

// }

export const Login = () => {
  return (
    <Stack spacing={4} className="form_center">
        <TextField
          margin="normal"
          variant="standard"
          fullWidth
          label="Email"
          id="email"
          color="primary"
        />
        <TextField
          margin="normal"
          variant="standard"
          fullWidth
          label="Password"
          id="password"
          color="primary"
        />
        <Button fullWidth  variant="contained" color="success" href="/home">
          Войти
        </Button>
        <div>
          <span>У вас нет аккаунта?</span>
          <Button variant="text" color="primary" href="/registration">
            Регистрация
          </Button>
        </div>
    </Stack>
  );
};
