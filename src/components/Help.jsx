import { Typography, Box, Stack } from "@mui/material";

function Help() {
    return(
        <Box width="550px">
            <Typography variant="h5">Сбор средств для пенсионерки Ангелины Ивановны</Typography>

            <Stack>
                <Typography variant="h6">Организация</Typography>
                <Typography variant="body2">Фонд помощи для ветеранов и инвалидов "Вера"</Typography>
            </Stack>
            <Stack direction="row">
                <Typography  variant="caption">Организация проверена</Typography>
            </Stack>
                
            <Typography variant="h6">Кому мы помогаем</Typography>
            <Stack>
                <Typography variant="body2">Мы помогаем пенсионерке Ангелине Инвановне. Ей 82 года, и, к сожалению, её здоровье в последние годы значительно ухудшилось. Она страдает от нескольких хронических заболеваний, таких как диабет и гипертония, и нуждается в постоянном лечении и уходе.</Typography>
                <Typography variant="body2">Бабушка всю жизнь работала на заводе, воспитывала детей и помогала внукам, но сейчас, когда она вышла на пенсию, её маленькая пенсия не покрывает даже основных расходов на лекарства. Каждый месяц она тратит значительную часть своей пенсии на медикаменты, которые необходимы для поддержания её здоровья.</Typography>
                <Typography variant="body2">К сожалению, многие препараты являются довольно дорогими, и бабушка часто вынуждена экономить, отказываясь от необходимых лекарств.
                Кроме того, Ангелина Инвановна нуждается в уходе на дому. Из-за слабости и проблем с передвижением ей трудно справляться с повседневными делами.</Typography>
            </Stack>

            <Stack>
                <Typography variant="h6">Цель сбора</Typography>
                <Typography variant="body2">Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний сезон. Пополнить запасы лекарств на три месяца. Обеспечить уход на дому в течении полугода.</Typography>
            </Stack>

            <Stack>
                <Typography variant="h6">План действий</Typography>
                <Typography variant="body2">Оплатить лечение МКБ в клинике “Здоровье”</Typography>
                <Typography variant="body2">Провести диагностику онкологических заболеваний</Typography>
                <Typography variant="body2">Купить одежду на зимний сезон</Typography>
                <Typography variant="body2">Обеспечить уход на дому в течении полугода</Typography>
                <Typography variant="body2">Восполнить необходимые лекарства</Typography>
            </Stack>

            <Stack>
                <Typography variant="h6">Завершение</Typography>
                <Typography variant="body2">20.03.2025</Typography>
            </Stack>

            <Stack>
                <Typography variant="h6">Локация: </Typography>
                <Stack direction="row">
                    <Typography variant="subtitle2">Область:</Typography>
                    <Typography variant="body2">Владимирская</Typography>
                </Stack>
                <Stack direction="row">
                    <Typography variant="subtitle2">Насленный пункт:</Typography>
                    <Typography variant="body2">Владимир</Typography>
                </Stack>
            </Stack>

            <Stack>
                <Typography variant="h6">Контакты</Typography>
                <Stack direction="row">
                    <Stack direction="column">
                        <Typography variant="subtitle2">Телефон</Typography>
                        <Typography variant="body2">+ 7 999 888 99 50</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="subtitle2">E-mail</Typography>
                        <Typography variant="body2">forExample2@yandex.ru</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="subtitle2">Сайт</Typography>
                        <Typography variant="body2">forexamplehelp.ru</Typography>
                    </Stack>
                </Stack>
            </Stack>




        </Box>
    )
}
export default Help;