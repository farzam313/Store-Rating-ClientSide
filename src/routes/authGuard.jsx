import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";
import { useNavigate } from "react-router-dom";

const AuthGuard = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (isLoggedIn) {
    return <Navigate to="/Dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
