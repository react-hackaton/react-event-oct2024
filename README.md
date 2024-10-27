# React Event October 2024 - Помощь пожилым людям

Веб-приложение для оказания помощи пожилым людям, разработанное в рамках React Event October 2024. Платформа позволяет пользователям осуществлять пожертвования и предлагать помощь нуждающимся пожилым людям.

## 📋 О проекте

Проект создан за 2 дня с целью предоставить удобную платформу для благотворительности. Основная задача - создать интуитивно понятный интерфейс, где каждый желающий может оказать помощь пожилым людям.

## ✨ Основной функционал

- Авторизация и регистрация пользователей
- Личный кабинет с возможностью редактирования данных
- Просмотр карточек с запросами на помощь
- Возможность делать пожертвования
- Удобная навигация между разделами без перезагрузки страницы
- Обработка ошибок и уведомления пользователей

## 🛡 Обработка пограничных случаев

В проекте реализована комплексная обработка ошибок и пограничных случаев:
- Валидация и обработка ошибок при логине/регистрации
- Кастомная страница 404 для несуществующих маршрутов
- Информативные сообщения при отсутствии результатов поиска
- Обработка ошибок API с понятными пользователю сообщениями
- Защита роутов от несанкционированного доступа

## 👥 Командная работа

### Автоматизация процессов
- Настроен автоматизированный Trello через GitHub Actions
- Автоматическое обновление статусов задач при коммитах
- Интеграция с pull request'ами для отслеживания прогресса

## 🛠 Технический стек

### Frontend
- React
- Vite
- React Router Dom
- Material-UI (@mui/material и @mui/icons-material)
- Emotion (@emotion/react и @emotion/styled)
- Axios
- Day.js
- React Toastify

### CI/CD
- GitHub Actions
- Trello API интеграция

### Разработка
- ESLint
- Prettier

## 🚀 Как запустить проект

### Предварительные требования
- Node.js и npm/yarn
- Рекомендуемые расширения VS Code:
    - ESLint
    - Prettier
    - ES7+ React/Redux/React-Native snippets

### Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/side-progects/react-event-oct2024.git
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект:
```bash
npm run dev
```

4. Откройте браузер и перейдите по адресу:
```
http://localhost:5173/
```

## 👥 Команда проекта

- Elena [@elen-oz](https://github.com/elen-oz)
- Рената [@RenataGaraeva](https://github.com/RenataGaraeva)
- Марина [@MarinaViktoria](https://github.com/MarinaViktoria)
- Aigul [@aigul-ermak](https://github.com/aigul-ermak)

## 📄 Скрипты

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "format": "prettier --write \"src/**/*.{js,jsx}\""
}
```


## 📦 Зависимости

### Основные
- React v18.3.1
- React Router Dom v6.27.0
- Material-UI v6.1.5
- Axios v1.7.7
- Day.js v1.11.13
- React Toastify v10.0.6

### Разработка
- ESLint v8.57.1
- Prettier v3.3.3
- Various ESLint plugins and configurations

---

Проект разработан в рамках React Event October 2024 🚀