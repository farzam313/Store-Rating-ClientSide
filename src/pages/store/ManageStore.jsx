import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/authContext";
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
import UpdateStore from "./UpdateStore";
import StarRating from "./StarRating";

const ManageStore = ({ store, onBack, onStoreDeleted }) => {
  const { token } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [currentStore, setCurrentStore] = useState(store);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentsError, setCommentsError] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      if (!currentStore?.id) {
        setComments([]);
        setCommentsError("");
        return;
      }

      setLoadingComments(true);
      setCommentsError("");

      try {
        const response = await fetch(
          `${import.meta.env.VITE_URL}/reviews/store/${currentStore.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          },
        );

        // 1. FIRST check if the response is ok
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || "Failed to load comments");
        }

        const data = await response.json();
        console.log(data);

        // 3. Extract your array (fallback to empty array if undefined/null)
        // Note: Make sure your backend returns 'comment' or 'comments' as an array.
        const fetchedComments = data || [];

        setComments(Array.isArray(fetchedComments) ? fetchedComments : []);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]);
        setCommentsError(error.message || "Unable to load comments right now.");
      } finally {
        setLoadingComments(false);
      }
    };

    fetchComments();
  }, [currentStore?.id, token]);

  const handleDelete = async (storeToDelete) => {
    try {
      const confirmDelete = window.confirm(
        `Are you sure you want to delete this store: "${storeToDelete.name}"?`,
      );
      if (!confirmDelete) {
        return;
      }
      const result = await fetch(
        import.meta.env.VITE_URL + `/api/stores/${storeToDelete.id}`,
        {
          method: "DELETE",
        },
      );

      onStoreDeleted();
      onBack();
      toast.success("Store deleted successfully");
    } catch (error) {
      console.error("Error deleting store:", error);
    }
  };

  if (isEditing) {
    return (
      <UpdateStore
        store={currentStore}
        onBack={() => setIsEditing(false)}
        onStoreUpdated={(updatedStore) => {
          setCurrentStore(updatedStore);
          setIsEditing(false);
          onStoreDeleted?.();
        }}
      />
    );
  }

  return (
    <div className="flex flex-col max-w-4xl mx-auto my-40 p-6 border border-gray-300 rounded-lg shadow-2xl">
      <div className="flex justify-between items-center mb-4 ">
        <button
          onClick={onBack}
          className="   text-xl text-blue-500  hover:cursor-pointer flex items-center justify-center gap-2"
        >
          <LuArrowLeft className="inline-block mr-2" />
        </button>
        <LuPencil
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
          onClick={() => setIsEditing(true)}
        />
        <LuTrash2
          className="text-red-500 hover:text-red-700 cursor-pointer"
          onClick={() => handleDelete(currentStore)}
        />

        <LuLock className="text-green-500 hover:text-green-700 cursor-pointer" />
        <LuShare2 className="text-purple-500 hover:text-purple-700 cursor-pointer" />
        <LuMessageSquare className="text-gray-500 hover:text-gray-700 cursor-pointer" />
      </div>

      <div className="bg-white p-6 rounded-lg  border border-gray-200 ">
        <h1 className="py-5 font-bold font-serif ">{currentStore.name}</h1>
        <p>{currentStore.description}</p>
        <p className="flex items-center gap-2 py-5">
          <LuMapPin />
          {currentStore.address}
        </p>
        <p className="py-5">Rating: {<StarRating rating={store.rating} />}</p>
        <h3 className="mt-4 flex-center text-md font-bold">Comments</h3>
        {loadingComments ? (
          <p>Loading comments...</p>
        ) : commentsError ? (
          <p className="text-red-500 mt-2">{commentsError}</p>
        ) : comments.length === 0 ? (
          <p>No Comments Available for this store.</p>
        ) : (
          <div className="mt-2">
            {comments.map((comment, index) => {
              const text = comment.comment;
              const author = comment.user?.name ?? "Anonymous";
              const rating = comment.rating ?? null;

              return (
                <div
                  key={comment.id ?? `${author}-${index}`}
                  className="border-b border-gray-200 py-2"
                >
                  <div className="text-gray-700">{text}</div>

                  <div className="text-gray-500 text-sm">- {author}</div>

                  {rating !== null && (
                    <div className="text-yellow-600 text-sm mt-1">
                      <StarRating rating={rating} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageStore;
