import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import AdminSideBar from "../../layout/sideBar/adminSideBar";
import Card from "../../components/common/Card";
import ManageStore from "./ManageStore";
import StarRating from "./StarRating";

function StorePanel() {
  const { token } = useAuth();
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedStore, setSelectedStore] = useState(null);
  const limit = 8;

  const handleSelectStore = (store) => {
    setSelectedStore(store);
  };

  const fetchStoreData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        import.meta.env.VITE_URL + `/api/stores?page=${page}&limit=${limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch store data");
      }

      const data = await response.json();
      const stores = Array.isArray(data)
        ? data
        : Array.isArray(data.data)
          ? data.data
          : [];

      setStoreData(stores);
      setTotalPages(data?.meta?.totalPages ?? 1);
    } catch (err) {
      console.error("Error fetching store data:", err);
      setError(err.message || "Failed to load stores");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoreData();
  }, [token, page]);

  if (selectedStore) {
    return (
      <ManageStore
        store={selectedStore}
        onBack={() => setSelectedStore(null)}
        onStoreDeleted={fetchStoreData}
      />
    );
  }

  return (
    <div className="flex">
      {/* <AdminSideBar /> */}
      <main className="flex-1 ml-64 pt-20 min-h-screen bg-gray-100">
        <div className="p-6">
          {loading && <p>Loading stores...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {storeData.map((store) => (
                <Card
                  onClick={() => handleSelectStore(store)}
                  key={store.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 m-4 hover:shadow-lg hover:cursor-pointer transition-shadow duration-100"
                >
                  <h2 className="text-lg font-semibold mb-2">{store.name}</h2>
                  <p className="text-gray-600 mb-2">{store.description}</p>
                  <p className="text-gray-600 mb-2">{store.address}</p>
                  <div className="text-gray-600 mb-2">
                    Rating: <StarRating rating={store.rating} />
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-4">
            {/* Pagination controls butons */}
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50 hover:cursor-pointer hover:bg-gray-400 transition-colors duration-300"
            >
              Previous
            </button>
            <span className="px-4 py-2 mx-1">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((next) => Math.min(next + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50 hover:cursor-pointer hover:bg-gray-400 transition-colors duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StorePanel;
