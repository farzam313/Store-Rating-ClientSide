import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaStarHalfAlt,
} from "react-icons/fa";
import { useAuth } from "../../contexts/authContext.jsx";

const UserSideBar = ({ className }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const sideBarItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "User", path: "/user", icon: <FaUser /> },
    { name: "Setting", path: "/setting", icon: <FaCog /> },
    { name: "reviews", path: "/reviews", icon: <FaStarHalfAlt /> },
  ];
  return (
    <div
      className={`flex flex-col h-full bg-blue-800 text-white  items-left justify-start pt-4 gap-4 w-[15%] fixed top-0 left-0 min-h-screen ${className}`}
    >
      <nav className="flex-1 flex flex-col gap-4">
        {sideBarItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center p-2 hover:bg-blue-600 gap-2 rounded w-full"
          >
            <span className="text-lg">{item.icon}</span>
            <Link to={item.path} className="text-md font-medium">
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="p-2 border-t border-blue-600">
        <Button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded py-2"
        >
          <FaSignOutAlt />
          Logout
        </Button>
      </div>
    </div>
  );
};
export default UserSideBar;
