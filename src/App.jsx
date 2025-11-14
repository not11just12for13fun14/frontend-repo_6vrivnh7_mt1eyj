import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Books from './pages/Books'
import Transactions from './pages/Transactions'
import Users from './pages/Users'
import Reports from './pages/Reports'
import Assistant from './pages/Assistant'
import Settings from './pages/Settings'
import Billing from './pages/Billing'
import Documents from './pages/Documents'

export default function App(){
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </ThemeProvider>
  )
}
