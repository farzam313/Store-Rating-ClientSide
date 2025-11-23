import { Link } from "react-router-dom";
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
  const sideBarItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "User", path: "/user", icon: <FaUser /> },
    { name: "Setting", path: "/setting", icon: <FaCog /> },

    { name: "Create User", path: "/create-user", icon: <FaUserPlus /> },
    { name: "Stores", path: "/stores", icon: <FaStore /> },
  ];
  return (
    <div className="flex flex-col bg-blue-600 text-white  items-left  pt-4 gap-4  w-64 fixed top-0 left-0 min-h-screen justify-between">
      <div className="flex flex-col flex-center gap-0 ">
        {sideBarItems.map((item) => (
          <div
            key={item.name}
            className="flex justify-left   w-full p-2 hover:bg-blue-800 gap-3 px-7  rounded-md cursor-pointer f"
          >
            <span className="text-lg">{item.icon}</span>
            <Link to={item.path} className="text-md font-medium">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="border border-t-yellow-500 border-r-green-600 flex flex-center w-full">
        <Button className="my-4 " variant="danger" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
export default AdminSideBar;
