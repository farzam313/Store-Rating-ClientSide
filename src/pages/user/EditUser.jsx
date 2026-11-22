const EditUser = ({ user, onBack }) => {
  return (
    <div className="max-w-2xl mx-auto pt-20 flex flex-col items-center justify-center">
      <section className="border border-gray-300 p-6 rounded-lg shadow">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 text-blue-600 hover:underline"
        >
          Back to users
        </button>
        <h1 className="text-2xl font-semibold mb-4">Edit User</h1>
        <p className="mb-2">
          <span className="font-medium">Name:</span> {user.name || "N/A"}
        </p>
        <p className="mb-2">
          <span className="font-medium">Email:</span> {user.email || "N/A"}
        </p>
        <p>
          <span className="font-medium">Role:</span>{" "}
          {user.roles?.[0]?.displayName || user.roles?.[0]?.name || "N/A"}
        </p>
      </section>
    </div>
  );
};

export default EditUser;
