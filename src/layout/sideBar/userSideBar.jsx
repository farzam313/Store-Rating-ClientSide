import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaStarHalfAlt,
} from "react-icons/fa";

const UserSideBar = ({ className }) => {
  const sideBarItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "User", path: "/user", icon: <FaUser /> },
    { name: "Setting", path: "/setting", icon: <FaCog /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
    { name: "reviews", path: "/reviews", icon: <FaStarHalfAlt /> },
  ];
  return (
    <div
      className={`flex flex-col h-full bg-blue-800 text-white  items-left justify-start pt-4 gap-4 w-[15%] fixed top-0 left-0 min-h-screen ${className}`}
    >
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
    </div>
  );
};
export default UserSideBar;
