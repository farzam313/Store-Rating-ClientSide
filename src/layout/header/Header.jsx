import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext.jsx";
export const Header = () => {
  const { isLoggedIn, role, logout } = useAuth();
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="flex items-center justify-between p-4 bg-green-800 text-white ">
        <div className="text-2xl font-bold  justify-center">
          {" "}
          <Link to="/">
            <img src="/Icon.png" alt="Store logo" className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="flex gap-10  mr-10   ">
          {isLoggedIn && role === "admin" && (
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          )}
          {isLoggedIn && role === "user" && (
            <Link to="/user-dashboard">User Dashboard</Link>
          )}
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/signup" className="btn">
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
