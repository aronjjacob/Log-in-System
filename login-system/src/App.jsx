import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import HashDemo from "./pages/HashDemo"
import Signup from "./pages/Signup"

export default function App() {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={() => navigate("/demo")} />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/demo"
        element={<HashDemo onLogout={() => navigate("/")} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
