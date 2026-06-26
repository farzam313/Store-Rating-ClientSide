import React from "react";
import toast from "react-hot-toast";
import {
  LuTrash2,
  LuRefreshCw,
  LuLock,
  LuShare2,
  LuPencil,
  LuMessageSquare,
  LuMapPin,
  LuArrowLeft,
} from "react-icons/lu";

const ManageStore = ({ store, onBack, onStoreDeleted }) => {
  const handleDelete = async (store) => {
    try {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete the store "${store.name}"?`,
      );
      if (!confirmDelete) {
        return;
      }
      const result = await fetch(
        import.meta.env.VITE_URL + `/api/stores/${store.id}`,
        {
          method: "DELETE",
        },
      );

      onStoreDeleted();
      onBack();
    } catch (error) {
      console.error("Error deleting store:", error);
    }
  };
  return (
    <div className="flex flex-col max-w-4xl mx-auto my-40 p-6 border border-gray-300 rounded-lg shadow-2xl">
      <div className="flex justify-between items-center mb-4 ">
        <button
          onClick={onBack}
          className="   text-xl text-blue-500  hover:cursor-pointer flex items-center justify-center gap-2"
        >
          <LuArrowLeft className="inline-block mr-2" />
        </button>
        <LuPencil className="text-blue-500 hover:text-blue-700 cursor-pointer" />
        <LuTrash2
          className="text-red-500 hover:text-red-700 cursor-pointer"
          onClick={() => handleDelete(store)}
        />

        <LuLock className="text-green-500 hover:text-green-700 cursor-pointer" />
        <LuShare2 className="text-purple-500 hover:text-purple-700 cursor-pointer" />
        <LuMessageSquare className="text-gray-500 hover:text-gray-700 cursor-pointer" />
      </div>

      <div className="bg-white p-6 rounded-lg  border border-gray-200 ">
        <h1 className="py-5">{store.name}</h1>
        <p>{store.description}</p>
        <p className="flex items-center gap-2 py-5">
          <LuMapPin />
          {store.address}
        </p>
        <p className="py-5">Rating: {store.rating}</p>
      </div>
    </div>
  );
};

export default ManageStore;
