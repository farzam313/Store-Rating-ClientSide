import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please provide both email and password");
      return;
    }

    setIsLoading(true);
    const result = await login(email, password);
    setIsLoading(false);

    if (result.success) {
      toast.success(result.message);
      navigate("/user-dashboard");
    } else {
      toast.error("Login failed: " + result.message);
    }
  };

  return (
    <div className="flex flex-col max-w-md mx-auto my-40 p-6 border border-gray-300 rounded-lg shadow-2xl">
      <h2 className="flex-center text-3xl pb-3 font-serif">Login Form</h2>

      <Label htmlFor="email">Enter your Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <Label htmlFor="pass">Enter your Password</Label>
      <Input
        id="pass"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <Button
        type="submit"
        disabled={isLoading}
        className="flex-center mx-auto bg-blue-600 text-white px-4 rounded disabled:bg-blue-300"
        onClick={handleLogin}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </div>
  );
};

export default Login;
