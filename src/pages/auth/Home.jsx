import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Store Rating</h1>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Register
        </Link>
        <Link
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700 transition"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
