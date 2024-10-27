import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = () => {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
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

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};