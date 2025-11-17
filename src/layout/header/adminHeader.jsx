import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <nav className="flex justify-around w-[20%]   bg-blue-800 text-white py-4 font-bold">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="setting">Setting</Link>
      <Link to="/logout">Logout </Link>
      <Link to="/create-user">Create User</Link>
      <Link to="/stores">Stores</Link>
    </nav>
  );
};

export default AdminHeader;
