import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo25 from '../assets/Logo 25.png'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('admin_auth', 'true')
      navigate('/admin')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#121212] px-6 py-12">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-[#1e1e1e]/60 p-8 backdrop-blur-md shadow-2xl shadow-black/50 sm:p-10">
        <div className="flex flex-col items-center">
          <img src={logo25} className="h-16 w-auto object-contain brightness-0 invert" alt="ZENVÍXO Logo" />
          <h2 className="mt-6 text-center font-display text-3xl font-bold tracking-tight text-white">
            Admin Portal
          </h2>
          <p className="mt-2 text-sm text-white/55">Sign in to manage ZENVÍXO contents</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400 text-center">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-white/80 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#121212]/80 px-4 py-3 text-white placeholder-white/30 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white/80 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#121212]/80 px-4 py-3 text-white placeholder-white/30 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-xl bg-brand py-3 px-4 text-sm font-semibold text-white hover:bg-brand-light hover:scale-[1.02] shadow-lg shadow-brand/20 transition-all duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
