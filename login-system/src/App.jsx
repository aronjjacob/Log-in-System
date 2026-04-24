import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import HashDemo from "./pages/HashDemo"

export default function App() {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={() => navigate("/demo")} />} />
      <Route
        path="/demo"
        element={<HashDemo onLogout={() => navigate("/")} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
