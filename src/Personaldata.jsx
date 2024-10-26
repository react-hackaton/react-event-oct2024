import { Container, Typography } from "@mui/material";

function Personaldata() {
    return(
        <Container className="personalData">
            <Typography variant="h5" gutterBottom="10%">Профиль</Typography>
                <Typography variant="p">Фамилия: Фомина</Typography>
                <Typography variant="p">Имя: Ангелина</Typography>

            <Typography variant="h5" gutterBottom="10%">Дата рождения</Typography> 
                <Typography variant="p" gutterBottom>13.02.1994</Typography>

            <Typography variant="h5" gutterBottom="10%">Локация для помощи</Typography>  
                <Typography variant="body1">Область: Владимирская</Typography>
                <Typography variant="body1">Населённый пункт: Владимир</Typography><br/>
                <Typography variant="body1">Область: Нижегородская</Typography>
                <Typography variant="body1" gutterBottom>Населённый пункт: Нижний Новгород</Typography>

            <Typography variant="h5" gutterBottom="10%">Образование</Typography>  
                <Typography variant="body1">Учреждение: МОУ СОШ №7</Typography>
                <Typography variant="body1">Уровень образования: Средний общий</Typography>
                <Typography variant="body1">Год окончания: 2010</Typography>

                <Typography variant="body1">Учреждение: Московский государственный университет имени М. В. Ломоносова</Typography>
                <Typography variant="body1">Уровень образования: Высший</Typography>
                <Typography variant="body1">Направление: Информатика и вычислительная техника</Typography>
                <Typography variant="body1">Год окончания: 2023</Typography>

            <Typography variant="h5" gutterBottom="10%">Обо мне</Typography>
                <Typography variant="body1" className="aboutMe">Я волонтёр, который работает с пенсионерами, и этотприносит мне огромную радость. Каждый день я общаюсь с удивительными людьми, которые делятся своим жизненным опытом и мудростью. Мы вместе проводим время, играем в настольные книги, читаем книги и просто беседуем. Я вижу, как важно для них чувствовать внимание и заботу, и это вдохновляет меня работать ещё усерднее. Каждая улыбка и благодарность от них наполняют моё сердце теплом.<br/> Волонтёрство с пенсионерами стало для меня не только делом, но и настоящей дружбой.
                </Typography>
        </Container>    
    )
}
export default Personaldata;