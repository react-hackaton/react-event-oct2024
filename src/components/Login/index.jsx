import React from "react";

import { Visibility } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

import users from "../../data/userData.js";

import ProfileLogin from "./profileLogin.jsx";

export function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "750px",
          width: "1500px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          width="50%"
          height="100%"
          sx={{
            border: "1px solid grey",
            paddingLeft: "40px",
          }}
        >
          <Typography variant="h4" sx={{ mt: 8, mr: 5, textAlign: "left" }}>
            Авторизация
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 11.25, mb: "35px", textAlign: "left" }}
          >
            Вход
          </Typography>

          <Box width="485px">
            <TextField
              fullWidth
              label="Логин"
              placeholder="Введите e-mail"
              variant="outlined"
              margin="normal"
              sx={{ mb: "30px" }}
            />
            <TextField
              fullWidth
              label="Пароль"
              placeholder="Введите пароль"
              variant="outlined"
              margin="normal"
              sx={{ mb: "40px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {}}
                      edge="end"
                    >
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              ВОЙТИ
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: "1px solid grey",
            paddingLeft: "40px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ mt: 8, mr: 5, mb: 11.25, textAlign: "left" }}
          >
            Тестовые профили
          </Typography>
          <Box
            sx={{
              // width: "320px",
              // height: "348px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              overflowY: "auto",
            }}
          >
            {users.map((user) => (
              <ProfileLogin
                title={user.title}
                login={user.login}
                password={user.password}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
