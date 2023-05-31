import { Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";

export const Registration = () => {
  return (
    <Stack spacing={2}  className="form_center">
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
          id="Password"
          color="primary"
        />
        <TextField
          margin="normal"
          variant="standard"
          fullWidth
          label="Repeat password"
          id="RepeatPassword"
          color="primary"
        />
        <Button fullWidth variant="contained" color="success" href="/">
          Зарегистрироваться
        </Button>
    </Stack>
  );
};
