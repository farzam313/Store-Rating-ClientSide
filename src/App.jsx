import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";

import Home from "./pages/auth/Home";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/auth/SignUp";
import UserDashboard from "./pages/user/userDashboard";
import ProtectedRoute from "./routes/protectedRoutes";
import AdminDashboard from "./pages/auth/adminDashboard";
import Footer from "./layout/Footer";
import PublicRoute from "./routes/publicRoutes";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      <Routes>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route path="/" element={<Home />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
