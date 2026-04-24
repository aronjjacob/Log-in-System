import { useState } from "react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ username, password })
  }

  return (
    <form className="px-8 pb-8 space-y-5 flex flex-col items-stretch text-left">

      <div>
        <label className="block text-xs uppercase text-outline tracking-widest mb-2">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter identification"
          className="w-full h-12 bg-surface-container-highest/50 border border-white/10 px-4 rounded-lg focus:border-primary outline-none"
        />
      </div>

      <div>
        <label className="block text-xs uppercase text-outline tracking-widest mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full h-12 bg-surface-container-highest/50 border border-white/10 px-4 rounded-lg focus:border-primary outline-none"
        />
      </div>

      <div className="flex items-start gap-3 bg-primary/5 border border-primary/10 p-3 rounded-lg text-sm text-primary/80">
        <span>🔒</span>
        <p>
          Your password will be securely hashed using SHA-256 before transmission.
        </p>
      </div>

      <button
        type="submit"
        className="w-full h-12 bg-primary-container text-black font-bold rounded-lg hover:shadow-[0_0_25px_rgba(0,209,255,0.4)] transition active:scale-[0.98]"
      >
        Login
      </button>

    </form>
  )
}