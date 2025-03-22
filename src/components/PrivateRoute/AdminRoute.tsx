import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function AdminRoute() {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (role !== "ADMIN") return <Navigate to="/reservations" replace />;

  return <Outlet />;
}

export default AdminRoute;
