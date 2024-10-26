import React from "react";

import { Box, Typography, Checkbox, TextField, Button } from "@mui/material";

function FilterPanel() {
  return (
    <Box sx={{ width: "250px", padding: 2 }}>
      <Typography variant="h6">Фильтрация</Typography>
      {/* Add all your filter groups here with Checkbox and TextField components */}
      <Box>
        <Typography variant="subtitle1">Кому мы помогаем</Typography>
        <Checkbox /> Пенсионеры
        <Checkbox /> Дом престарелых
        {/* Add more filter groups as needed */}
      </Box>
      <Box>
        <Typography variant="subtitle1">Помощь актуальна до:</Typography>
        <TextField type="date" fullWidth />
      </Box>
      <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
        СБРОСИТЬ
      </Button>
    </Box>
  );
}

export default FilterPanel;
