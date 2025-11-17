import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";
import Card from "../components/common/Card";
import AdminSideBar from "../layout/sideBar/adminSideBar.jsx";
const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className=" h-screen flex-row border-2 border-green-500 flex">
        <AdminSideBar />
        <div className="flex flex-col flex-center w-full p-4  ">
          <h1>Wellcome to Dashboard.</h1>
          <div className="flex-center flex-col h-50 ">
            <Card />
            <Button
              onClick={handleLogout}
              className="m-4 bg-red-600 text-black px-4 rounded"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
