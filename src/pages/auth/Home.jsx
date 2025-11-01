import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-center flex-col h-screen">
      <h3>welcome to Store Rating</h3>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Register</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;
