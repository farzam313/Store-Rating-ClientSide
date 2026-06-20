import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import AdminSideBar from "../../layout/sideBar/adminSideBar";
import Card from "../../components/common/Card";

function StorePanel() {
  const { token } = useAuth();
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_URL + "/api/stores", {
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch store data");
        }
        const data = await response.json();
        setStoreData(data);
      } catch (err) {
        console.error("Error fetching store data:", err);
        setError(err.message || "Failed to load stores");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [token]);

  const storeOptions = [
    "Search store",
    "Update store",
    "Delete Store",
    "Add new store",
    "Freeze Store",
  ];
  return (
    <div className="flex">
      <AdminSideBar />
      <main className="flex-1 ml-64 pt-20 min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {storeOptions.map((index) => (
            <Card key={index}>{index}</Card>
          ))}
        </div>

        <div className="p-6">
          {loading && <p>Loading stores...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {storeData.map((store) => (
                <div
                  key={store.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 m-4"
                >
                  <h2 className="text-lg font-semibold mb-2">{store.name}</h2>
                  <p className="text-gray-600 mb-2">{store.description}</p>
                  <p className="text-gray-600 mb-2">
                    Location: {store.location}
                  </p>
                  <p className="text-gray-600 mb-2">Rating: {store.rating}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default StorePanel;
