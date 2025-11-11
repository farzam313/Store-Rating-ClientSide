import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { logout } from "../contexts/authContext";
import Card from "../components/common/Card";
// import { useNavigate } from "react-router";
import Footer from "../layout/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    logout();
  };
  return (
    <>
      <div className="flex-center h-screen flex-col">
        <h1 className="text-2xl">Welcome to Dashboard</h1>
        <br />
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
    </>
  );
};
export default Dashboard;
