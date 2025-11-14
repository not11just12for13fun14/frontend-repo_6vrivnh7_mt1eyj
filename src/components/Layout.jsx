import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, Library, Settings, Users, BookOpen, Bot, BarChart2, CreditCard, Layers, Sun, Moon, FileText } from 'lucide-react'
import { useTheme } from './ThemeProvider'

function NavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:scale-[1.01] hover:shadow-sm ${isActive ? 'bg-[var(--accent)]/10 text-[var(--accent)]' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'}`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </NavLink>
  )
}

export default function Layout({ children }) {
  const { mode, setMode } = useTheme()
  return (
    <div className="min-h-screen flex">
      <aside className="hidden md:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 p-4 gap-2 bg-white/70 dark:bg-slate-900/50 backdrop-blur">
        <Link to="/" className="flex items-center gap-2 px-2 py-3 rounded-md">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#1E3A8A] shadow-md" />
          <div>
            <div className="font-bold tracking-tight">LibVault</div>
            <div className="text-xs text-slate-500">Cinematic Library OS</div>
          </div>
        </Link>
        <nav className="mt-2 flex-1 space-y-1">
          <NavItem to="/dashboard" icon={Library} label="Dashboard" />
          <NavItem to="/books" icon={BookOpen} label="Books" />
          <NavItem to="/documents" icon={FileText} label="Documents" />
          <NavItem to="/transactions" icon={Layers} label="Transactions" />
          <NavItem to="/users" icon={Users} label="Users" />
          <NavItem to="/reports" icon={BarChart2} label="Reports" />
          <NavItem to="/assistant" icon={Bot} label="AI Assistant" />
          <NavItem to="/billing" icon={CreditCard} label="Billing" />
          <NavItem to="/settings" icon={Settings} label="Settings" />
        </nav>
        <div className="mt-auto flex items-center justify-between px-2">
          <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[var(--accent)]">
            {mode === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />} <span className="text-sm">Theme</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 min-w-0">
        {children || <Outlet />}
      </main>
    </div>
  )}
