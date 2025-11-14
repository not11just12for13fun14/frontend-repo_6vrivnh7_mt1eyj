import React from 'react'
import { motion } from 'framer-motion'

export default function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:block relative bg-[#1E3A8A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#0EA5E9] to-[#10B981] opacity-90" />
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(transparent 60%, rgba(255,255,255,0.08) 60%)'}} />
        <div className="relative h-full w-full flex items-center justify-center p-12">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="max-w-md text-white">
            <div className="text-4xl font-semibold tracking-tight">Welcome to LibVault</div>
            <p className="mt-4 text-white/80 leading-relaxed">A cinematic, AI-enhanced Library OS designed with Fluent-inspired elegance and enterprise polish.</p>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#F8FAFC] dark:bg-[#0F172A] flex items-center justify-center p-8">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="w-full max-w-md bg-white/70 dark:bg-slate-900/50 backdrop-blur rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="text-center">
            <div className="text-2xl font-semibold">Sign in</div>
            <div className="text-sm text-slate-500 mt-1">Access your LibVault workspace</div>
          </div>
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent)]" placeholder="you@domain.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <input type="password" className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent)]" placeholder="••••••••" />
            </div>
            <button type="button" onClick={() => window.location.href='/dashboard'} className="w-full bg-[var(--accent)] text-white rounded-lg py-2.5 font-medium shadow hover:shadow-md active:scale-[.99] transition-all">Continue</button>
            <div className="text-center text-xs text-slate-500">Protected with 2FA and RBAC</div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
