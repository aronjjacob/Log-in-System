import { useState } from "react"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

export default function App() {
  const [page, setPage] = useState("login")

  return (
    <>
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
    </>
  )
}