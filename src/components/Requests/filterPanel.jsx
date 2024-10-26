import React, { useState } from "react";

import { Box, Typography, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

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
            marginLeft: "42px",
          }}
        >
          <Box
            sx={{
              height: "48px",
              alignContent: "center",
              border: "1px solid #D3D3D3",
              paddingLeft: "42px",
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
              paddingLeft: "42px",
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
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Помощь актуальна до:
          </Typography>
          {/* <DatePicker */}
          {/*  label="Uncontrolled picker" */}
          {/*  defaultValue={dayjs("2022-04-17")} */}
          {/* /> */}
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
    </Box>
  );
}

export default FilterPanel;
