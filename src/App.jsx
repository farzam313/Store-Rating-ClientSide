import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/auth/Home";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/auth/SignUp";

import ProtectedRoute from "./routes/protectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      <Routes>
        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
