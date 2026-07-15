import React, { useEffect, useState } from "react";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_URL}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch users");
        }

        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <div className="space-y-3">
        {users.map((user, index) => (
          <div key={user.id || index} className="border p-3 rounded">
            <p>
              <strong>Name:</strong> {user.name || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {user.email || "N/A"}
            </p>
            <p>
              <strong>Role:</strong> {user.role || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUser;
