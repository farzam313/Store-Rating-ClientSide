import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaUserPlus,
  FaStore,
} from "react-icons/fa";

const AdminSideBar = () => {
  const sideBarItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "User", path: "/user", icon: <FaUser /> },
    { name: "Setting", path: "/setting", icon: <FaCog /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
    { name: "Create User", path: "/create-user", icon: <FaUserPlus /> },
    { name: "Stores", path: "/stores", icon: <FaStore /> },
  ];
  return (
    <div className="flex flex-col h-full bg-blue-800 text-white p-4 items-left justify-start pt-8 gap-8 w-[15%]">
      {sideBarItems.map((item) => (
        <Link
          to={item.path}
          className="flex items-center space-x-2 mb-4 hover:text-gray-300"
        >
          {item.icon} <span>{item.name}</span>{" "}
        </Link>
      ))}
    </div>
  );
};

export default AdminSideBar;
