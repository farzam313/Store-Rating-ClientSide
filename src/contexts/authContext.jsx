import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [role, setRole] = useState(() => localStorage.getItem("role"));
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token"),
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
    setIsLoggedIn(false);
  };

  const login = async (email, password) => {
    try {
      const url = import.meta.env.VITE_URL;

      const response = await fetch(url + "/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        const userRole = data.user.roles[0].name;

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", userRole);

        setToken(data.token);
        setRole(userRole);
        setIsLoggedIn(true);

        return { success: true, role: userRole, message: "Login successful" };
      }

      return { success: false, message: data.message };
    } catch (error) {
      return { success: false, message: "Network error" };
    }
  };

  return (
    <AuthContext.Provider value={{ token, role, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
