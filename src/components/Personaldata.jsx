import { Container, Typography, Box, Stack } from "@mui/material";

function Personaldata() {

  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>Профиль</Typography>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px" }}><strong>Фамилия: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px" }}> Фомина</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px" }}><strong>Имя:</strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px" }}> Ангелина</Typography>
        </Stack>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>Дата рождения</Typography>
        <Typography variant="body2" sx={{ fontSize: "14px" }}>13.02.1994</Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>Локация для помощи</Typography>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Область: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 0.5 }}> Владимирская</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Населённый
            пункт: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 2 }}> Владимир</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Область: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 0.5 }}> Нижегородская</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Населённый
            пункт: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px" }}> Нижний Новгород</Typography>
        </Stack>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>Образование</Typography>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Учреждение: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 0.5 }}> МОУ СОШ №7</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Уровень
            образования: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 0.5 }}> Средний общий</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Год
            окончания: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 2 }}> 2010</Typography>
        </Stack>

        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Учреждение: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 0.5 }}> Московский государственный университет имени
            М. В. Ломоносова</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Уровень
            образования: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 0.5 }}> Высший</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Направление: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 0.5 }}> Информатика и вычислительная
            техника</Typography>
        </Stack>
        <Stack direction="row" spacing={(.5)}>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", mb: 0.5 }}><strong>Год
            окончания: </strong></Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", mb: 0.5 }}> 2023</Typography>
        </Stack>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1.5 }}>Обо мне</Typography>
        <Typography variant="body2" sx={{ fontSize: "14px" }} className="aboutMe">Я волонтёр, который работает с
          пенсионерами, и этотприносит мне огромную радость. Каждый день я общаюсь с удивительными людьми, которые
          делятся своим жизненным опытом и мудростью. Мы вместе проводим время, играем в настольные книги, читаем книги
          и просто беседуем. Я вижу, как важно для них чувствовать внимание и заботу, и это вдохновляет меня работать
          ещё усерднее. Каждая улыбка и благодарность от них наполняют моё сердце теплом.<br /> Волонтёрство с
          пенсионерами стало для меня не только делом, но и настоящей дружбой.
        </Typography>
      </Box>
    </Container>
  );
}

export default Personaldata;