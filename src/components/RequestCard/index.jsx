import React from "react";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  IconButton,
  LinearProgress,
} from "@mui/material";

function RequestCard({ request }) {
  const {
    title,
    organizer,
    location = {},
    goal,
    endDate,
    collected = {},
    imageUrl,
  } = request;

  const { region = "Неизвестно", city = "Неизвестно" } = location;
  const { amount = "0", target = "0", donorsCount = "0" } = collected;
  const progress = (amount / target) * 100;

  return (
    <Paper
      elevation={3}
      sx={{
        width: "270px",
        padding: "16px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Donation Image"
        sx={{
          borderRadius: "4px",
          width: "100%",
          maxWidth: "200px",
          height: "auto",
          margin: "0 auto",
        }}
      />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 3,
            lineClamp: 3,
            height: "70px",
          }}
        >
          {title}
        </Typography>
        <IconButton aria-label="favorite">
          <StarBorderIcon />
        </IconButton>
      </Box>

      <Divider />

      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Организатор
        </Typography>
        <Typography variant="body2">{organizer}</Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Локация
        </Typography>
        {region === "Онлайн" ? (
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Онлайн
          </Typography>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Область: {region}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Населенный пункт: {city}
            </Typography>
          </>
        )}
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Цель сбора
        </Typography>
        <Typography variant="body2">{goal}</Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Завершение
        </Typography>
        <Typography variant="body2">{endDate}</Typography>
      </Box>

      <Box mt={2}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Мы собрали
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            mt: "8px",
            mb: "8px",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: "8px",
              borderRadius: "4px",
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#90caf9",
              },
            }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              position: "absolute",
              left: 0,
              top: "5px",
              transform: "translateY(50%)",
            }}
          >
            {amount.toLocaleString()} руб
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              position: "absolute",
              right: 0,
              top: "5px",
              transform: "translateY(50%)",
            }}
          >
            {target.toLocaleString()} руб
          </Typography>
        </Box>
      </Box>

      <Typography variant="caption" color="textSecondary" mt={1}>
        {donorsCount ? `Нас уже: ${donorsCount}` : "Вы будете первым"}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ borderRadius: "4px", mt: 2 }}
      >
        ПОМОЧЬ
      </Button>
    </Paper>
  );
}

export default RequestCard;
