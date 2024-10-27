import image from '../assets/Error-notfound.png';
import { Stack, Typography } from '@mui/material';

function ErrorNotFound() {
    return(
        <Stack 
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"}}>
                <img src={image} alt="not-found" width="262px" height="272px"/>
                <Typography variant="h5" sx={{ fontSize: "24px", mt: -4}}>Запросы не найдены</Typography>
            </Stack>
    )
}
export default ErrorNotFound;