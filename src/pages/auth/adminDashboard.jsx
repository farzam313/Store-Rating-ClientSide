import { Link } from "react-router-dom";
import AdminSideBar from "../../layout/sideBar/adminSideBar";

const AdminDashboard = () => {
  return (
    <div className="flex flex-row gap-10 h-screen overflow-hidden w-full ">
      <aside className="w-64 h-[calc(100vh-4rem)] overflow-hidden ">
        <AdminSideBar />
      </aside>
      <main className=" flex-1 overflow-y-auto flex-row bg-gray-100 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 ">
            <Link to="/admin/store-panel">Manage Stores</Link>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 ">
            Manage users
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 ">
            Manage Moderators
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 ">
            Manage Reviews
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
