import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import users from "../data/userData";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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