import { useEffect, useState } from "react"

const hashText = async (value) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(value)
  const digest = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

const defaultInputValue = "hello_world_2024"
const defaultInputA = "password123"
const defaultInputB = "password124"

export default function HashDemo({ onLogout }) {
  const [inputValue, setInputValue] = useState(defaultInputValue)
  const [hashResult, setHashResult] = useState("")
  const [isHashing, setIsHashing] = useState(false)
  const [copied, setCopied] = useState(false)

  const [inputA, setInputA] = useState(defaultInputA)
  const [inputB, setInputB] = useState(defaultInputB)
  const [hashA, setHashA] = useState("")
  const [hashB, setHashB] = useState("")
  const [isComparing, setIsComparing] = useState(false)

  const generateHash = async (value) => {
    setIsHashing(true)
    const result = await hashText(value)
    setHashResult(result)
    setIsHashing(false)
  }

  const compareHashes = async (valueA, valueB) => {
    setIsComparing(true)
    const [resultA, resultB] = await Promise.all([
      hashText(valueA),
      hashText(valueB),
    ])
    setHashA(resultA)
    setHashB(resultB)
    setIsComparing(false)
  }

  const handleCopy = async () => {
    if (!hashResult) {
      return
    }
    await navigator.clipboard.writeText(hashResult)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  useEffect(() => {
    const seedHashes = async () => {
      const [mainHash, initialHashA, initialHashB] = await Promise.all([
        hashText(defaultInputValue),
        hashText(defaultInputA),
        hashText(defaultInputB),
      ])
      setHashResult(mainHash)
      setHashA(initialHashA)
      setHashB(initialHashB)
    }
    seedHashes()
  }, [])

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold tracking-[0.3em] text-white">
            HASH_LAB
          </span>
          <span className="text-xs text-primary/90 border-b-2 border-primary/70 pb-1">
            SHA-256 Hashing Demo
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-9 h-9 border border-white/10 rounded-lg bg-white/5 text-outline flex items-center justify-center"
            aria-label="Settings"
          >
            ⚙
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="px-6 py-10 space-y-10">
        <section className="text-center space-y-3">
          <h1 className="text-lg font-semibold text-primary m-0">
            SHA-256 Hashing Demo
          </h1>
          <p className="text-xs text-outline max-w-xl mx-auto">
            This demo shows how input text is transformed into a secure hash
            using a cryptographic one-way function.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary m-0">
                Input Section
              </h2>
              <span className="text-outline text-sm">↩</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-outline">
                Enter Text / Password
              </label>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-lg bg-black/40 border border-white/10 p-3 text-sm text-white outline-none focus:border-primary/70"
              />
            </div>

            <button
              type="button"
              onClick={() => generateHash(inputValue)}
              className="w-full h-11 rounded-lg bg-primary text-black text-xs font-semibold tracking-[0.2em] flex items-center justify-center gap-2"
              disabled={isHashing}
            >
              <span className="inline-flex w-2 h-2 bg-black/70 rounded-sm"></span>
              {isHashing ? "Generating..." : "Generate Hash"}
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary m-0">
                Hash Output
              </h2>
              <span className="text-outline text-sm">🔒</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-outline">SHA-256 Digestion</p>
              <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-[11px] text-emerald-300 font-mono break-all min-h-[84px]">
                {hashResult}
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full h-11 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <span className="text-primary">⧉</span>
              {copied ? "Copied" : "Copy Hash Result"}
            </button>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
          <h3 className="text-xs uppercase tracking-[0.35em] text-outline m-0">
            Data Transformation Flow
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2 w-32">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                ⇢
              </div>
              <span className="text-[10px] text-outline">Plaintext Input</span>
            </div>
            <div className="flex-1 h-px bg-white/10"></div>
            <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-white">
              SHA-256 Algorithm
            </div>
            <div className="flex-1 h-px bg-white/10"></div>
            <div className="flex flex-col items-center gap-2 w-32">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                🔒
              </div>
              <span className="text-[10px] text-outline">Fixed-Length Hash</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-primary m-0">
                Avalanche Effect
              </h3>
              <p className="text-xs text-outline">
                See how a tiny change in input creates a massive change in the
                hash.
              </p>
            </div>
            <button
              type="button"
              onClick={() => compareHashes(inputA, inputB)}
              className="px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white"
              disabled={isComparing}
            >
              {isComparing ? "Comparing..." : "Compare Inputs"}
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs text-outline">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Input A
              </div>
              <input
                value={inputA}
                onChange={(e) => setInputA(e.target.value)}
                className="w-full h-10 rounded-lg bg-black/40 border border-emerald-500/40 px-3 text-sm text-white outline-none"
              />
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-outline">
                  Resulting Hash A
                </p>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-[11px] text-emerald-300 font-mono break-all min-h-[52px]">
                  {hashA}
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs text-outline">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>
                Input B (Small Change)
              </div>
              <input
                value={inputB}
                onChange={(e) => setInputB(e.target.value)}
                className="w-full h-10 rounded-lg bg-black/40 border border-fuchsia-500/40 px-3 text-sm text-white outline-none"
              />
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-outline">
                  Resulting Hash B
                </p>
                <div className="rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 p-3 text-[11px] text-fuchsia-200 font-mono break-all min-h-[52px]">
                  {hashB}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-primary">
              ?
            </div>
            <h4 className="text-sm text-white font-semibold m-0">What is Hashing?</h4>
            <p className="text-xs text-outline">
              Hashing is the process of converting an input of any size into a
              fixed-size string of characters, which is typically a hexadecimal
              number.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-200">
              ↷
            </div>
            <h4 className="text-sm text-white font-semibold m-0">One-Way Function</h4>
            <p className="text-xs text-outline">
              It is designed to be a one-way street: it is computationally
              impossible to reverse the hash back into the original plaintext
              input.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 text-left">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
              ✓
            </div>
            <h4 className="text-sm text-white font-semibold m-0">Why It's Secure</h4>
            <p className="text-xs text-outline">
              Even a 1-bit change in input produces a completely different hash,
              making it ideal for verifying data integrity and storing passwords.
            </p>
          </div>
        </section>
      </main>

      <footer className="px-6 py-4 border-t border-white/10 text-[10px] text-outline flex items-center justify-between">
        <span>© 2024 HASH_LAB TERMINAL SYSTEM</span>
        <div className="flex items-center gap-4">
          <span>Documentation</span>
          <span>API Reference</span>
          <span>Security Protocol</span>
        </div>
      </footer>
    </div>
  )
}
