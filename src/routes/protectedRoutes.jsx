import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";

const ProtectedRoute = ({ allowedRoles }) => {
  const { isLoggedIn, role } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    if (role === "admin") {
      return <Navigate to="/admin-dashboard" replace />;
    } else {
      return <Navigate to="/user-dashboard" replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
