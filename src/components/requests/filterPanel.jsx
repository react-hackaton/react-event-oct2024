import React, { useState } from "react";

import { Box, Typography, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import HelpFilter from "./helperFilter.jsx";

function FilterPanel() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Box
      sx={{
        width: "320px",
        height: "947px",
        padding: "20px",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "25px",
        }}
      >
        Фильтрация
      </Typography>

      <HelpFilter
        title="Кому мы помогаем"
        options={["Пенсионеры", "Дом престарелых"]}
      />

      <Box
        sx={{
          marginTop: "20px",
        }}
      >
        <HelpFilter
          title="Чем мы помогаем"
          options={["Вещи", "Финансирование"]}
        />

        <Box
          sx={{
            paddingLeft: "42px",
          }}
        >
          <Box
            sx={{
              height: "48px",
              alignContent: "center",
              border: "1px solid #000",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Волонтерство
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#F5F5F5",
            }}
          >
            <HelpFilter
              title="Специализация"
              options={["Квалифицированная", "Не требует профессии"]}
            />
            <HelpFilter
              title="Формат"
              options={["Онлайн", "Не требует профессии"]}
            />
            <HelpFilter title="Специализация" options={["Онлайн", "Офлайн"]} />
            <HelpFilter
              title="Необходимо волонтеров"
              options={["Группа", "Один"]}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Помощь актуальна до:
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Выберите дату"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  label={params.label}
                  inputRef={params.inputRef}
                  error={params.error}
                  helperText={params.helperText}
                  InputProps={params.InputProps}
                  {...params.InputLabelProps}
                />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: "4px",
            border: "1px solid #000",
            mt: 2,
            color: "#000000",
          }}
        >
          СБРОСИТЬ
        </Button>
      </Box>
    </Box>
  );
}

export default FilterPanel;
