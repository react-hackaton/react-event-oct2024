import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import users from "../data/userData";

const AuthContext = createContext(null);

const AUTH_STORAGE_KEY = "authUser";


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const restoreSession = () => {
      try {
        const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
        if (savedUser) {
          setCurrentUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error("Ошибка восстановления сессии:", error);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (loginValue, passwordValue) => {
    setIsLoading(true);
    try {
      // Имитация API запроса
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = users.find(
            (u) => u.login === loginValue && u.password === passwordValue
          );
          if (user) {
            resolve(user);
          } else {
            reject(new Error("Неверный логин или пароль"));
          }
        }, 1000);
      });

      setCurrentUser(response);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(response));
      navigate("/profile");
      toast.success("Вы успешно вошли в систему");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    navigate("/");
    toast.success("Вы успешно вышли из системы");
  };

  if (isLoading) {
    // Можно добавить компонент загрузки
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        Загрузка...
      </div>
    );
  }

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