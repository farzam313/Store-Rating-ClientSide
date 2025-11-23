import AdminSideBar from "../../layout/sideBar/adminSideBar";

const AdminDashboard = () => {
  return (
    <div className="flex flex-row flex-center gap-10 min-h-screen w-full border-2 border-green-500">
      <AdminSideBar />
      <div>
        <p>Manage Stores</p>
        <p> Manage users</p>
        <p> Manage Moderators </p>
        <p> Manage Reviews </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
