import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Card from "../../components/common/Card";
import EditUser from "./EditUser";

const getPageSize = () => {
  if (window.innerWidth >= 1024) {
    return 10;
  }
  if (window.innerWidth >= 768) {
    return 5;
  }
  return 2;
};

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(() => ({
    page: 1,
    size: getPageSize(),
  }));
  const { page, size } = pagination;
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const nextSize = getPageSize();
      setPagination((current) =>
        current.size === nextSize ? current : { page: 1, size: nextSize },
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${import.meta.env.VITE_URL}/users/paginated?page=${page}&size=${size}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data.users || []);
        setTotalPages(data.totalPages || 1);
        setTotalUsers(data.totalUsers || 0);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        console.error("Error fetching users:", error);
        toast.error(error.message || "Failed to fetch users");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchUsers();
    return () => controller.abort();
  }, [page, size]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPagination((current) => ({ ...current, page: newPage }));
    }
  };

  if (selectedUser) {
    return (
      <EditUser
        user={selectedUser}
        onBack={() => setSelectedUser(null)}
      />
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mt-10">Manage Users</h1>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading users...</p>
      ) : users.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {users.map((user, index) => (
              <Card
                key={user.id || index}
                className="border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition-shadow hover:cursor-pointer hover:bg-gray-200 hover:scale-110 transform"
                onClick={() => setSelectedUser(user)}
              >
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="text-lg font-semibold">
                      {user.name || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-base text-blue-600">
                      {user.email || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Role</p>
                    <p className="text-base font-medium text-gray-700">
                      {user.roles?.[0]?.displayName ||
                        user.roles?.[0]?.name ||
                        "N/A"}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
            >
              Previous
            </button>

            <span className="text-gray-700">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
            >
              Next
            </button>
          </div>

          <p className="text-center text-gray-600 mt-2">
            Total Users: {totalUsers}
          </p>
        </>
      ) : (
        <p className="text-center text-gray-500">No users found</p>
      )}
    </div>
  );
};

export default ManageUser;
