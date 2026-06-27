import React, { useState } from "react";
import toast from "react-hot-toast";
import { LuArrowLeft } from "react-icons/lu";

const UpdateStore = ({ store, onBack, onStoreUpdated }) => {
  const [formData, setFormData] = useState({
    name: store?.name || "",
    description: store?.description || "",
    address: store?.address || "",
    rating: store?.rating || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) {
      setError("Store name is required");
      return;
    }

    if (!formData.address.trim()) {
      setError("Address is required");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        import.meta.env.VITE_URL + `/api/stores/${store.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update store");
      }

      const updatedStore = await response.json();
      toast.success("Store updated successfully!");
      onStoreUpdated?.(updatedStore);
      onBack();
    } catch (err) {
      console.error("Error updating store:", err);
      setError(err.message || "Failed to update store");
      toast.error("Failed to update store");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto my-40 p-6 border border-gray-300 rounded-lg shadow-2xl">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="text-xl text-blue-500 hover:text-blue-700 cursor-pointer flex items-center gap-2"
        >
          <LuArrowLeft />
        </button>
        <h1 className="text-3xl font-bold ml-4">Update Store</h1>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Store Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter store name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter store description"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter store address"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            min="0"
            max="5"
            step="0.1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter rating (0-5)"
          />
        </div>

        <div className="flex gap-4 justify-end mt-8">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {loading ? "Updating..." : "Update Store"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateStore;
