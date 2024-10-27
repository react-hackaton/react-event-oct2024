//import { Stack, Typography } from '@mui/material';
function GotMoney() {
    return(
        <Container width="320px" height="470px">
            <Typography variant="h6" sx={{ mb: 1.5 }}>Вместе для добрых дел</Typography>
            <Stack width="280px">
                <Typography variant="subtitle2" sx={{ fontSize: "14px" }}><strong>Цель сбора</strong></Typography>
                <Typography variant="body2" sx={{ fontSize: "14px" }}>Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний сезон. Пополнить запасы лекарств на три месяца. Обеспечить уход на дому в течении полугода.</Typography>
            </Stack>
            <Stack>
                <Typography variant="subtitle2" sx={{ fontSize: "14px" }}><strong>Завершение</strong></Typography>
                <Typography variant="body2" sx={{ fontSize: "14px" }}>20.03.2025</Typography>
            </Stack>
            <Stack>
                <Typography variant="subtitle2" sx={{ fontSize: "14px" }}><strong>Мы собрали</strong></Typography>
                <Container width="280px" height="4px" sx={{ color: 'primary.main' }}>
                </Container>
                
                <Stack>
                    <Typography variant="body2" sx={{ fontSize: "14px" }}>1 102 563 руб</Typography>
                    <Typography variant="body2" sx={{ fontSize: "14px" }}>2 056 489 руб</Typography>
                </Stack>
            </Stack>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>Нас уже: 3 566 987</Typography>
            <Button variant="contained" color="primary" size="large"></Button>
        </Container>
    )
}
export default GotMoney;