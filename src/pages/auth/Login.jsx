import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Label from "../../components/common/Label";
import { useState } from "react";

const handleLogin = (email, password) => {
  const login = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log(await response.json());
    } catch (err) {
      console.error("Login failed", err);
    }
  };
  login();
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <label htmlFor="pass">Enter your Password</label>
      <Input
        id="pass"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button
        type="submit"
        className="flex-center mx-auto bg-blue-600 text-white px-4  rounded"
        onClick={() => handleLogin(email, password)}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
