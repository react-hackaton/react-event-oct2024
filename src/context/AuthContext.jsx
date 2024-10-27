import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authAPI } from '../api/auth';

const AuthContext = createContext(null);

const TOKEN_KEY = 'token';
const USER_KEY = 'authUser';
const TOKEN_EXPIRY = 60 * 60 * 1000; // 1 час в миллисекундах

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Проверка срока действия токена
  const isTokenExpired = () => {
    const tokenTimestamp = localStorage.getItem('tokenTimestamp');
    if (!tokenTimestamp) return true;
    return Date.now() - parseInt(tokenTimestamp) > TOKEN_EXPIRY;
  };

  // Восстановление сессии при загрузке
  useEffect(() => {
    const restoreSession = () => {
      try {
        const token = localStorage.getItem(TOKEN_KEY);
        const savedUser = localStorage.getItem(USER_KEY);

        if (token && savedUser && !isTokenExpired()) {
          setCurrentUser(JSON.parse(savedUser));
        } else {
          // Если токен истек, очищаем хранилище
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(USER_KEY);
          localStorage.removeItem('tokenTimestamp');
        }
      } catch (error) {
        console.error('Ошибка восстановления сессии:', error);
        localStorage.clear();
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (loginValue, passwordValue) => {
    setIsLoading(true);
    try {
      const { auth, token } = await authAPI.login(loginValue, passwordValue);

      if (auth && token) {
        // Сохраняем JWT токен
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem('tokenTimestamp', Date.now().toString());

        // Создаем объект пользователя
        const userData = {
          login: loginValue,
        };

        setCurrentUser(userData);
        localStorage.setItem(USER_KEY, JSON.stringify(userData));

        navigate("/profile");
        toast.success("Вы успешно вошли в систему");
        return true;
      }
      return false;
    } catch (error) {
      let errorMessage = "Произошла ошибка при входе";

      if (error.response) {
        switch (error.response.status) {
          case 400:
            errorMessage = "Неверный логин или пароль";
            break;
          case 500:
            errorMessage = "Сервер временно недоступен";
            break;
          default:
            errorMessage = "Ошибка авторизации";
        }
      }

      toast.error(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem('tokenTimestamp');
    navigate("/");
    toast.success("Вы успешно вышли из системы");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};