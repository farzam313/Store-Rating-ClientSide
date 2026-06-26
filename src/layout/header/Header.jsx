import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext.jsx";
export const Header = () => {
  const { isLoggedIn, role, logout } = useAuth();
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="flex items-center justify-between p-4 bg-blue-400 text-white ">
        <div className="text-2xl font-bold  justify-center">
          {" "}
          <Link to="/">
            <img src="/Icon.png" alt="Store logo" className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="flex gap-10  mr-10   ">
          {isLoggedIn && role === "admin" && (
            <Link to="/admin-dashboard" className="text-white font-bold">
              Admin Dashboard
            </Link>
          )}
          {isLoggedIn && role === "user" && (
            <Link to="/user-dashboard" className="text-white font-bold">
              User Dashboard
            </Link>
          )}
          {isLoggedIn ? (
            <Link to="/login" className="text-white font-bold" onClick={logout}>
              Logout
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-white font-bold">
                Login
              </Link>
              <Link to="/signup" className="text-white font-bold">
                Register
              </Link>
            </>
          )}
        </nav>
        <div className="flex items-center gap-4"></div>
      </header>
    </div>
  );
};
export default Header;
