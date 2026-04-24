import { useState } from "react"

export default function SignupForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setError("")
    console.log({ username, password })
  }

  return (
    <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5 flex flex-col items-stretch">

      {/* Username */}
      <div className="flex flex-col items-start w-full">
        <label className="text-[10px] uppercase text-outline tracking-[0.2em] mb-1">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="w-full h-12 bg-surface-container-highest/50 border border-white/10 px-4 rounded-lg outline-none focus:border-primary"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col items-start w-full">
        <label className="text-[10px] uppercase text-outline tracking-[0.2em] mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full h-12 bg-surface-container-highest/50 border border-white/10 px-4 rounded-lg outline-none focus:border-primary"
        />
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col items-start w-full">
        <label className="text-[10px] uppercase text-outline tracking-[0.2em] mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full h-12 bg-surface-container-highest/50 border border-white/10 px-4 rounded-lg outline-none focus:border-primary"
        />
      </div>

      {/* Error message */}
      {error && (
        <p className="text-red-400 text-sm">
          {error}
        </p>
      )}

      {/* Button */}
      <button
        type="submit"
        className="w-full h-12 bg-primary-container text-black font-bold rounded-lg hover:shadow-[0_0_25px_rgba(0,209,255,0.4)] transition active:scale-[0.98]"
      >
        Sign Up
      </button>

    </form>
  )
}