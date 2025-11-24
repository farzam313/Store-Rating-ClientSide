import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";

const AuthGuard = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/Dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
