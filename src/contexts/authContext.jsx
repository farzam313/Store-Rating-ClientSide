import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    if (!decoded?.exp) return false;
    return Date.now() >= decoded.exp * 1000;
  } catch {
    return true;
  }
};

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [role, setRole] = useState(() => localStorage.getItem("role"));
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return !isTokenExpired(savedToken);
  });

  const clearAuth = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
    setIsLoggedIn(false);
  }, []);

  const logout = useCallback(() => {
    clearAuth();
  }, [clearAuth]);
  useEffect(() => {
    const checkSession = () => {
      if (document.visibilityState === "visible") {
        if (!token || isTokenExpired(token)) {
          clearAuth();
        } else {
          setIsLoggedIn(true);
        }
      }
    };

    checkSession();

    window.addEventListener("focus", checkSession);
    document.addEventListener("visibilitychange", checkSession);

    return () => {
      window.removeEventListener("focus", checkSession);
      document.removeEventListener("visibilitychange", checkSession);
    };
  }, [token, clearAuth]);

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
