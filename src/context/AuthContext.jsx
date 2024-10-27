import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authAPI } from '../api/auth';

const AuthContext = createContext(null);

const TOKEN_KEY = 'token';
const USER_KEY = 'authUser';
const TOKEN_EXPIRY = 60 * 60 * 1000; // 1 час в миллисекундах

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const isTokenExpired = () => {
    const tokenTimestamp = localStorage.getItem('tokenTimestamp');
    if (!tokenTimestamp) return true;
    return Date.now() - parseInt(tokenTimestamp) > TOKEN_EXPIRY;
  };

  useEffect(() => {
    const restoreSession = () => {
      try {
        const token = localStorage.getItem(TOKEN_KEY);
        const savedUser = localStorage.getItem(USER_KEY);

        if (token && savedUser && !isTokenExpired()) {
          setCurrentUser(JSON.parse(savedUser));
        } else {
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
      const response = await authAPI.login(loginValue, passwordValue);

      if (response.auth && response.token) {
        localStorage.setItem(TOKEN_KEY, response.token);
        localStorage.setItem('tokenTimestamp', Date.now().toString());

        const userData = {
          login: loginValue,
        };

        setCurrentUser(userData);
        localStorage.setItem(USER_KEY, JSON.stringify(userData));

        navigate('/requests');
        toast.success('Вы успешно вошли в систему', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return true;
      }
      return false;
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
    navigate('/');
    toast.success('Вы успешно вышли из системы');
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
