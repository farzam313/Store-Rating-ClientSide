import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaUserPlus,
  FaStore,
} from "react-icons/fa";

import { useAuth } from "../../contexts/authContext.jsx";

const AdminSideBar = () => {
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

    { name: "Create User", path: "/create-user", icon: <FaUserPlus /> },
    { name: "Stores", path: "/stores", icon: <FaStore /> },
  ];
  return (
    <div className="flex flex-col bg-green-400 text-white  items-left  pt-25 gap-4  w-64 fixed top-0 left-0 min-h-screen justify-between">
      <div className="flex flex-col flex-center gap-0 ">
        {sideBarItems.map((item) => (
          <div
            key={item.name}
            className="flex justify-left   w-full p-2 hover:bg-green-300 gap-3 px-7  rounded-md cursor-pointer f"
          >
            <span className="text-lg">{item.icon}</span>
            <Link to={item.path} className="text-md font-medium">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminSideBar;
