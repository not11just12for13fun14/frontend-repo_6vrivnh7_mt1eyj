import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext()

const ACCENTS = {
  blue: { light: '#0EA5E9', dark: '#38BDF8' },
  teal: { light: '#10B981', dark: '#0EA5E9' },
  emerald: { light: '#10B981', dark: '#10B981' },
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light')
  const [accent, setAccent] = useState('blue')

  useEffect(() => {
    const m = localStorage.getItem('lv-mode') || 'light'
    const a = localStorage.getItem('lv-accent') || 'blue'
    setMode(m)
    setAccent(a)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    localStorage.setItem('lv-mode', mode)
  }, [mode])

  useEffect(() => {
    localStorage.setItem('lv-accent', accent)
  }, [accent])

  const value = useMemo(() => ({ mode, setMode, accent, setAccent, accents: ACCENTS }), [mode, accent])

  return (
    <ThemeContext.Provider value={value}>
      <div className={mode === 'dark' ? 'bg-[#0F172A] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'}>
        <style>{`
          :root { --accent: ${ACCENTS[accent].light}; }
          .dark :root, .dark { --accent: ${ACCENTS[accent].dark}; }
        `}</style>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
