import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Pages
import Login from "./pages/auth/Login";
import Dashboard from "./pages/auth/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
