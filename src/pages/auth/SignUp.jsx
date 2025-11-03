import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Label from "../../components/common/Label";
import toast from "react-hot-toast";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoading(true);
    const url = import.meta.env.VITE_URL;
    console.log({ url, name, email, password });

    try {
      const response = await fetch(url + "/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      console.log({ response });
      const data = await response.json();
      setIsLoading(false);
      console.log("login Successfull: ", data);

      if (!response.ok) {
        toast.error(data.message || "Registration Failed");
        return;
      }

      if (response.ok) {
        toast.success("Registration Successful! Please login.");
      }
    } catch (error) {
      console.log({ error });
      toast.error("Network Error. Please try again later.");
    }
  };
  return (
    <div className="flex flex-start flex-col  max-w-md mx-auto my-40 p-6 border-2 border-green-500 rounded-lg shadow-2xl py-5">
      <div className="flex-center text-3xl pb-3 font-serif">
        <h1>Sign Up</h1>
      </div>
      <Label htmlFor="name"> Enter Your Full Name</Label>
      <Input
        type="text"
        id="name"
        placeholder="Full Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Label
        htmlFor="email"
        id="email"
        onChange={(e) => {
          setName(e.target.value);
        }}
      >
        Enter your Email
      </Label>
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Label htmlFor="password" id="password">
        Choose a Password
      </Label>
      <Input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Label htmlFor="confirmPassword" id="confirmpassword">
        Confirm your Password
      </Label>
      <Input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <Button
        className="bg-green-600 text-white px-4 rounded my-5"
        onClick={handleSignUp}
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </div>
  );
};

export default SignUp;
