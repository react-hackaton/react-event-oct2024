import image from '../assets/Error-notfound.png';
import { Stack, Typography } from '@mui/material';
function Error() {
    return(
        <Stack 
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"}}>
            <img src={image} alt="not-found" width="262px"/>
            <Typography variant="h5" sx={{ fontSize: "24px", mt: -11}}>Запросы не найдены</Typography>
        </Stack>
    )
}
export default Error;