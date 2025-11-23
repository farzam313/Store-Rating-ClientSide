import UserSideBar from "../../layout/sideBar/userSideBar";
const UserDashboard = () => {
  return (
    <div className="flex-center flex-row min-h-screen bg-gray-100 p-4 gap-6">
      <UserSideBar />
      <div>
        <h1 className="text-2xl font-bold my-4">Welcome to User Dashboard</h1>
        <p> Search Store</p>
        <p> rate stores...</p>
        <p> given reviews...</p>
        <p> view profile...</p>
      </div>
    </div>
  );
};

export default UserDashboard;
