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
      <div className=" h-screen flex-row  flex">
        <AdminSideBar />
        <div className="flex flex-col flex-center w-full h-full p-4">
          <h1>Wellcome to Dashboard.</h1>
          <div className="flex-center flex-col ">
            <Card className="h-100 w-100 flex flex-center flex-col border-2 border-blue-500" />

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
