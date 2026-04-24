import SignupForm from "../components/SignupForm"

export default function Signup({ setPage }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-on-surface font-sans relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-[440px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden relative">

        <div className="p-8 text-center space-y-2">

          <div className="flex items-center justify-center gap-2 text-primary">
            <span className="tracking-widest font-bold text-sm">
              HASH LAB
            </span>
          </div>

          <h1 className="text-2xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-sm text-outline">
            Join the secure system
          </p>
        </div>

        <SignupForm />

        <div className="text-center pb-6">
          <p className="text-sm text-outline">
            Already have an account?{" "}
            <button
              onClick={() => setPage("login")}
              className="text-primary hover:underline"
            >
              Login
            </button>
          </p>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      </div>
    </div>
  )
}