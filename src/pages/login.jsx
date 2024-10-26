import React from "react";

import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

import ProfileLogin from "../components/profile-login.jsx";
import users from "../data/userData.jsx";

function Login() {
  return (
    <Box display="flex" justifyContent="space-between" p={4}>
      <Box width="45%">
        <Typography
          variant="h4"
          // mb={10}
          sx={{ mt: 8, mr: 5, textAlign: "left" }}
        >
          Авторизация
        </Typography>
        <Typography variant="h5" sx={{ mt: 11.25, mb: 6, textAlign: "left" }}>
          Вход
        </Typography>

        <Box>
          <TextField
            fullWidth
            label="Логин"
            placeholder="Введите e-mail"
            variant="outlined"
            margin="normal"
            sx={{ mb: 3.75 }}
          />
          <TextField
            fullWidth
            label="Пароль"
            placeholder="Введите пароль"
            variant="outlined"
            margin="normal"
            sx={{ mb: 5 }}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <IconButton
            //         aria-label="toggle password visibility"
            //         onClick={handleClickShowPassword}
            //         edge="end"
            //       >
            //         {showPassword ? <VisibilityOff /> : <Visibility />}
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            ВОЙТИ
          </Button>
        </Box>
      </Box>

      <Box width="45%" display="flex" flexDirection="column" gap={2}>
        <Typography
          variant="h4"
          sx={{ mt: 8, mr: 5, mb: 11.25, textAlign: "left" }}
        >
          Тестовые профили
        </Typography>
        {users.map((user) => (
          <ProfileLogin
            key={user.id}
            title={user.title}
            login={user.login}
            password={user.password}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Login;
