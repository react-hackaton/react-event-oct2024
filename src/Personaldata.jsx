import { Container, Typography, Box } from "@mui/material";

function Personaldata() {
    const customTypographyStyle = {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '32px',
        letterSpacing: '0.15px',
        textAlign: 'left',
        mb:1
      };
    return(  
        <Container className="personalData">
            <Box sx={{ mb: 2 }}>
            <Typography sx={customTypographyStyle}>Профиль</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px', mb:0.5}}><strong>Фамилия:</strong> Фомина</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px'}}><strong>Имя:</strong> Ангелина</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
            <Typography sx={customTypographyStyle}>Дата рождения</Typography> 
                <Typography variant="body1" sx={{ fontSize: '14px'}}>13.02.1994</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
            <Typography sx={customTypographyStyle}>Локация для помощи</Typography>  
                <Typography variant="body1" sx={{ fontSize: '14px', mb:0.5}}><strong>Область:</strong> Владимирская</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px', mb:2 }}><strong>Населённый пункт:</strong> Владимир</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px', mb:0.5 }}><strong>Область:</strong> Нижегородская</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px'}}><strong>Населённый пункт:</strong> Нижний Новгород</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
            <Typography sx={customTypographyStyle}>Образование</Typography>  
                <Typography variant="body1" sx={{ fontSize: '14px', mb:0.5 }}><strong>Учреждение:</strong> МОУ СОШ №7</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px', mb:0.5 }}><strong>Уровень образования:</strong> Средний общий</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px', mb:2 }}><strong>Год окончания:</strong> 2010</Typography>

                <Typography variant="body1" sx={{ fontSize: '14px', mb:0.5 }}><strong>Учреждение:</strong> Московский государственный университет имени М. В. Ломоносова</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px', mb:0.5 }}><strong>Уровень образования:</strong> Высший</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px', mb:0.5 }}><strong>Направление:</strong> Информатика и вычислительная техника</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px'}}><strong>Год окончания:</strong> 2023</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
            <Typography sx={customTypographyStyle}>Обо мне</Typography>
                <Typography variant="body1" sx={{ fontSize: '14px'}} className="aboutMe">Я волонтёр, который работает с пенсионерами, и этотприносит мне огромную радость. Каждый день я общаюсь с удивительными людьми, которые делятся своим жизненным опытом и мудростью. Мы вместе проводим время, играем в настольные книги, читаем книги и просто беседуем. Я вижу, как важно для них чувствовать внимание и заботу, и это вдохновляет меня работать ещё усерднее. Каждая улыбка и благодарность от них наполняют моё сердце теплом.<br/> Волонтёрство с пенсионерами стало для меня не только делом, но и настоящей дружбой.
                </Typography>
            </Box>
        </Container>    
    )
}
export default Personaldata;