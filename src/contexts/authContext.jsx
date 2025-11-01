import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Initialize auth state synchronously from localStorage so a page refresh
  // doesn't briefly render as unauthenticated (which would cause an unwanted
  // redirect to /login before the stored token is read).
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );

  const login = async (email, password) => {
    try {
      const url = import.meta.env.VITE_URL;
      const response = await fetch(url + "/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setIsLoggedIn(true);
        return { success: true, message: "Login successful" };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      return { success: false, message: "Network error" };
    }
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const logout = () => {
  localStorage.removeItem("token");
  setToken(null);
  setIsLoggedIn(false);
};
