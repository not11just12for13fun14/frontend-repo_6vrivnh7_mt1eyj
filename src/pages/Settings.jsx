import React from 'react'
import Layout from '../components/Layout'
import { useTheme } from '../components/ThemeProvider'

export default function Settings(){
  const { mode, setMode, accent, setAccent, accents } = useTheme()
  return (
    <Layout>
      <div className="p-6">
        <div className="text-lg font-semibold">Customization</div>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4">
            <div className="font-medium">Theme</div>
            <div className="mt-3 flex items-center gap-3">
              <button onClick={()=>setMode('light')} className={`px-3 py-2 rounded-md border ${mode==='light'?'border-[var(--accent)] text-[var(--accent)]':'border-slate-300 dark:border-slate-700'}`}>Light</button>
              <button onClick={()=>setMode('dark')} className={`px-3 py-2 rounded-md border ${mode==='dark'?'border-[var(--accent)] text-[var(--accent)]':'border-slate-300 dark:border-slate-700'}`}>Dark</button>
            </div>
            <div className="mt-4">
              <div className="text-sm text-slate-500 mb-2">Accent Color</div>
              <div className="flex gap-3">
                {Object.keys(accents).map(k=> (
                  <button key={k} onClick={()=>setAccent(k)} className={`h-8 w-8 rounded-full ring-2 ${accent===k?'ring-[var(--accent)] ring-offset-2 ring-offset-white dark:ring-offset-slate-900':''}`} style={{background: accents[k].light}} />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4">
            <div className="font-medium">Security</div>
            <div className="mt-3 text-sm text-slate-500">2FA, RBAC, and backups are available. Configure providers in the backend.</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
