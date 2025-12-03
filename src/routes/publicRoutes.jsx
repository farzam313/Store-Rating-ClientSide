import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const PublicRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to="/user-dashboard" /> : <Outlet />;
};

export default PublicRoute;
